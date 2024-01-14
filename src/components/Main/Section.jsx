import { PiDiscordLogoFill, PiTwitterLogoFill } from "react-icons/pi";
import { RxDiscordLogo } from "react-icons/rx";
import img from "@assets/images/sectionimg.png";
import Button from "../Button";

function Section() {
  return (
    <div className="w-full min-h-[80vh] relative overflow-hidden  bg-gradient-100">
      <div className="md:w-[60%] max-sm:pt-16 pt-[10%] sm:pl-[5%] grid place-items-center">
        <h1 className="w-full max-md:text-center text-cyan-400 font-allura leading-[60px] md:leading-[70px] text-footer max-sm:leading-[50px] md:text-8xl text-shadow-200 dp-shad select-none max-sm:px-3">
          Join <br /> Injective Girls <br /> Community
        </h1>
        <div className="w-full flex-row !flex-wrap md:flex-column mx-auto max-sm:px-6 gap-4 mt-12 mb-4">
          <a
            href="https://discord.com/invite/KRmvUDMG"
            aria-label="Discord"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              title="Discord"
              className="md:!w-[300px] bg-[#00fefb] py-3.5 px-6 rounded-sm border border-solid border-br-blue text-xl font-[500] shadow-md"
              icon={<PiDiscordLogoFill fill="#005958" size={35} />}
            />
          </a>
          <a
            href="https://twitter.com/dragons_inj?t=9zFCoDPKjTXiAdSj5317PQ&s=09"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              title="Twitter"
              className="md:!w-[300px] bg-[#00fefb] py-3.5 px-6 rounded-sm border border-solid border-br-blue text-xl font-[500] shadow-md hover:!-rotate-1"
              icon={<PiTwitterLogoFill fill="#005958" size={35} />}
            />
          </a>
        </div>
      </div>

      <div className="max-md:ml-auto md:absolute max-md:w-[400px] max-md:h-[400px] bottom-0 max-w-[510px] lg:max-w-[600px] right-0 select-none">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
export default Section;
