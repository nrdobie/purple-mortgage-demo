import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/sharp-regular-svg-icons";

import useIntlNumberFormat from "~/hooks/use-intl-number-format";

import rates, { LoanTerm } from "~/data/rates";

export default function Rates() {
  const formatter = useIntlNumberFormat("en-US", { style: "percent", minimumFractionDigits: 3 });

  return (
    <div className="container mx-auto mt-20 space-y-4 px-4 py-8">
      <h1 className="mb-4 font-heading text-2xl font-semibold lg:text-4xl">Rates</h1>
      <div
        className="alert alert-warning"
        role="alert"
      >
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          fixedWidth
        />
        <span>
          This is a demo site and does not offer real mortgages. The rates shown here are for demonstration purposes
          only.
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-semibold lg:text-2xl">Conforming Loan Rates</h2>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Loan Term</th>
                <th>Interest Rate</th>
                <th>APR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="w-2/3">15 Year Fixed-Rate</td>
                <td>{formatter.format(rates.get(LoanTerm.FIXED_15)?.interestRate ?? 0)}</td>
                <td>{formatter.format(rates.get(LoanTerm.FIXED_15)?.annualPercentageRate ?? 0)}</td>
              </tr>
              <tr>
                <td className="w-2/3">30 Year Fixed-Rate</td>
                <td>{formatter.format(rates.get(LoanTerm.FIXED_30)?.interestRate ?? 0)}</td>
                <td>{formatter.format(rates.get(LoanTerm.FIXED_30)?.annualPercentageRate ?? 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-4">
          <h2 className="font-heading text-xl font-semibold lg:text-2xl">Jumbo Loan Rates</h2>
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Loan Term</th>
                <th>Interest Rate</th>
                <th>APR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15 Year Fixed-Rate Jumbo</td>
                <td>{formatter.format(rates.get(LoanTerm.JUMBO_FIXED_15)?.interestRate ?? 0)}</td>
                <td>{formatter.format(rates.get(LoanTerm.JUMBO_FIXED_15)?.annualPercentageRate ?? 0)}</td>
              </tr>
              <tr>
                <td>30 Year Fixed-Rate Jumbo</td>
                <td>{formatter.format(rates.get(LoanTerm.JUMBO_FIXED_30)?.interestRate ?? 0)}</td>
                <td>{formatter.format(rates.get(LoanTerm.JUMBO_FIXED_30)?.annualPercentageRate ?? 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
