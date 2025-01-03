import Link from "next/link";
import Image from "next/image";
import DisplayData from "../(routes)/components/DisplayData";

export default function Home() {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src="/hero.png"
          alt="FASHION.FINDS"
          className="w-screen md:object-cover object-contain pt-[74px] md:h-screen"
          width={5000}
          height={5000}
        />
      </Link>
      <div>
        <DisplayData />
      </div>
    </>
  );
}
