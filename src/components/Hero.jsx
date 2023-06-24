import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { whiteman, chevronDown } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex justify-end">
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className=' motion-safe:animate-pulse w-5 sm:h-20 h-10 rounded-full bg-[#4bd3c5]' />
            <div className='motion-safe:animate-pulse w-1 sm:h-48 h-24 bg-gradient-to-b from-[#4bd3c5] via-red-300 to-[#232635]' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#4bd3c5]'>Indra</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
              I develop dynamic and scalable web applications with <br className='sm:block hidden' /> a strong emphasis on front-end and back-end technologies.
            </p>
          </div>
        </div>
        <div className=" max-w-md mt-20 opacity-10 lg:opacity-80">
          <img src={whiteman} className=" w-full h-full" alt="3d illustration of a developer" />
        </div>

      </div>

      {/* <ComputersCanvas /> */}

      <div className=' absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' className="scale-50">
          {/* <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[lightblue] mb-1'
            />
          </div> */}
          <img src={chevronDown} className="motion-safe:animate-bounce w-full h-full" alt="scroll down" />
        </a>
      </div>
    </section>
  );
};

export default Hero;