import { useMemo } from "react";

type NumberFormatArgs = Parameters<typeof Intl.NumberFormat>;

export default function useIntlNumberFormat(...args: NumberFormatArgs) {
  return useMemo(() => new Intl.NumberFormat(...args), [args]);
}
