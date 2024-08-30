"use client";

import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

function MessageArea({
  text,
  setText,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="grid min-h-48 w-full gap-2">
      <Label
        htmlFor="message"
        className="ml-2 text-start text-xs text-primary/80 md:text-sm"
      >
        Markdown Supported
      </Label>
      <Textarea
        id="message"
        placeholder="Type your message here."
        value={text}
        rows={7}
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

  return (
    <>
      <Tabs defaultValue="editor" className="min-h-52">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <MessageArea text={text} setText={setText} />
        </TabsContent>
        <TabsContent value="preview">
          <PreviewArea text={text} />
        </TabsContent>
      </Tabs>
      <span className="mt-2 flex  items-center justify-between">
        <Button
          disabled={disabled}
          className="w-fit"
          onClick={async () => {
            if (text.trim().length === 0)
              return toast({
                duration: 1500,
                title: "Empty Message",
                description: "Please type a message before sending.",
              });

            setDisabled(true);
            const resp = await fetch("http://127.0.0.1:3001/api/others/send", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ message: text }),
            });
            const x: any = await resp.json();
            setDisabled(false);
            if (x.ok) {
              setText("");
              toast({
                duration: 3000,
                title: x.message,
                description: x.description,
              });
            } else {
              toast({
                duration: 3000,
                title: x.message,
                description: x.description,
              });
            }
          }}
        >
          Send message{" "}
          {disabled && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
        <p className="text-end text-xs">{text.length}/4000</p>
      </span>
    </>
  );
};

export default MdEditor;
