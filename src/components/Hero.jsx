import { Link } from "react-scroll";
import Arrow from "../icons/arrow";
import Button from "./Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full max-sm:pt-[30vh] max-sm:min-h-[100vh] min-h-[85vh] pt-[6%] pb-[6%]"
    >
      <div className="w-full h-full flex-column !items-center select-none">
        <h1 className="capitalize font-allura text-8xl md:text-[10vw] text-center text-shadow-200 dp-shad max-sm:px-3">
          Injective
        </h1>
        <h1 className="uppercase max-sm:px-2 px-2 relative whitespace-nowrap md:text-[20vw] font-mont text-center -mt-7 md:-mt-14">
          <span className=" text-gradient sm:ml-2 g1">G</span>
          <span className=" text-gradient sm:ml-2 g2">I</span>
          <span className=" text-gradient sm:ml-2 g3">R</span>
          <span className=" text-gradient sm:ml-2 g4">L</span>
          <span className=" text-gradient sm:ml-2 g5">S</span>
        </h1>

        <a
          href="https://discord.com/invite/KRmvUDMG"
          aria-label="talis"
          target="_blank"
          rel="noreferrer"
          className="flex-row mx-auto  mt-4 mb-10"
        >
          <Button
            title="Mint on Talis"
            className="bg-yellow-300 !px-6 font-semibold text-shadow-100 shadow-sm hover:!dp-shad-yellow"
          />
        </a>
      </div>

      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
        className="w-full mx-auto !flex justify-center max-md:absolute bottom-10"
      >
        <div className="group w-[50px] p-2 h-[80px] relative bg-black grid place-items-center rounded-full overflow-hidden transition-sm hover:translate-y-1.5 hover:origin-bottom">
          <div className="absolute inset-0 m-auto bg-[#B0FFFE] w-[38px] h-[66px] !-top-1 icon rounded-full">
            <Arrow />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
export default Hero;
