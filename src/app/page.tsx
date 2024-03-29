import Navbar from "@/components/global/navbar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import Image from "next/image";

export default function Home() {
  return(
  <main>
    <Navbar />
    <section className="h-screen w-full
    bg-netural-950 rounded-md !overflow-visible
    relative flex flex-col items-center
    antialiased">
        <div className="absolute inset-0 h-full w-full items-center
      px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,
      #000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex items-center justify-center
              flex-col"></div>
            }
          ></ContainerScroll>
        </div>
    </section>
    </main>
  )
}