import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

//components->Social
import Social from "@/components/Social";
const Home = () => {
  return (
    <section className="h-full">
      <div className="w-full h-full px-8 xl:px-32 2xl:px-64">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left "> 
            <h1 className="h1">
          Shivani Kaiche
            </h1>
              <h2 className="text-3xl font-semibold text-purple-400 mt-2">
               Fullstack Developer
              </h2>
              <p className="max-w-[500px] mb-9 text-white/80">Passionate about crafting seamless digital experiences by blending front-end elegance and <br/>back-end power.</p>
        
        {/* btn and social media links */}
        <div className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline" 
          size="lg"
           className="uppercase flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl "/>
          </Button>
          <div className="mb-8 xl:mb-0">
        <Social/>

          </div>
        </div>
        
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
