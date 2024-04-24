import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function getRow() {
  const names = [
    "Liam",
    "Emma",
    "Olivia",
    "Noah",
    "Ava",
    "Elijah",
    "Sophia",
    "William",
    "Isabella",
    "James",
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const email = `${randomName.toLowerCase()}@example.com`;
  const types = ["Sale", "Refund", "Sale", "Sale", "Sale"];
  const randomType = types[Math.floor(Math.random() * types.length)];
  const statuses = [
    "Fulfilled",
    "Pending",
    "Fulfilled",
    "Fulfilled",
    "Pending",
  ];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
  const randomPrice = Math.floor(Math.random() * 1000);
  return (
    <TableRow key={Math.random().toString(36).substring(7)}>
      <TableCell>
        <div className="font-medium">{randomName}</div>
        <div className="hidden text-sm text-muted-foreground md:inline">
          {email}
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">Sale</TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          {randomStatus}
        </Badge>
      </TableCell>
      <TableCell className="text-right">${randomPrice}.00</TableCell>
    </TableRow>
  );
}

type Contest = {
  title: string;
  url: string;
  startTime: string;
  endTime: string;
  duration: number;
  platform: string;
};

import { getSecondsDifferencesFromNow } from "@/lib/utils";

export default function ContestsTable({
  contestData,
}: {
  contestData: Contest[];
}) {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Contests</CardTitle>
        <CardDescription>Below are the upcoming contests</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className="hidden sm:table-cell">Starts In</TableHead>
              <TableHead className="hidden sm:table-cell">Duration</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Liam Johnson</div>
                <div className="hidden text-sm text-muted-foreground md:inline">
                  liam@example.com
                </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell">Sale</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Fulfilled
                </Badge>
              </TableCell>
              <TableCell className="hidden text-right md:table-cell">
                13$
              </TableCell>
            </TableRow>

            {contestData.map((contest, index) => {
              return getRow2(contest, index);
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function getRow2(contest: Contest, index: number) {
  return (
    <TableRow key={index}>
      <TableCell>
        <div className="font-medium">Title</div>
        <div className="flex items-center justify-between text-sm text-muted-foreground md:inline">
          <LinkedInLogoIcon /> Atcoder
        </div>
      </TableCell>
      <TableCell className="hidden sm:table-cell">2 hours</TableCell>
      <TableCell className="hidden sm:table-cell">
        <Badge className="text-xs" variant="secondary">
          1 hour
        </Badge>
      </TableCell>
      <TableCell className="text-right">:</TableCell>
    </TableRow>
  );
}
