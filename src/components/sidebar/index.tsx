import AriaLink from "~/components/aria-link";

export default function Sidebar() {
  return (
    <div className="drawer-side z-50 lg:hidden">
      <label
        htmlFor="sidebar-toggle"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <div className="flex min-h-full w-3/4 max-w-64 flex-col gap-2 bg-base-200 p-4">
        <AriaLink
          href="/meet-the-team"
          className="btn btn-ghost btn-block"
        >
          Meet the Team
        </AriaLink>
        <AriaLink
          href="/calculators"
          className="btn btn-ghost btn-block"
        >
          Calculators
        </AriaLink>
        <AriaLink
          href="/legal/rates"
          className="btn btn-ghost btn-block"
        >
          Rates
        </AriaLink>
        <AriaLink
          href="/apply"
          className="btn btn-primary btn-block"
        >
          Apply Now
        </AriaLink>
        <AriaLink
          href="/login"
          className="btn btn-secondary btn-block"
        >
          Login
        </AriaLink>
      </div>
    </div>
  );
}
