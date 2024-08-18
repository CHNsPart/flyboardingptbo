import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Special from "@/components/Special";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner/>
      <Hero/>
      <Special/>
      <Service/>
      <Contact/>
      <Footer/>
    </main>
  );
}
