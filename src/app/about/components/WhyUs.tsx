import {
  Check as CheckIcon,
  X as CrossIcon,
  Info as InfoIcon,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import ResponsiveTooltip from "@/components/ui/responsiveTooltip";

const Check = () => <CheckIcon className="text-green-500" />;
const Cross = () => <CrossIcon className="text-red-500" />;
const Info = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <ResponsiveTooltip content={children ?? ""} className="text-xs md:text-sm" title="Further Information">
      <InfoIcon className="-mt-3 ml-1 h-4 w-4 md:h-5 md:w-5" />
    </ResponsiveTooltip>
  );
};

const listItems = [
  {
    feature: "Shows All Contests",
    contestHive: <Check />,
    stopStalk: <Check />,
    kontests: <Check />,
  },
  {
    feature: "Data Updates",
    contestHive: <b>~5 min</b>,
    stopStalk: <b>~3 hour</b>,
    kontests: <b>~24 hour</b>,
    info: (
      <Info>The interval of time after which the data is fetched and updated</Info>
    ),
  },
  {
    feature: "Open Source",
    contestHive: <Check />,
    stopStalk: <Check />,
    kontests: <Check />,
  },
  {
    feature: "API Support",
    contestHive: <Check />,
    stopStalk: <Cross />,
    kontests: <Check />,
  },
  // {
  //   feature: "Best Performance",
  //   contestHive: <Check />,
  //   stopStalk: <Cross />,
  //   kontests: <Cross />,
  // },
  {
    feature: "Shows Local Time",
    contestHive: <Check />,
    stopStalk: <Cross />,
    kontests: <Check />,
    info: (
      <Info>
        Whether the website shows the local time of the user or not
      </Info>
    ),
  },
  {
    feature: "Sorting Option",
    contestHive: <Check />,
    stopStalk: <Cross />,
    kontests: <Cross />,
  },
  {
    feature: "Google Calendar Event",
    contestHive: <Check />,
    stopStalk: <Check />,
    kontests: <Cross />,
  },
  {
    feature: "Multiple Use Cases",
    contestHive: <Cross />,
    stopStalk: <Check />,
    kontests: <Cross />,
  },
];

function FeatureTable() {
  return (
    <Table className="mb-5 mt-5 text-xs md:text-sm">
      <TableCaption className="text-xs md:text-sm">
        *As of 22th June, 2024 - <b>Kontests</b> is discontinued
      </TableCaption>

      <TableHeader>
        <TableRow className="rounded-md bg-muted/50">
          <TableHead className="w-56">Features</TableHead>
          <TableHead>Contest Hive</TableHead>
          <TableHead>StopStalk</TableHead>
          <TableHead>Kontests</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border-b">
        {listItems.map((item) => (
          <TableRow key={item.feature}>
            <TableCell className="flex items-center justify-start font-medium">
              {item.feature}
              {item.info && item.info}
            </TableCell>
            <TableCell className="text-nowrap md:pl-10">
              {item.contestHive}
            </TableCell>
            <TableCell className="text-nowrap md:pl-10">
              {item.stopStalk}
            </TableCell>
            <TableCell className="text-nowrap md:pl-10">
              {item.kontests}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const WhyUs = () => {
  return (
    <section className="mt-10" id="why-us">
      <header className="mb-5 w-fit scroll-m-20 border-b pb-2 pr-1 text-2xl font-bold tracking-tighter first:mt-0 md:text-3xl lg:text-5xl">
        Why us?
      </header>

      <blockquote className="mt-6 border-l-2 pl-4 text-xs italic md:pl-6 md:text-base">
        There are other platforms which does the same thing -{" "}
        <q className="font-mono font-semibold">Shows Contests</q>
        <br />
        Then how is <b>Contest Hive</b> different?
      </blockquote>
      <blockquote className="mt-2 border-l-2 pl-4 text-xs italic md:pl-6 md:text-base">
        Why does <b>Contest Hive</b> even exist in the first place?
      </blockquote>
      <p className="text-balance text-sm md:text-lg">
        <br />
        See the table below. You&apos;ll get your answers.
      </p>
      <FeatureTable />
    </section>
  );
};

export default WhyUs;
