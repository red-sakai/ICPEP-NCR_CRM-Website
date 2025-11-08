import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type BuildCardProps = {
  className?: string;
};
const BuildCard = ({ className = "" }: BuildCardProps) => {
  return (
    <Card
      className={cn(
        "flex-1 p-12 px-8 flex flex-col justify-center items-center",
        "bg-primary/10 border-2 border-primary/15 gap-2",
        "hover:[&>h1]:scale-110 hover:[&>span]:scale-110",
        "transition-all duration-300",
        className
      )}
    >
      <h1 className="text-8xl text-glow tracking-tighter font-medium text-primary/15 transition-all duration-300">
        {"{ }"}
      </h1>
      <span className="text-xs sm:text-sm text-foreground text-center transition-all duration-300">
        Building the future of tech
      </span>
    </Card>
  );
};

const Vision = () => {
  return (
    <section className="w-full flex justify-center items-center py-12 px-6 sm:py-16 sm:px-8 md:py-24 md:px-12 lg:px-24">
      <div className="container max-w-7xl mx-auto">
        <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex-1 w-full space-y-6 md:space-y-8">
            {/* desktop view */}
            <div className="hidden md:block space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-glow text-primary font-bold tracking-tight">
                Our Vision
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-foreground/60 leading-relaxed">
                To be the leading platform for computer science professionals in
                the NCR region, fostering innovation, collaboration, and
                excellence in technology.
              </p>
            </div>

            {/* mobile view */}
            <Accordion
              type="single"
              collapsible
              className="py-0 mb-0 md:hidden"
            >
              <AccordionItem value="vission" className="space-y-2">
                <AccordionTrigger>
                  <h1 className="text-xl text-glow text-primary font-bold tracking-tight">
                    Our Vision
                  </h1>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-foreground/60 leading-relaxed">
                  To be the leading platform for computer science professionals
                  in the NCR region, fostering innovation, collaboration, and
                  excellence in technology.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* mobile view BuildCard */}
            <div className="lg:hidden w-full">
              <BuildCard className="py-16 [&>h1]:text-6xl [&>span]:text-xs" />
            </div>

            <ul className="list-disc text-sm md:text-base lg:text-lg pl-5 md:pl-6 space-y-2 md:space-y-3">
              <li className="marker:text-primary leading-relaxed">
                Empower professionals
              </li>
              <li className="marker:text-primary leading-relaxed">
                Drive Innovation
              </li>
              <li className="marker:text-primary leading-relaxed">
                Build Community
              </li>
              <li className="marker:text-primary leading-relaxed">
                Create Opportunity
              </li>
            </ul>
          </div>

          {/* desktop view BuildCard */}
          <div className="hidden lg:flex flex-1 justify-center items-center">
            <BuildCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
