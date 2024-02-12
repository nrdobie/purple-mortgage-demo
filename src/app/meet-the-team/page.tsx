import HeroImage from "~/components/hero-image";

import TeamMember from "~/app/meet-the-team/_components/team-member";
import workGroupNightImg from "~/assets/images/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import workGroupDayImg from "~/assets/images/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import teamMembers from "~/data/team-member";

export const metadata = {
  title: "Meet The Team",
};

export default function MeetTheTeamPage() {
  return (
    <>
      <div className="pt- hero relative isolate h-[80svh] max-h-[30rem] pt-20">
        <HeroImage
          src={workGroupDayImg}
          darkSrc={workGroupNightImg}
        />
        <div className="hero-content bg-neutral/80 p-2 backdrop-blur">
          <h1 className="border-2 border-current p-4 font-heading text-2xl font-semibold text-neutral-content lg:border-4 lg:p-8 lg:text-4xl">
            Meet the Team
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((teamMember) => (
          <TeamMember
            key={teamMember.id}
            teamMember={teamMember}
          />
        ))}
      </div>
    </>
  );
}
