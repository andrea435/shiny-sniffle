import Image from "next/image";
import Banner from "./components/banner";
import About from "./components/about";
import Services from "./components/services";

export default function Home() {
  return (
    <>
    <Banner />
    <About />
    <Services />
    </>
  );
}
