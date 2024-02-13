import { InputHTMLAttributes, SyntheticEvent, useCallback, useMemo, useRef } from "react";
import { Control, FieldPath, FieldValues, UseControllerProps, useController, useFormContext } from "react-hook-form";

import useIntlNumberFormat from "~/hooks/use-intl-number-format";

export type FormattedNumberInputProps<TFieldValues extends FieldValues = FieldValues> = {
  name: FieldPath<TFieldValues>;
  control?: Control<TFieldValues>;
  controllerOptions?: Omit<UseControllerProps<TFieldValues>, "name" | "control">;
  numberFormat: Intl.NumberFormatOptions;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FormattedNumberInput<TFieldValues extends FieldValues = FieldValues>(
  props: FormattedNumberInputProps<TFieldValues>,
) {
  const { name, control: providedControl, controllerOptions, numberFormat, ...inputProps } = props;

  const { control: contextControl } = useFormContext<TFieldValues>();

  const { field, fieldState } = useController({
    name: props.name,
    control: providedControl ?? contextControl,
    ...props.controllerOptions,
  });

  const formatter = useIntlNumberFormat("en-US", numberFormat);

  const value = useMemo(() => {
    if (isNaN(field.value)) {
      return undefined;
    }

    return formatter.format(field.value);
  }, [field.value, formatter]);

  const nextSelection = useRef<number | null>(null);

  const onSelect = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      console.log("select", e.currentTarget.selectionStart, e.currentTarget.selectionEnd);

      const inputEl = e.currentTarget;

      if (inputEl.selectionStart !== inputEl.selectionEnd || !inputEl.selectionStart) {
        return;
      }

      if (nextSelection.current) {
        console.log("setting next selection", nextSelection);
        inputEl.setSelectionRange(nextSelection.current, nextSelection.current, "forward");
        nextSelection.current = null;
        return;
      }

      if (!value) {
        return;
      }

      const lastDigitMatch = value.match(/(\d)\D*$/);

      if (lastDigitMatch === null) {
        return;
      }

      const lastDigitIndex = lastDigitMatch.index! + 1;

      if (inputEl.selectionStart <= lastDigitIndex) {
        return;
      }

      inputEl.setSelectionRange(lastDigitIndex, lastDigitIndex, "forward");
    },
    [value],
  );

  const onChange = useCallback(
    (e: SyntheticEvent<HTMLInputElement>) => {
      const rawValue = e.currentTarget.value;
      const stripped = rawValue.replace(/[^0-9.]+/g, "");

      if (stripped === "") {
        field.onChange(0);
        return;
      }

      let value = parseFloat(stripped);

      // Percentages need to be divided by 100
      if (numberFormat.style === "percent") {
        value = value / 100;
      }

      if (isNaN(value)) {
        return;
      }

      nextSelection.current = e.currentTarget.selectionStart! + 1;
      field.onChange(value);
    },
    [field, numberFormat.style],
  );

  return (
    <input
      {...field}
      onSelect={onSelect}
      onChange={onChange}
      value={value}
      {...inputProps}
    />
  );
}
