import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/sharp-regular-svg-icons";

import AriaLink from "~/components/aria-link";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 bg-base-200/80 text-base-content shadow backdrop-blur transition-colors">
      <div className="container navbar m-auto p-4">
        <AriaLink
          href="/"
          className="btn btn-ghost font-heading text-3xl font-semibold"
        >
          Purple Mortgage
        </AriaLink>

        <div className="flex-1"></div>

        <label
          htmlFor="sidebar-toggle"
          className="btn btn-square btn-ghost lg:hidden"
          aria-label="open sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </label>

        <div className="hidden gap-2 lg:flex">
          <AriaLink
            href="/meet-the-team"
            className="btn btn-ghost"
          >
            Meet the Team
          </AriaLink>
          <AriaLink
            href="/calculators"
            className="btn btn-ghost"
          >
            Calculators
          </AriaLink>
          <AriaLink
            href="/legal/rates"
            className="btn btn-ghost"
          >
            Rates
          </AriaLink>
          <AriaLink
            href="/login"
            className="btn btn-secondary"
          >
            Login
          </AriaLink>
          <AriaLink
            href="/apply"
            className="btn btn-primary"
          >
            Apply Now
          </AriaLink>
        </div>
      </div>
    </header>
  );
}
