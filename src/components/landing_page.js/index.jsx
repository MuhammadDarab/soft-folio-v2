import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import RoundedButton from "../button";
import PreodicItem from "../preodic_table_item";
import { ArrowUpRight, Send } from "react-feather";
import { motion, useScroll } from "framer-motion";

import { Canvas, useFrame } from "@react-three/fiber";
import { projectsList, techStacksList } from "../../utils/mappings";

const LandingPage = () => {
  // Define a new functional component for the spinning cube
  const SpinningCube = () => {
    const [color, setColor] = useState("rgb(55, 65, 81, 1)");
    const cubeRef = useRef();

    useFrame(() => {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    });

    return (
      <mesh
        onPointerEnter={() => setColor("orange")}
        onPointerLeave={() => setColor("rgb(55, 65, 81, 1)")}
        ref={cubeRef}
      >
        <boxGeometry args={[3.5, 3.5, 3.5]} />
        <meshBasicMaterial color={color} speed={1} factor={0.6} />
      </mesh>
    );
  };

  const { scrollYProgress } = useScroll();

  const [techStacks, setTechStacks] = useState(techStacksList);
  const [projects, setProjects] = useState(projectsList);
  const scrollRef = useRef(null);
  const AboutMeRef = useRef(null);
  const MyProjectsRef = useRef(null);

  let locomotiveScroll;
  useEffect(() => {
    locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: 1,
    });

    // Cleanup
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  function scrollToAboutMe() {
    locomotiveScroll.scrollTo(AboutMeRef.current, {
      duration: 1000,
      offset: -130,
    });
  }

  function scrollToMyProjects() {
    locomotiveScroll.scrollTo(MyProjectsRef.current, {
      duration: 1000,
      offset: -130,
    });
  }

  return (
    <>
      <div
        ref={scrollRef}
        data-scroll-container
        className="bg-[#F5F5F5] text-gray-700 cursor-default select-none"
      >
        <div className="pl-72 pt-52 text-8xl w-[85%] bg-[#F5F5F5] text-gray-700">
          <motion.section
            initial={{ scale: 0.8, filter: 'blur(10px)' }}
            animate={{ scale: 1, filter: 'blur(0px)' }}
            transition={{ type: "spring", delay: 1 }}
          >
            <div>
              Hey, i am..
              <br />
              Muhammad Darab
            </div>
            <div className="p-[0.5px] bg-gray-400 my-8"></div>
            <RoundedButton label="Cool, lets go!" onClick={scrollToAboutMe} />
            <div id="section-splitting-margin" className="my-24"></div>
          </motion.section>
          <div className="flex flex-row justify-between">
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-200px" }}
              transition={{ duration: 0.3, ease: "easeOut", frameRate: 60 }}
            >
              <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <SpinningCube />
              </Canvas>
            </motion.div>
            <motion.div
              className="w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ margin: "-200px" }}
              transition={{ duration: 0.2, ease: "easeOut", frameRate: 60 }}
            >
              <div className="text-6xl text-left mb-12" ref={AboutMeRef}>
                About me.
              </div>
              <div className="text-lg text-left font-light">
                My career journey began at Invozone, where I initially learned
                JavaScript through their specialized course. Upon completion,I
                transitioned into a role as an Associate Software Engineer,
                <br />
                <br /> After a year and three months of work,{" "}
                <b className="bg-yellow-300">
                  I was promoted to being a Software Engineer.
                </b>{" "}
                Throughout this journey, I embraced challenges, continuously
                expanding my skills and knowledge, working primarily with the MERN stack, Electron.js, Docker, and
                Git.
                <RoundedButton
                  sx={{ marginTop: 24 }}
                  label="Lets proceed!"
                  onClick={scrollToMyProjects}
                />
              </div>
            </motion.div>
          </div>
          <div className="p-[0.25px] bg-gray-400 mt-48"></div>
          <div className="text-6xl pt-8" ref={MyProjectsRef}>
            Worked on..
          </div>
          <div className="text-gray-400 text-sm pt-2 pb-4" ref={MyProjectsRef}>
            Note: numbers below dont indicate anything.. <br />
            was trying to make something like preodic table.
            <br /> but this feels nice!
          </div>

          <motion.div className="flex flex-wrap">
            {techStacks.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.2, rotate: 50 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ margin: '-200px' }}
                  transition={{ type: "spring" }}
                >
                  <PreodicItem
                    forceURL={item.forceURL}
                    title={item.title}
                    label={item.label}
                    lock={item.lock}
                    customClass={item.customClass}
                    values={[index + 47, index + 107.5]}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <div className="p-[0.25px] bg-gray-400 mt-48"></div>
          <div className="text-6xl pt-8 py-10 mb-24" ref={MyProjectsRef}>
            Mostly using these, have contributed on..
          </div>
          {projects.map((item) => {
            return (
              <>
                <motion.div initial={{ x: -30, rotate: 15, opacity: 0 }} viewport={{ margin: '-200px' }} whileInView={{ x: 0, rotate: 0, opacity: 1 }} transition={{ type: 'spring' }} className="flex flex-row mb-2 justify-between items-center">
                  <div>
                    <span className="text-4xl font-light">{item.title}</span>
                    <div className="text-sm text-gray-500 w-[90%]">
                      {item.description}
                    </div>
                  </div>
                  <span className="text-4xl font-light">
                    <ArrowUpRight />
                  </span>
                </motion.div>
                <div className="p-[0.25px] bg-gray-400"></div>
              </>
            );
          })}
          <motion.div className="text-9xl mt-24" initial={{ scale: 1.3, opacity: 0 }} viewport={{ margin: '-200px' }} whileInView={{ scale: 1, opacity: 1 }} transition={{ type: 'spring' }} >
            Say <span className="bg-gray-700 text-white">Hi..</span> <br /> Will
            reply!...
          </motion.div>
          <motion.div initial={{ x: -40 }} viewport={{ margin: '-200px' }} whileInView={{ x: 0 }} className="text-gray-500 text-2xl mt-4">
            ~ did that kinda rhyme..?
          </motion.div>

          <motion.div  className="text-lg mt-8" initial={{ x: -40 }} viewport={{ margin: '-100px' }} whileInView={{ x: 0 }} >
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-[1px] border-gray-700"
              placeholder="your_mail@gmail.com"
            />{" "}
            says: Hey, Muhammad Darab.. lets{" "}
            <input
              type="text"
              className="bg-transparent border-[1px] border-gray-700 w-96"
              placeholder="connect, i have this idea that i want developed..."
            />
            <Send className="ml-4 inline"/>

          </motion.div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
