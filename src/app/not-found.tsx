import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/sharp-regular-svg-icons/faGhost";

import AriaLink from "~/components/aria-link";

export default function NotFound() {
  return (
    <div className="mb-16 mt-32 grid place-content-center p-12 lg:p-4">
      <div className="flex max-w-prose flex-col items-center gap-4 lg:gap-8">
        <FontAwesomeIcon
          icon={faGhost}
          className="mt-6 animate-floating text-[6rem] text-accent lg:mt-10 lg:text-[10rem]"
        />
        <h1 className="font-heading text-2xl font-bold lg:text-4xl">Page Not Found</h1>
        <p className="text-center text-sm lg:text-base">
          The page you are looking for does not exist. Please check the URL or click the button below to go back to the
          homepage.
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
