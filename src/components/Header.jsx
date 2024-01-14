import { navLinks } from "@constants/navLinks";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Button from "./Button";
import LinkRow from "./LinkRow";
import logo from "@assets/images/logo.png";
import { Link } from "react-scroll";

const Header = ({ setOpenMenu }) => {
  return (
    <header className="max-sm:fixed max-sm:backdrop-blur-sm flex-row gap-10 !justify-between top-2 left-3 right-3 z-50 bg-opacity-90 mx-auto py-6 px-5 max-sm:p-3 max-sm:rounded-md max-sm:shadow-sm ">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={400}
        className=" !flex flex-row items-center !justify-between hover:drop-shadow-md transition-sm hover:scale-[0.98]"
      >
        <img
          src={logo}
          alt="injgirls"
          className="relative -top-0.5 !w-[40px]"
        />
        <p className="text-sm md:text-base self-end font-mont pb-1 tracking-tight whitespace-nowrap uppercase">
          Injective Girls
        </p>
      </Link>

      <div className="hidden sm:flex-row gap-3">
        {navLinks?.map((link, idx) => (
          <LinkRow key={idx} {...link} />
        ))}
      </div>

      <div className="block sm:hidden" onClick={() => setOpenMenu(true)}>
        <HiOutlineMenuAlt4 size={20} color="#111" />
      </div>

      <Button
        title="Buy on Talis"
        className="hidden sm:block text-[#00FEFB] bg-[#005958] border border-solid border-[#00FEFB]"
      />
    </header>
  );
};

export default Header;
