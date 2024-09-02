import { About, Contact, Navbar, Tech, Works } from "@/components";
import Mac from "@/components/canvas/Mac";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <div className="  ">
      <Navbar />
      <Mac />
      <div className="bg-primary relative z-[1] h-full ">
        <div className=" relative z-[1]">
          <About />
          <div className=" overflow-hidden">
            <Tech />
          </div>
          <Works />
          <Contact />
        </div>
      </div>
    </div>
  );
}
