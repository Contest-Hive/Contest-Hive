import { Button } from "./ui/button";

const FocusMode = ({
  isFocusMode,
  setFocusMode,
}: {
  isFocusMode: boolean;
  setFocusMode: (focusMode: boolean) => void;
}) => {
  return (
    <Button
      variant={isFocusMode ? "default" : "secondary"}
      onClick={() => setFocusMode(!isFocusMode)}
    >
      Focus {isFocusMode ? "On" : "Off"}
    </Button>
  );
};

export default FocusMode;
