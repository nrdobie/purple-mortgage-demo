import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AriaLink from "~/components/aria-link";

export type CalulatorCellProps = {
  icon: IconDefinition;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
};

export default function CalulatorCell({ icon, title, description, href, buttonLabel }: CalulatorCellProps) {
  return (
    <div className="group flex w-full max-w-prose flex-col items-center gap-4 self-stretch justify-self-center rounded-box p-4 odd:bg-primary/20 even:bg-secondary/20">
      <figure className="grid aspect-square w-16 place-content-center rounded-full group-odd:bg-primary group-odd:text-primary-content group-even:bg-secondary group-even:text-secondary-content lg:w-24">
        <FontAwesomeIcon
          icon={icon}
          className="text-[2rem] lg:text-[3rem]"
        />
      </figure>
      <h2 className="font-heading text-2xl font-semibold lg:text-4xl">{title}</h2>
      <p className="text-center">{description}</p>
      <div className="flex-1"></div>
      <AriaLink
        href={href}
        className="btn btn-lg btn-wide group-odd:btn-primary group-even:btn-secondary"
      >
        {buttonLabel}
      </AriaLink>
    </div>
  );
}
