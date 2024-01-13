import { roadmap } from "@constants/constants";
import { motion } from "framer-motion";

export const Card = ({ phase, quarter, list }) => (
  <div className="w-full bg-yellow-100 bg-opacity-30 rounded-md shadow-100 py-3 px-3 flex-column !justify-start gap-3 backdrop-blur-md border border-solid border-[#00fefa3d] min-h-[300px] transition-sm hover:backdrop-blur-sm">
    <div className="bg-yellow-100 rounded-md shadow-sm p-2">
      <h3>{phase}</h3>
      <h3 className="mt-1">{quarter}</h3>
    </div>
    <ul className="relative flex-column gap-3 pt-[10%] pb-[8%] px-2">
      {list.map((text, idx) => (
        <li key={idx} className="text-neutral-900 dp-shad">
          {text}
        </li>
      ))}
    </ul>
  </div>
);

function Roadmap() {
  return (
    <motion.div
      id="roadmap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-img w-full min-h-[120vh] relative"
    >
      <div className="max-md:py-14 md:absolute max-md:w-[90%] bottom-6 left-0 right-0 w-[70%] mx-auto grid grid-cols-roadmap items-start gap-8">
        {roadmap?.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </motion.div>
  );
}
export default Roadmap;
