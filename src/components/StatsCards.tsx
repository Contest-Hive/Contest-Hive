"use client";

import { useEffect, useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ResponsiveTooltip from "@/components/ui/responsiveTooltip";
import { bumpStats, type StatsRow } from "@/lib/stats-client";
import { formatNumber } from "@/lib/utils";

const CARDS = [
  { key: "past24page", title: "Today", description: "visited" },
  { key: "api", title: "Total served", description: "API requests" },
  { key: "page", title: "Total", description: "page visits" },
] as const;

export default function StatsCards() {
  const [stats, setStats] = useState<StatsRow | null>(null);
  const counted = useRef(false);

  useEffect(() => {
    // One mount = one view. The ref also keeps React's dev double-mount from
    // counting twice, so the fetch must not be cancelled by that cleanup or
    // the only response would be thrown away.
    if (counted.current) return;
    counted.current = true;

    bumpStats("page")
      .then((row) => setStats(row))
      .catch((error) => console.error("Failed to update stats:", error));
  }, []);

  return (
    <div className="mx-auto mb-10 flex max-w-screen-md flex-col items-center justify-between gap-2 md:flex-row">
      {CARDS.map((card) => {
        const value = stats?.[card.key] ?? null;
        return (
          <Card key={card.key} className="w-full">
            <CardContent className="pb-4">
              <CardHeader className="py-3">
                <CardTitle className="font-bold text-primary/95">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex flex-col items-center justify-center">
                <span className="text-3xl font-extrabold text-primary">
                  {value === null ? (
                    <span className="text-muted-foreground">&mdash;</span>
                  ) : (
                    <ResponsiveTooltip
                      content={value.toLocaleString()}
                      className="w-fit text-center font-bold"
                    >
                      {formatNumber(value)}
                    </ResponsiveTooltip>
                  )}
                </span>
                <span className="text-sm text-muted-foreground">
                  {card.description}
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
