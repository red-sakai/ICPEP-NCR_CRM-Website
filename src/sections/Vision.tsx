import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Vision = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="container">
        <div className="w-full flex justify-center items-center gap-12 p-40">
          <div className="flex-1 space-y-8">
            <h1 className="text-3xl font-sans text-glow text-primary font-bold tracking-tight">
              Our Vision
            </h1>
            <p className="text-foreground/60 leading-7 font-sans">
              To be the leading platform for computer science professionals in
              the NCR region, fostoring innovation, collaboration, and
              excellence in technology.
            </p>
            <ul className="list-disc pl-2 font-sans space-y-3">
              <li className="marker:text-primary">Empower professionals</li>
              <li className="marker:text-primary">Drive Innovation</li>
              <li className="marker:text-primary">Build Community</li>
              <li className="marker:text-primary">Create Opportunity</li>
            </ul>
          </div>

          <Card
            className={cn(
              "flex-1 py-30 flex flex-col justify-center items-center",
              "bg-primary/10 border-2 border-primary/15 gap-2",
              "hover:[&>h1]:scale-110 hover:[&>span]:scale-110",
              "transition-all duration-300",
            )}
          >
            <h1 className="text-8xl text-glow tracking-tighter font-medium text-primary/15 transition-all duration-300">
              {"{ }"}
            </h1>
            <span className="text-sm text-foreground/60 transition-all duration-300">
              Building the future of tech
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Vision;
