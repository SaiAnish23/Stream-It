import { Logo } from "./logo";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 h-20 w-full z-[49] bg-[#252731] px-2 lg:px-4 flex 
    items-center justify-between shadow-sm"
    >
      <Logo></Logo>
      {/* Navbar */}
      <div>
        <Search />
      </div>
    </nav>
  );
};
