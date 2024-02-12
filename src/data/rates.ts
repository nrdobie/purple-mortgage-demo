export enum LoanTerm {
  FIXED_15 = "fixed_15_years",
  FIXED_30 = "fixed_30_years",
  JUMBO_FIXED_15 = "jumbo_fixed_15_years",
  JUMBO_FIXED_30 = "jumbo_fixed_30_years",
}

export type Rate = {
  term: LoanTerm;
  interestRate: number;
  annualPercentageRate: number;
};

const rates = new Map<LoanTerm, Rate>([
  [
    LoanTerm.FIXED_15,
    {
      term: LoanTerm.FIXED_15,
      interestRate: 5.75 / 100,
      annualPercentageRate: 6.063 / 100,
    },
  ],
  [
    LoanTerm.FIXED_30,
    {
      term: LoanTerm.FIXED_30,
      interestRate: 6.375 / 100,
      annualPercentageRate: 6.581 / 100,
    },
  ],
  [
    LoanTerm.JUMBO_FIXED_15,
    {
      term: LoanTerm.JUMBO_FIXED_15,
      interestRate: 6.5 / 100,
      annualPercentageRate: 6.646 / 100,
    },
  ],
  [
    LoanTerm.JUMBO_FIXED_30,
    {
      term: LoanTerm.JUMBO_FIXED_30,
      interestRate: 6.5 / 100,
      annualPercentageRate: 6.626 / 100,
    },
  ],
]);

export default rates;
