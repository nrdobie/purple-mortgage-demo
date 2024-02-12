import { faker } from "@faker-js/faker";

export type TeamMember = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  profilePictureUrl: string;
};

function generateTeamMember(): TeamMember {
  const id = faker.string.nanoid();
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@purplemortgage.test`;
  const role = faker.helpers.arrayElement([
    "Loan Officer",
    "Senior Loan Officer",
    "Loan Originator",
    "Regional Manager",
    "Branch Manager",
  ]);
  const profilePictureUrl = `https://i.pravatar.cc/300?u=${email}`;

  return {
    id,
    firstName,
    lastName,
    email,
    role,
    profilePictureUrl,
  };
}

faker.seed(123);

const teamMembers = faker.helpers.multiple(generateTeamMember, { count: 50 });

export default teamMembers;
