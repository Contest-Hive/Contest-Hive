"use client";

import ReactMarkdown from "react-markdown";
import { useState, useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { cn, isValidEmailOrEmpty } from "@/lib/utils";
import sendAPImessage from "@/server/sendAPImessage";
import { Separator } from "../ui/separator";

enum EmailStatusCodes {
  NOT_VISITED = 0,
  FIRST_TYPING = 1,
  FIRST_MOVED = 2,
  RETYPING = 3,
  RERETYPING = 4,
}

/**
 * Renders a textarea for entering messages in the Markdown editor.
 *
 * Displays a controlled input area that updates the message text state only if the new content does not exceed 4000 characters.
 *
 * @param text - The current message text.
 * @param setText - Function to update the message text.
 */
function MessageArea({
  text,
  email,
  setText,
  setEmail,
  onKeyDown,
  disabled,
}: {
  text: string;
  email: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}) {
  const validEmail: boolean = isValidEmailOrEmpty(email);
  const [emailStatus, setEmailStatus] = useState<EmailStatusCodes>(
    EmailStatusCodes.NOT_VISITED,
  );
  // Tracks whether the email value actually changed during the current focus session
  const emailChangedDuringFocus = useRef(false);

  const handleEmailFocus = () => {
    emailChangedDuringFocus.current = false;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    emailChangedDuringFocus.current = true;
    setEmail(e.target.value);
    // Advance to FIRST_TYPING as soon as they start typing for the first time
    setEmailStatus((prev) => {
      if (e.target.value.trim() == "") {
        return EmailStatusCodes.NOT_VISITED
      }
      if (prev === EmailStatusCodes.NOT_VISITED)
        return EmailStatusCodes.FIRST_TYPING;
      return prev;
    });
  };

  const handleEmailBlur = () => {
    // Only advance state if the value actually changed during this focus session
    if (!emailChangedDuringFocus.current) return;
    setEmailStatus((prev) => {
      if (prev === EmailStatusCodes.FIRST_TYPING)
        return EmailStatusCodes.FIRST_MOVED;
      if (prev === EmailStatusCodes.FIRST_MOVED)
        return EmailStatusCodes.RETYPING;
      if (prev === EmailStatusCodes.RETYPING)
        return EmailStatusCodes.RERETYPING;
      return prev;
    });
  };

  return (
    <div className="grid min-h-48 w-full gap-2">
      {/* <Label
        htmlFor="message"
        className="ml-2 text-start text-xs text-primary/80 md:text-sm"
      >
        Markdown Supported
      </Label> */}
      <Field>
        <FieldLabel
          htmlFor="msg-email"
          className="flex items-center justify-start gap-1"
        >
          Email
          <span className="text-xs text-primary/50 hover:text-blue-500 dark:hover:text-blue-400/90">
            (Optional)
          </span>
        </FieldLabel>
        <Input
          id="msg-email"
          type="email"
          placeholder="meow@gmail.com"
          onChange={handleEmailChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          value={email}
          disabled={disabled}
          className="text-xs"
        />
        <div
          className={cn(
            "-mt-1.5 mb-1 text-xs font-semibold tracking-wider text-red-500 dark:text-rose-500",
            emailStatus > 1 && !validEmail ? "visible" : "hidden",
          )}
        >
          Your email is not valid{" "}
          <span
            className={cn(
              "font-mono text-blue-600 dark:text-sky-400",
              emailStatus == EmailStatusCodes.RERETYPING ? "visible" : "hidden",
            )}
          >
            (yet)
          </span>
        </div>
      </Field>

      <Textarea
        id="message"
        placeholder="Type your message here. (Ctrl + Enter to send)"
        value={text}
        rows={7}
        onKeyDown={onKeyDown}
        disabled={disabled}
        onChange={(e) => {
          if (e.target.value.length <= 4000) setText(e.target.value);
        }}
      />
    </div>
  );
}

function PreviewArea({ email, text }: { email: string; text: string }) {
  const validEmail = isValidEmailOrEmpty(email);
  return (
    <div className="mt-[21px] min-h-56 overflow-y-auto rounded-md border">
      <p className="px-4 py-1 text-start text-xs font-semibold">
        Email:{" "}
        <span className="font-mono font-normal italic tracking-wider">
          {email || "None given, none taken."}
        </span>
        <br className="block md:hidden" />
        <span
          className={cn(
            "text-center font-semibold tracking-wide text-blue-600 dark:text-sky-500 md:ml-3 md:text-start",
            validEmail ? "hidden" : "block md:inline",
          )}
        >
          ( That looks valid to you? )
        </span>
      </p>
      <Separator />
      {text ? (
        <ReactMarkdown className="px-4 py-2 text-start text-sm">
          {text}
        </ReactMarkdown>
      ) : (
        <ReactMarkdown className="px-4 py-2 text-start text-sm text-muted-foreground">
          Nothing to preview
        </ReactMarkdown>
      )}
    </div>
  );
}

const MdEditor = () => {
  const { toast } = useToast();
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [currentTab, setCurrentTab] = useState("editor");

  const handleSendMessage = async () => {
    // Immediate check to prevent double-sends from rapid key presses
    if (disabled || text.trim().length === 0) {
      if (text.trim().length === 0) {
        toast({
          duration: 1500,
          title: "Empty Message",
          description: "Please type a message before sending.",
        });
      }
      return;
    }

    setDisabled(true);
    try {
      const x = await sendAPImessage(email, text);

      if (x.ok) {
        setText("");
        setEmail("");
      }

      toast({
        duration: 3000,
        title: x.message,
        description: x.description,
      });
    } catch (error) {
      toast({
        duration: 3000,
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again.",
      });
    } finally {
      setDisabled(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useHotkeys("alt+e", (e) => {
    e.preventDefault();
    setCurrentTab("editor")
  }, { enableOnFormTags: true });

  useHotkeys("alt+p", (e) => {
    e.preventDefault();
    setCurrentTab("preview")
  }, { enableOnFormTags: true });

  return (
    <>
      <Tabs
        value={currentTab}
        onValueChange={(value) => setCurrentTab(value)}
        className="min-h-52"
      >
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <MessageArea
            text={text}
            email={email}
            setText={setText}
            setEmail={setEmail}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
        </TabsContent>
        <TabsContent value="preview">
          <PreviewArea text={text} email={email} />
        </TabsContent>
      </Tabs>
      <span className="mt-2 flex  items-center justify-between">
        <Button
          disabled={disabled || text.trim().length === 0}
          className="w-fit"
          onClick={handleSendMessage}
        >
          {disabled ? "Sending..." : "Send message"}
          {disabled && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
        <p className="text-end text-xs">{text.length}/4000</p>
      </span>
    </>
  );
};

export default MdEditor;