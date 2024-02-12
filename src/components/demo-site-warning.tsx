import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammerBrush } from "@fortawesome/sharp-regular-svg-icons";

import AriaLink from "~/components/aria-link";

export default function DemoSiteWarning() {
  return (
    <div className="mb-16 mt-32 grid place-content-center p-12 lg:p-4">
      <div className="flex max-w-prose flex-col items-center gap-4 lg:gap-8">
        <FontAwesomeIcon
          icon={faHammerBrush}
          className="text-[6rem] text-accent lg:text-[10rem]"
        />
        <h1 className="font-heading text-2xl font-bold lg:text-4xl">This Site Isn&apos;t Real</h1>
        <p className="text-center text-sm lg:text-base">
          This is a demo site and is not a real mortgage company. Please do not submit any personal information. If you
          are interested in a mortgage, please contact a real mortgage company.
        </p>
        <AriaLink
          href="/"
          className="btn btn-primary btn-block md:btn-wide"
        >
          Go Home
        </AriaLink>
      </div>
    </div>
  );
}
