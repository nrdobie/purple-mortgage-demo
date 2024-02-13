import { LoanTerm } from "~/data/rates";

const termsOptions = [
  { label: "15 Years", value: LoanTerm.FIXED_15 },
  { label: "30 Years", value: LoanTerm.FIXED_30 },
  { label: "15 Years Jumbo", value: LoanTerm.JUMBO_FIXED_15 },
  { label: "30 Years Jumbo", value: LoanTerm.JUMBO_FIXED_30 },
];

export default termsOptions;
