import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const researchPapers = [
  {
    title: "Correlation of Clinical and Radiological Presentation in Patients with Craniopharyngiomas",
    url: "#",
  },
  {
    title: "A Clinical Study of Spontaneous Intracerebral Hemorrhage in Adults",
    url: "#",
  },
  {
    title: "Epidemiology Of Posterior Fossa Tumors In Paediatric Age Group: An Institutional Study",
    url: "#",
  },
];

const faqs = [
  {
    question: "What conditions does Dr. Satish Nayak treat?",
    answer: "Dr. Satish Nayak specializes in treating a wide range of neurological conditions including brain tumors, spinal disorders, herniated discs, spinal stenosis, traumatic brain and spine injuries, and other complex neurosurgical cases.",
  },
  {
    question: "What is Minimal Invasive Surgery (MIS)?",
    answer: "Minimal Invasive Surgery (MIS) is an advanced surgical technique that uses smaller incisions, specialized instruments, and imaging technology. This approach results in less tissue damage, reduced pain, faster recovery times, and shorter hospital stays compared to traditional open surgery.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment by filling out the consultation form on this website, calling our clinic directly, or reaching out via WhatsApp. Our team will get back to you within 24 hours to schedule your appointment.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer: "Please bring IMAGING REPORT WITH FILM, all relevant medical records, previous imaging reports (MRI, CT scans), current medications list, insurance information, and any referral letters from your primary physician. This helps Dr. Satish Nayak provide the most comprehensive evaluation.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* About */}
          <div className="mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8">
              More About Dr. Satish Nayak
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dr. Satish Nayak is a highly accomplished neurosurgeon with extensive experience in 
                treating complex neurological conditions. With <strong className="text-foreground">MBBS, MS, and MCh</strong> qualifications 
                and over <strong className="text-foreground">10,000 successful surgeries</strong>, he has established himself as a 
                leading expert in neurosurgery and spine care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His commitment to excellence is reflected in his adoption of cutting-edge surgical techniques, 
                including microscopy-assisted procedures and minimally invasive surgery, ensuring optimal outcomes 
                with minimal discomfort for his patients.
              </p>
            </div>
          </div>

          {/* Research Papers */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              Research & Publications
            </h3>
            <div className="grid gap-4">
              {researchPapers.map((paper, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{paper.title}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-4 hover:bg-primary/10"
                    asChild
                  >
                    <a href={paper.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="animate-fade-in-up">
            <h3 className="font-serif text-3xl font-bold text-foreground mb-8">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
