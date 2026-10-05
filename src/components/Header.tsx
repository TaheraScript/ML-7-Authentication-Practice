import Image from "next/image";
import NavLinks from "./NavLinks";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto grid grid-cols-[1fr_auto] items-center gap-4 px-4 py-3 md:grid-cols-3">
        <div className="hidden md:block" />

        <div className="flex items-center gap-3 md:justify-center">
          <Image
            src="/logo.webp"
            height={40}
            width={40}
            alt="Bangla News 24 logo"
            className="rounded-xl shadow-sm"
          />
          <div className="leading-tight">
            <h2 className="text-lg font-bold tracking-tight text-[#C10007]">
              Bangla News 24
            </h2>
            <p className="text-xs text-gray-500 sm:text-sm">{date}</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <button className="btn btn-ghost btn-sm rounded px-4 font-medium text-gray-700 hover:bg-gray-100 sm:btn-md">
            সাইন ইন
          </button>
          <button className="btn btn-sm rounded border-none bg-[#C10007] px-5 font-medium text-white shadow-md shadow-red-200 transition hover:bg-red-800 sm:btn-md">
            সাইন আপ
          </button>
        </div>
      </div>
      <NavLinks></NavLinks>
    </header>
  );
};

export default Header;
