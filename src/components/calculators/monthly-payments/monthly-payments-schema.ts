import { z } from "zod";

import { LoanTerm } from "~/data/rates";

const monthlyPaymentsSchema = z.object({
  principal: z.number({ coerce: true }).min(1, "Principal must be greater than $1"),
  interestRate: z.number({ coerce: true }).gt(0, "Interest rate must be greater than 0%"),
  terms: z.nativeEnum(LoanTerm),
});

export default monthlyPaymentsSchema;

export type MonthlyPaymentsFormValues = z.infer<typeof monthlyPaymentsSchema>;
