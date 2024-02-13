"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { defaultsDeep } from "lodash";
import { useEffect, useMemo } from "react";
import { DeepPartial, FormProvider, useForm, useFormContext, useWatch } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

import monthlyPaymentsSchema, {
  MonthlyPaymentsFormValues,
} from "~/components/calculators/monthly-payments/monthly-payments-schema";
import termsOptions from "~/components/calculators/monthly-payments/terms-options";
import Select from "~/components/select";

import useIntlNumberFormat from "~/hooks/use-intl-number-format";

import rates, { LoanTerm } from "~/data/rates";
import calculateMonthlyPayments from "~/utils/calculate-montly-payments";

export type MonthlyPaymentsCalculatorProps = {
  initialValues?: DeepPartial<MonthlyPaymentsFormValues>;
};

const DEFAULT_INITIAL_VALUES: DeepPartial<MonthlyPaymentsFormValues> = {
  principal: 0,
  interestRate: (rates.get(LoanTerm.FIXED_30)?.interestRate ?? 0) * 100,
  terms: LoanTerm.FIXED_30,
};

export default function MonthlyPaymentsCalculator(props: MonthlyPaymentsCalculatorProps) {
  const formMethods = useForm<MonthlyPaymentsFormValues>({
    resolver: zodResolver(monthlyPaymentsSchema),
    defaultValues: defaultsDeep({}, props.initialValues, DEFAULT_INITIAL_VALUES),
    resetOptions: {
      keepDirty: true,
      keepDirtyValues: true,
    },
  });
  const { register, resetField, control, getValues, setValue, formState } = formMethods;
  const registerWithMask = useHookFormMask(register);

  const principal = useWatch({ control, name: "principal" });

  useEffect(() => {
    if (formState.dirtyFields.terms) {
      return;
    }

    const terms = getValues("terms");

    const isJumbo = principal >= 766_550;

    let nextTerms: LoanTerm;
    switch (terms) {
      case LoanTerm.FIXED_15:
      case LoanTerm.JUMBO_FIXED_15:
        nextTerms = isJumbo ? LoanTerm.JUMBO_FIXED_15 : LoanTerm.FIXED_15;
        break;
      case LoanTerm.FIXED_30:
      case LoanTerm.JUMBO_FIXED_30:
        nextTerms = isJumbo ? LoanTerm.JUMBO_FIXED_30 : LoanTerm.FIXED_30;
        break;
      default:
        nextTerms = LoanTerm.FIXED_30;
    }

    if (nextTerms === terms) {
      return;
    }

    setValue("terms", nextTerms, { shouldDirty: false });
  }, [setValue, getValues, principal, formState.dirtyFields.terms]);

  const terms = useWatch({ control, name: "terms" });

  useEffect(() => {
    if (formState.dirtyFields.interestRate) {
      return;
    }
    const interestRate = rates.get(terms)?.interestRate;

    if (interestRate) {
      setValue("interestRate", interestRate * 100, { shouldDirty: false });
    }
  }, [formState.dirtyFields.interestRate, setValue, terms]);

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
            <div className="join">
              <div className="join-item grid aspect-square w-12 shrink-0 place-content-center border border-base-content/20 bg-base-200 text-lg font-semibold">
                $
              </div>
              <input
                {...register("principal", { valueAsNumber: true })}
                className="input join-item input-bordered w-full"
                id="monthly-payment-calculator-principal"
              />
            </div>
          </div>

          <div className="form-control">
            <label
              htmlFor="monthly-payment-calculator-interest-rate"
              className="label"
            >
              <span className="label-text">Interest Rate</span>
            </label>
            <div className="join">
              <input
                {...register("interestRate", { valueAsNumber: true })}
                className="input join-item input-bordered w-full flex-1 text-right"
                id="monthly-payment-calculator-interest-rate"
              />
              <div className="join-item grid aspect-square w-12 shrink-0 place-content-center border border-base-content/20 bg-base-200 text-lg font-semibold">
                %
              </div>
            </div>
          </div>

          <Select
            name="terms"
            control={control}
            label="Years"
            options={termsOptions}
            placeholder="Select a term"
          />

          <div className="col-span-full justify-self-end">
            <Calculation />
          </div>
        </form>
      </div>
    </FormProvider>
  );
}

export function Calculation() {
  const { control } = useFormContext<MonthlyPaymentsFormValues>();
  const [principal, interestRate, terms] = useWatch({
    control,
    name: ["principal", "interestRate", "terms"],
  });

  const years = terms === LoanTerm.FIXED_15 || terms === LoanTerm.JUMBO_FIXED_15 ? 15 : 30;

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
