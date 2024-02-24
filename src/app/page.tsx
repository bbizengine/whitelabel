import Service from "@/components/page/Service";
import Hero from "@/components/page/hero";

export default function Home() {
  return (
    <div className="pb-96 relative overflow-hidden bg-gray-100">
      <Hero />
      <Service />
      {/* <Body /> */}
    </div>
  );
}
