import { round } from "lodash";

export default function calculateMonthlyPayments(principal: number, interestRate: number, years: number): number {
  const lengthOfLoanInMonths = years * 12;
  const monthlyInterestRate = interestRate / 100 / 12;

  const interestPlusOne = Math.pow(1 + monthlyInterestRate, lengthOfLoanInMonths);

  return round((monthlyInterestRate * principal * interestPlusOne) / (interestPlusOne - 1), 2);
}
