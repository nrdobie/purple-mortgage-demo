import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/sharp-regular-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ControllerProps, FieldPath, FieldValues, UseControllerProps, useController } from "react-hook-form";

export type SelectOption = {
  label: string;
  value: unknown;
};

export type SelectProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TOption extends SelectOption = SelectOption,
> = Pick<UseControllerProps<TFieldValues, TName>, "name" | "control"> & {
  additionalControllerOptions?: Omit<ControllerProps<TFieldValues, TName>, "name" | "control">;
  options: TOption[];
  label?: string;
  showRequiredLabel?: boolean;
  placeholder?: string;
};

export default function Select<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TOption extends SelectOption = SelectOption,
>(props: SelectProps<TFieldValues, TName, TOption>) {
  const { name, control, label, options, placeholder, showRequiredLabel, additionalControllerOptions } = props;

  const { field } = useController({
    name,
    control,
    ...additionalControllerOptions,
  });

  const selectedOption = options.find((option) => option.value === field.value);

  return (
    <Listbox
      {...field}
      as="div"
      className="form-control relative"
    >
      {label ? (
        <Listbox.Label className="label">
          <span className="label-text">{label}</span>
          {showRequiredLabel ? <span className="label-text-alt">Required</span> : null}
        </Listbox.Label>
      ) : null}

      <Listbox.Button className="input input-bordered flex items-center justify-between">
        <span>{selectedOption?.label ?? placeholder ?? ""}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="opacity-50"
        />
      </Listbox.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-auto rounded-btn border border-base-content/10 bg-base-100 shadow">
          {options.map((option, index) => (
            <Listbox.Option
              key={index}
              value={option.value}
              className="flex cursor-pointer items-center gap-2 p-4 transition-colors ui-active:bg-primary/40 lg:py-2"
            >
              <figure className="grid aspect-square w-4 place-content-center">
                {field.value === option.value ? <FontAwesomeIcon icon={faCheck} /> : null}
              </figure>
              <span>{option.label}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
