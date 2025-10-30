import Embed3DModel from "../components/Embed3DModel";
import { Button } from "../components/ui/button";

function Hero() {
  return (
    <div className="h-screen text-foreground flex flex-col md:flex-row items-center justify-center m-auto">
      <div className="relative w-full h-96 md:h-screen mt-8 md:mt-36">
        <Embed3DModel />
      </div>
      <div className="w-full px-4 md:px-0 ml-10 ">
        <p className="text-6xl font-bold">ICPEP.se NCR</p>
        <p className="text-3xl font-bold">A.Y. 2025-2026</p>
        <p>
          ICPEP is a dynamic student organization fostering collaboration,{" "}
          <br /> innovation, and growth in computer engineering.
        </p>
        <div className="flex gap-4">
          <Button className="mt-4">Login</Button>
          <Button className="mt-4 border-2 border-opacity-50" variant="outline">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
