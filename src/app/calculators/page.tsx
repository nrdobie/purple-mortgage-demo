import { faBalanceScale, faCalendar } from "@fortawesome/sharp-regular-svg-icons";
import dedent from "ts-dedent";

import HeroImage from "~/components/hero-image";

import CalulatorCell from "~/app/calculators/_components/calulator-cell";
import calculatorImg from "~/assets/images/kelly-sikkema-3-Tc_5LROrM-unsplash.jpg";

export default function CalculatorsPage() {
  return (
    <>
      <div className="hero relative isolate h-[80svh] max-h-[30rem] pt-20">
        <HeroImage src={calculatorImg} />
        <div className="hero-content bg-neutral/80 p-2 backdrop-blur">
          <h1 className="border-2 border-current p-4 font-heading text-2xl font-semibold text-neutral-content lg:border-4 lg:p-8 lg:text-4xl">
            Calculators
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 xl:grid-cols-3">
        <CalulatorCell
          icon={faCalendar}
          title="Monthly Payments"
          description={dedent`
            Calculate you monthly mortgage payments and
            see a full breakdown of your payments.
          `}
          href="/calculators/monthly-payments"
          buttonLabel="View Calculator"
        />
        <CalulatorCell
          icon={faBalanceScale}
          title="Refinance"
          description={dedent`
            Compare the possible savings of refinancing your home.
          `}
          href="/calculators/refinance"
          buttonLabel="View Calculator"
        />
      </div>
    </>
  );
}
