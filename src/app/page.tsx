import Body from "@/components/page/Body";
import Service from "@/components/page/Service";
import Hero from "@/components/page/hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-gray-100 ">
      <Hero />
      <Service />
      <Body />
      <div className="pb-96"></div>
    </div>
  );
}
