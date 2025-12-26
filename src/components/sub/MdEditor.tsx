"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

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
  setText,
  onKeyDown,
  disabled,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div className="grid min-h-48 w-full gap-2">
      {/* <Label
        htmlFor="message"
        className="ml-2 text-start text-xs text-primary/80 md:text-sm"
      >
        Markdown Supported
      </Label> */}
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

function PreviewArea({ text }: { text: string }) {
  console.log(
    <ReactMarkdown className="px-4 py-2 text-start text-sm text-muted-foreground">
      Nothing to preview
    </ReactMarkdown>,
  );
  return (
    <div className="min-h-48 overflow-y-auto rounded-md border">
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
  const [disabled, setDisabled] = useState(false);

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
      const resp = await fetch(
        "https://contest-hive.vercel.app/api/others/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: text }),
        }
      );
      const x: any = await resp.json();

      if (x.ok) {
        setText("");
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

  return (
    <>
      <Tabs defaultValue="editor" className="min-h-52">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <MessageArea
            text={text}
            setText={setText}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
        </TabsContent>
        <TabsContent value="preview">
          <PreviewArea text={text} />
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
