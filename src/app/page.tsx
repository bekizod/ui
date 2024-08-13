import Image from "next/image";
import { ExpandableCardDemo } from "../../components/ExpandableCard"
import { CardBody, CardContainer } from "../../components/ui/3d-card";
import Landing from "../../components/Landing";
export default function Home() {
  return (
    <main className="bg-slate-900">
      <ExpandableCardDemo />
      <div>
        <h1 className="flex justify-center font-bold text-lg text-white">Hi there this is my Next js</h1>
        <Landing />
      </div>
    </main>
  );
}
