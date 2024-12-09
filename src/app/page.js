import AboutUs from "@/components/home/about/aboutus";
import Comments from "@/components/home/comments/comments";
import Counter from "@/components/home/counter/counter";
import Hero from "@/components/home/hero/hero";
import Services from "@/components/home/services/services";


export const metadata = {
  title: "Anasayfa | Salon Bağdat",
  description: "Düğün, Nişan, Kına Hizmetleri",
};

export default function Home() {
  return (
   <>
    <Hero/>
    <AboutUs/>
    <Services/>
    <Counter/>
    <Comments/>
   </>
  );
}
