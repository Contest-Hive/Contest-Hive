"use client";

import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendMessage } from "@/lib/helpers";

function MessageArea({
  text,
  setText,
}: {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="grid min-h-48 w-full gap-2">
      <Label htmlFor="message" className="ml-2 text-start text-xs md:text-sm">
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
      <span className="mt-1 flex  items-center justify-between">
        <Button
          className="w-fit"
          onClick={async () => {
            toast({
              duration: 1000,
              title: "Sending Message...",
              description: "Please wait.",
            });

            const x = await sendMessage(text);

            if (x.ok) {
              setText("");
              toast({
                duration: 3000,
                title: "Message Sent Successfully",
                description: "Thanks for your feedback.",
              });
            } else {
              toast({
                duration: 3000,
                title: "Something went wrong!",
                description: "Failed to send message. Please try again.",
              });
            }
          }}
        >
          Send message
        </Button>
        <p className="text-end text-xs">{text.length}/4000</p>
      </span>
    </>
  );
};

export default MdEditor;
