import Image from "next/image";
import Arrows from "./arrows/arrows";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100dvh] bg-black">
      <Arrows/>
    </div>
  );
}
