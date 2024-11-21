"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long should a construction project typically take?",
    answer: "Project timelines vary significantly based on scope and complexity. A small renovation might take weeks, while large commercial projects can span months to years. We provide detailed timelines during project planning and keep you updated throughout the process."
  },
  {
    question: "What's the importance of sustainable construction?",
    answer: "Sustainable construction reduces environmental impact, lowers operating costs, and increases property value. It includes using eco-friendly materials, implementing energy-efficient systems, and minimizing waste. We prioritize sustainable practices in all our projects."
  },
  {
    question: "Why do construction projects sometimes go over budget?",
    answer: "Budget overruns can occur due to unexpected structural issues, material price fluctuations, or scope changes. We minimize this risk through thorough initial assessments, detailed planning, and transparent communication throughout the project."
  },
  {
    question: "Is it necessary to hire an architect for every construction project?",
    answer: "Not every project requires an architect, but their expertise is valuable for complex designs, structural changes, or large-scale projects. We can help determine if architectural services are needed for your specific project."
  },
  {
    question: "How do you ensure construction quality?",
    answer: "We maintain quality through rigorous inspections, using premium materials, employing skilled craftsmen, and following strict industry standards. Our quality control process includes regular site inspections and detailed documentation."
  },
  {
    question: "What permits are typically required for construction?",
    answer: "Required permits vary by location and project type. Common permits include building permits, electrical permits, and zoning permits. We handle all necessary permitting processes as part of our service."
  },
  {
    question: "How do you handle unexpected issues during construction?",
    answer: "We maintain contingency plans and open communication channels. When issues arise, we quickly assess the situation, present solutions, and implement the best course of action while keeping you informed throughout the process."
  },
  {
    question: "What should I know about construction site safety?",
    answer: "Safety is our top priority. We maintain strict safety protocols, regular training, proper equipment maintenance, and site security. All our projects comply with OSHA regulations and industry safety standards."
  }
];

export default function FAQ() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Common questions about construction projects and our processes
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg shadow-sm px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}