import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white shadow">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/handilogo.png"
          alt="H&I Construction Logo"
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
          priority
        />
        {/* Optionally add company name here */}
        {/* <span className="font-bold text-[#113065] text-xl">H&amp;I Construction</span> */}
      </Link>
      {/* ...existing nav links/buttons... */}
    </nav>
  );
}