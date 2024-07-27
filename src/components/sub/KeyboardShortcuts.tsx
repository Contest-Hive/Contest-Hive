import { Separator } from "../ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../ui/card";


const SHORTCUTS = [
  {
    key: "ctrl", // ⌘
    followedByKey: "k",
    description: "Search for a contest",
  },
  {
    key: "alt",
    followedByKey: "f",
    description: "Toggle Focus Mode",
  },
  {
    key: "right arrow",
    followedByKey: "",
    description: "Next Page",
  },
  {
    key: "left arrow",
    followedByKey: "",
    description: "Previous Page",
  },
];

export default function KeyboardShortcuts() {
  const defaultClass =
    "pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 font-mono font-medium text-primary/80 text-sm";

  return (
    <Card className="border-none p-1">
      <CardHeader className="rounded-md bg-muted p-2 text-center mt-1 font-bold text-primary">
        Keyboard Shortcuts
      </CardHeader>
      <CardTitle className="hidden">Keyboard Shortcuts</CardTitle>
      <CardContent className="px-2 py-2 md:py-3">
        {SHORTCUTS.map(({ key, followedByKey, description }) => (
          <div
            key={key}
            className="my-1.5 flex h-6 items-center justify-start gap-2 text-primary"
          >
            <span className="flex min-w-28 items-center justify-between gap-2 pr-2">
              <kbd className={defaultClass}>{key}</kbd>
              {followedByKey && (
                <>
                  <kbd>+</kbd>
                  <kbd className={defaultClass}>{followedByKey}</kbd>
                </>
              )}
            </span>
            <Separator orientation="vertical" className="h-4 bg-primary/50" />
            <CardDescription className="text-primary/80">
              {description}
            </CardDescription>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
