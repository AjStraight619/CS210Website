import { topics } from "@/lib/data";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const TopicsAccordionMobile = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Topics</AccordionTrigger>
        <AccordionContent>
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>
                <Link href={topic.href}>{topic.name}</Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TopicsAccordionMobile;
