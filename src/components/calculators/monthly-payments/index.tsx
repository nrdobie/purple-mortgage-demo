"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/sharp-regular-svg-icons";
import { Listbox, Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultsDeep } from "lodash";
import { Fragment, useMemo } from "react";
import { Controller, DeepPartial, FormProvider, useForm, useWatch } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";
import { z } from "zod";

import useIntlNumberFormat from "~/hooks/use-intl-number-format";

import calculateMonthlyPayments from "~/utils/calculate-montly-payments";

const schema = z.object({
  principal: z.number({ coerce: true }).min(1, "Principal must be greater than $1"),
  interestRate: z.number({ coerce: true }).gt(0, "Interest rate must be greater than 0%"),
  years: z.number({ coerce: true }).min(1, "Must have be at least 1 year").int(),
});

type FormValues = z.infer<typeof schema>;

export type MonthlyPaymentsCalculatorProps = {
  initialValues?: DeepPartial<FormValues>;
};

const DEFAULT_INITIAL_VALUES: DeepPartial<FormValues> = {
  principal: 0,
  interestRate: 6.375,
  years: 30,
};

const YEARS_OPTIONS = [
  { label: "15 Years Fixed", value: 15 },
  { label: "30 Years Fixed", value: 30 },
];

export default function MonthlyPaymentsCalculator(props: MonthlyPaymentsCalculatorProps) {
  const formMethods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: defaultsDeep({}, props.initialValues, DEFAULT_INITIAL_VALUES),
  });
  const { register, control } = formMethods;
  const registerWithMask = useHookFormMask(register);

  return (
    <FormProvider {...formMethods}>
      <div className="max-w-prose">
        <h2 className="font-heading text-2xl font-semibold lg:text-4xl">Monthly Payment Calculator</h2>
        <form
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-control col-span-full">
            <label
              htmlFor="monthly-payment-calculator-principal"
              className="label"
            >
              <span className="label-text">Borrow Amount</span>
            </label>
            <input
              {...registerWithMask("principal", "currency", {
                digits: 0,
                autoUnmask: true,
                valueAsNumber: true,
                rightAlign: false,
              })}
              className="input input-bordered"
              id="monthly-payment-calculator-principal"
            />
          </div>

          <div className="form-control">
            <label
              htmlFor="monthly-payment-calculator-interest-rate"
              className="label"
            >
              <span className="label-text">Interest Rate</span>
            </label>
            <input
              {...registerWithMask("interestRate", "percentage", {
                inputType: "number",
                digits: 3,
                autoUnmask: true,
                valueAsNumber: true,
                rightAlign: false,
              })}
              className="input input-bordered"
              id="monthly-payment-calculator-interest-rate"
            />
          </div>

          <Controller
            control={control}
            name="years"
            render={({ field }) => (
              <Listbox
                {...field}
                as="div"
                className="form-control relative"
              >
                <Listbox.Label className="label">
                  <span className="label-text">Years</span>
                </Listbox.Label>
                <Listbox.Button className="input input-bordered flex items-center justify-between">
                  <span>{YEARS_OPTIONS.find((option) => option.value === field.value)?.label ?? "Select Years"}</span>
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
                    {YEARS_OPTIONS.map((option) => (
                      <Listbox.Option
                        key={option.value}
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
            )}
          />
          <div className="col-span-full justify-self-end">
            <Calculation />
          </div>
        </form>
      </div>
      <div></div>
    </FormProvider>
  );
}

export function Calculation() {
  const [principal, interestRate, years] = useWatch<FormValues>({
    name: ["principal", "interestRate", "years"],
  });

  const formatter = useIntlNumberFormat("en-US", { style: "currency", currency: "USD" });

  const monthlyPayment = useMemo(() => {
    const monthly = calculateMonthlyPayments(principal, interestRate, years);

    if (isNaN(monthly)) {
      return 0;
    }

    return monthly;
  }, [principal, interestRate, years]);

  return (
    <>
      <div className="text-right text-4xl font-semibold">
        {formatter.format(monthlyPayment)}
        <span className="text-lg">/month*</span>
      </div>
      <p className="mt-4 max-w-prose text-justify text-xs italic">
        * &ndash; This calculator provides approximations for informational purposes only. Actual results will be
        provided by your lender and will likely vary depending on your eligibility and current market rates.{" "}
      </p>
    </>
  );
}
