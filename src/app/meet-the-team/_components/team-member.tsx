import Image from "next/image";

import { TeamMember as TeamMemberData } from "~/data/team-member";
import getBlurDataUrl from "~/utils/get-blur-data-url";

type TeamMemberProps = {
  teamMember: TeamMemberData;
};

export default async function TeamMember({ teamMember }: TeamMemberProps) {
  const blurDataURL = await getBlurDataUrl(teamMember.profilePictureUrl);

  return (
    <div className="flex items-center overflow-hidden rounded-box bg-primary/20 text-base-content">
      <figure className="avatar">
        <div className="w-40">
          <Image
            src={teamMember.profilePictureUrl}
            alt=""
            width={160}
            height={160}
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
      </figure>
      <div className="flex flex-col overflow-hidden p-4">
        <span className="font-heading text-xl font-semibold leading-tight">
          {teamMember.firstName} {teamMember.lastName}
        </span>
        <span className="text-ellipsis whitespace-nowrap">{teamMember.role}</span>
        <span
          className="overflow-hidden text-ellipsis whitespace-nowrap text-sm"
          title={teamMember.email}
        >
          <a
            href={`mailto:${teamMember.email}`}
            className="hover:underline"
          >
            {teamMember.email}
          </a>
        </span>
      </div>
    </div>
  );
}
