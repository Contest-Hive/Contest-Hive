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
    "pointer-events-none inline-flex h-5 select-none items-center rounded border bg-muted px-1.5 font-mono font-medium text-primary text-sm";

  return (
    <Card className="border-none p-1">
      <CardHeader className="rounded-md bg-muted-foreground p-2 text-center font-semibold text-primary-foreground">
        Keyboard Shortcuts
      </CardHeader>
      <CardTitle className="hidden">Keyboard Shortcuts</CardTitle>
      <CardContent className="px-2 py-2 md:py-3">
        {SHORTCUTS.map(({ key, followedByKey, description }) => (
          <div key={key} className="my-1 flex items-center gap-2 text-primary">
            <span className="flex min-w-28 items-center justify-around gap-1">
              <kbd className={defaultClass}>{key}</kbd>
              {followedByKey && (
                <>
                  <kbd>+</kbd>
                  <kbd className={defaultClass}>{followedByKey}</kbd>
                </>
              )}
            </span>
            <CardDescription className="font-mono">
              {description}
            </CardDescription>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
