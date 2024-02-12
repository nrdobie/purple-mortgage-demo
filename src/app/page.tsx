import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBadgeCheck, faBank, faCalculator, faHandWave, faPaperPlane } from "@fortawesome/sharp-regular-svg-icons";

import AriaLink from "~/components/aria-link";
import MonthlyPaymentsCalculator from "~/components/calculators/monthly-payments";
import HeroImage from "~/components/hero-image";

import houseNightImg from "~/assets/images/vu-anh-TiVPTYCG_3E-unsplash.jpg";
import houseDayImg from "~/assets/images/vu-anh-sagfdM-vJQ8-unsplash.jpg";

export default function HomePage() {
  return (
    <>
      <div className="hero relative isolate h-[80svh] max-h-[40rem] pt-20">
        <HeroImage
          src={houseDayImg}
          darkSrc={houseNightImg}
        />
        <div className="hero-content w-full items-end justify-center md:items-center md:justify-end">
          <div className="w-full max-w-md space-y-4 rounded-box bg-base-100/75 p-8 text-base-content backdrop-blur">
            <h1 className="font-heading text-2xl font-semibold lg:text-4xl">Purple Mortgage</h1>
            <p>
              A mortgage company that prioritizes real human interactions. Unlike big banks, we believe in personal
              touch and understanding individual needs.
            </p>
            <AriaLink
              href="/prequalify"
              className="btn btn-primary btn-lg btn-block"
            >
              Get Prequalified
            </AriaLink>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-4 px-4 py-8 md:grid-cols-2 lg:gap-8">
        <div className="flex max-w-prose flex-col items-center gap-4 justify-self-center rounded-box bg-secondary/20 p-8">
          <figure className="grid aspect-square w-16 place-content-center rounded-full bg-secondary text-secondary-content lg:w-24">
            <FontAwesomeIcon
              icon={faBadgeCheck}
              className="text-[2rem] lg:text-[3rem]"
            />
          </figure>
          <h2 className="font-heading text-2xl font-semibold lg:text-4xl">Get Prequalified</h2>
          <p>
            Wondering how much of a home you can afford? Fill out our quick Prequalification form to see how much of a
            mortgage you get get prequalified for.
          </p>
          <div className="flex-1"></div>
          <AriaLink
            href="/prequalify"
            className="btn btn-secondary btn-lg btn-wide"
          >
            Get Prequalified
          </AriaLink>
        </div>
        <div className="flex max-w-prose flex-col items-center gap-4 justify-self-center rounded-box bg-primary/20 p-8">
          <figure className="grid aspect-square w-16 place-content-center rounded-full bg-primary text-primary-content lg:w-24">
            <FontAwesomeIcon
              icon={faBank}
              className="text-[2rem] lg:text-[3rem]"
            />
          </figure>
          <h2 className="font-heading text-2xl font-semibold lg:text-4xl">Apply for Loan</h2>
          <p>
            Are you ready to make an offer on a home? Are you looking to buy a new home or refinance your current loan?
            Then let&apos;s get started with an application. No cost. No hassle.
          </p>
          <div className="flex-1"></div>
          <AriaLink
            href="/apply"
            className="btn btn-primary btn-lg btn-wide"
          >
            Apply Online
          </AriaLink>
        </div>
      </div>
      <div className="bg-accent/20">
        <div className="container relative mx-auto grid grid-cols-1 gap-4 px-4 py-16 md:grid-cols-2 lg:gap-8">
          <FontAwesomeIcon
            icon={faHandWave}
            size="10x"
            className="absolute bottom-4 right-4 -z-10 text-accent/40"
          />
          <div className="max-w-prose justify-self-center p-8">
            <h2 className="mb-4 font-heading text-2xl font-semibold lg:text-4xl">Need Help? Say Hello!</h2>
            <p className="max-w-prose text-lg">
              Not sure where to start? Have questions about the home buying process? We&apos;re here to help. Reach out
              to us and we&apos;ll help you get started.
            </p>
          </div>
          <div className="self-center justify-self-center">
            <a
              href="mailto:hello@purplemortgage.test"
              className="btn btn-accent btn-lg"
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                size="xl"
                fixedWidth
              />
              hello@purplemortgage.test
            </a>
          </div>
        </div>
      </div>
      <div className="bg-primary/20">
        <div className="container mx-auto grid grid-cols-1 gap-4 px-4 py-16 md:grid-cols-2 lg:gap-8">
          <div className="max-w-prose self-center justify-self-center p-8">
            <MonthlyPaymentsCalculator />
          </div>
          <div className="flex w-full max-w-prose flex-col items-center gap-4 self-center justify-self-center rounded-box bg-primary/20 p-8">
            <figure className="grid aspect-square w-16 place-content-center rounded-full bg-primary text-primary-content lg:w-24">
              <FontAwesomeIcon
                icon={faCalculator}
                className="text-[2rem] lg:text-[3rem]"
              />
            </figure>
            <h2 className="font-heading text-2xl font-semibold lg:text-4xl">Make a Plan</h2>
            <p>
              Need help figuring out how much your monthly mortgage payment will be? Want to see how much you can save
              by refinancing? Use our calculators to make a plan.
            </p>
            <AriaLink
              href="/calculators"
              className="btn btn-primary btn-lg"
            >
              View All Calculators
            </AriaLink>
          </div>
        </div>
      </div>
    </>
  );
}
