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
            Contest Hive will be free forever. 😄
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Does the API have rate limit?</AccordionTrigger>
          <AccordionContent>
            We do not intend to apply any kind of rate limits. But if abuse of
            the tool is noticed, steps might be taken to ensure availability for
            all the users.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do we collect user information?</AccordionTrigger>
          <AccordionContent>
            We do not collect any personal data whatsoever.
            <br />
            All the data is locally stored in your browser.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
