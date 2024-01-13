import { motion } from "framer-motion";
import about from "@assets/images/aboutimg.png";

function About() {
  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex-colu sm:grid grid-columns-two sm:gap-2 bg-[#FFFEE9] border-t border-solid border-br-light shadow-md min-h-[60vh]"
    >
      <div className="sm:order-2 w-full  flex-column px-4 mt-[10%] mb-[5%] md:mt-[5%] lg:-ml-[15%] ">
        <div className="w-full">
          <h2 className="capitalize font-allura sm:text-6xl select-none max-sm:text-center">
            About Injective Girls
          </h2>
          <p className="my-4 max-sm:px-3 sm:max-w-[50ch] text-lg text-cyan-800 ">
            Injective Girls NFT is a groundbreaking collection of non-fungible
            tokens that artfully portrays the significance of female children in
            society. Each NFT within this collection serves as a unique digital
            masterpiece, meticulously crafted to celebrate the inherent value,
            potential, and importance of girls in shaping our world. The
            artworks within the collection are designed to convey empowering
            messages, highlighting the strength, intelligence, and resilience of
            young girls.
          </p>
        </div>
      </div>

      <div className="sm:order-1 max-w-[600px] md:max-w-[700px] -ml-[10%] select-none">
        <img src={about} alt="" />
      </div>
    </motion.div>
  );
}
export default About;
