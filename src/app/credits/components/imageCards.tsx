import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "../../../components/ui/separator";

const PEOPLE = [
  {
    name: "Ahsan Habib Nayef",
    role: "Full-Stack Developer",
    image: "/assets/images/min/ahn.jpg",
    description:
      "A brother of mine who constantly gave me suggestions and ideas to improve the site.",
    links: [
      { name: "github", url: "https://github.com/ahnayef" },
      { name: "telegram", url: "https://t.me/AHNayef" },
      { name: "facebook", url: "https://www.facebook.com/ahsanhabibnayef" },
    ],
  },
  {
    name: "Safin Sarker",
    role: "Competitive Programmer",
    image: "/assets/images/min/safin.jpg",
    description:
      "My friend who helped me make the UI more user-friendly and helped me with color combinations. He's been a great tester too!",
    links: [
      { name: "github", url: "https://github.com/safin01" },
      { name: "telegram", url: "https://t.me/safin_sarker" },
      { name: "facebook", url: "https://www.facebook.com/safinS01" },
      { name: "portfolio", url: "https://safin-sarker.vercel.app/" },
    ],
  },
];

const ME = {
  name: "Nusab Taha",
  role: "Full-Stack Developer",
  image: "/assets/images/min/me.jpg",
  description:
    "And I am the one who put all the ideas together to make this website. :3",
  links: [
    { name: "github", url: "https://github.com/Nusab19" },
    { name: "telegram", url: "https://t.me/Nusab19" },
    { name: "facebook", url: "https://facebook.com/NusabTaha" },
  ],
};

/**
 * Renders a card component displaying a person's profile, including their name, role, image, description, and social media links.
 *
 * @param person - An object containing the person's details:
 *   - name: The person's name.
 *   - role: The person's role or title.
 *   - image: URL to the person's profile image.
 *   - description: A short bio or description of the person.
 *   - links: An array of objects with each social media link's name and URL.
 * @param index - (Optional) A unique index used as a key when rendering a list of cards.
 *
 * @returns A JSX element representing the person's profile card.
 */
function getPersonCard({
  person,
  index,
}: {
  person: {
    name: string;
    role: string;
    image: string;
    description: string;
    links: { name: string; url: string }[];
  };
  index?: number;
}) {
  return (
    <Card className="w-full" key={index}>
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div>
          <CardTitle>{person.name}</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            {person.role}
          </CardDescription>
          <span className="ml-1 mt-1 flex items-center gap-1 md:gap-3">
            {person.links.map((link, index) => (
              <a href={link.url} key={index} target="_blank" rel="noreferrer">
                <Image
                  src={`/assets/svgs/${link.name}.svg`}
                  width={20}
                  height={20}
                  alt={`${link.name} of ${person.name}`}
                  className="md:scale-125"
                />
              </a>
            ))}
          </span>
        </div>
        <Image
          src={person.image}
          alt={person.name}
          width={70}
          height={70}
          className="rounded-full md:scale-110"
          priority
        />
      </CardHeader>
      <CardContent className="text-sm md:text-base">
        <Separator className="mx-auto mb-2 w-[95%]" />
        {person.description}
      </CardContent>
    </Card>
  );
}

const ImageCards = () => {
  return (
    <section className="mt-10 md:mt-20">
      <div className="grid grid-cols-1 content-center gap-2 lg:grid-cols-2">
        {PEOPLE.map((person, index) => getPersonCard({ person, index }))}
        {/* <span className="md:col-span-2 md:mx-auto">
          {getPersonCard({ person: ME })}
        </span> */}
      </div>
    </section>
  );
};

export default ImageCards;
