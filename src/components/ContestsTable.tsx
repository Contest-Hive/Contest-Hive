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
      <TableCell className="hidden md:table-cell">
        {new Date().toLocaleDateString()}
      </TableCell>
      <TableCell className="text-right">${randomPrice}.00</TableCell>
    </TableRow>
  );
}

type Contests = {
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
  contestData: Contests;
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
              <TableHead className="hidden sm:table-cell">Type</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
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
              <TableCell className="hidden md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>

            {
              // Add 5 random rows
              Array.from({ length: 20 }, getRow)
            }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
