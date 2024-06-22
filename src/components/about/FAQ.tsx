import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="mb-5 mt-10" id="faq">
      <header className="mb-5 w-fit scroll-m-20 border-b pb-2 pr-1 text-2xl font-bold tracking-tighter first:mt-0 md:text-3xl lg:text-5xl">
        FAQ
      </header>
      <Accordion type="single" collapsible className="mt-5 md:pr-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it free to use?</AccordionTrigger>
          <AccordionContent>
            Contest Hive will be forever free to use. 😄
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Does the API have rate limit?</AccordionTrigger>
          <AccordionContent>
            I do not intend to apply any kind of rate limits. But if abuse of
            the resource is seen, steps might be taken to ensure usability for
            all the users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do we collect user information?</AccordionTrigger>
          <AccordionContent>
            We collect no personal data whatsoever.
            <br />
            Cookies is used only to save{" "}
            <code className="font-bold">`FocusMode` &  `PerPage`</code> status.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
