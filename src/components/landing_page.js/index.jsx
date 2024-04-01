import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import RoundedButton from "../button";
import PreodicItem from "../preodic_table_item";
import { ArrowUpRight } from "react-feather";


const LandingPage = () => {
  const [techStacks, setTechStacks] = useState([
    {
      title: "React",
      label: "react",
    },
    {
      title: "Node",
      label: "nodejs",
    },
    {
      title: "Sequelize",
      label: "sequelize",
    },
    {
      title: "Socket IO",
      label: "socketio",
    },
    {
      title: "Git",
      label: "git",
    },
    {
      title: "Ubuntu",
      label: "debian",
    },
    {
      title: "Trello",
      label: "trello",
      forceURL:
        "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/trello/trello-plain.svg",
    },
    {
      title: "Three Js",
      label: "threejs",
    },
    {
      title: "MongoDb",
      forceURL: "./MaterialDesignMongo.png",
    },
    {
      title: "Redux",
      label: "redux",
    },
    {
      title: "VSCode",
      label: "vscode",
    },
    {
      title: "Postgres",
      label: "...",
      forceURL: "./MaterialDesignPostgres.png",
    },
    {
      title: "Electron",
      label: "electron",
    },
    {
      title: "Express",
      label: "express",
    },
    {
      title: "Tailwind",
      label: "tailwindcss",
      forceURL:
        "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      title: "Material UI",
      label: "materialui",
    },
    {
      title: "Heroku",
      label: "heroku",
    },
    {
      title: "React Native",
      label: "react",
      customClass: "hue-rotate-[265deg]",
    },
    {
      title: "Javascript",
      label: "javascript",
    },
    {
      title: "Figma",
      label: "figma",
    },
    {
      title: "Vite",
      label: "vite",
      forceURL: "./vite.svg",
    },
    {
      title: "Docker",
      label: "",
      forceURL: "./lucide_container.png",
      author: "https://github.com/lucide-icons/lucide",
    },
    {
      title: "Typescript",
      label: "typescript",
    },
    {
      title: "Terminal",
      label: "terminal",
      forceURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Windows_Terminal_logo.svg/1280px-Windows_Terminal_logo.svg.png",
    },
    {
      title: "Redis",
      label: "redis",
      lock: true,
    },
    {
      title: "GraphQl",
      label: "graphql",
      forceURL:
        "https://cdn.jsdelivr.net/npm/devicon@2.14.0/icons/graphql/graphql-plain.svg",
      lock: true,
    },
    {
      title: "Scss",
      label: "scss",
      forceURL:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
      lock: false,
    },
  ]);
  const [projects, setProjects] = useState([
    {
      title: 'First Project',
      description: ''
    },
    {
      title: 'Second Project',
      description: ''
    },
    {
      title: 'Third Project',
      description: ''
    },
    {
      title: 'Fourth Project',
      description: ''
    },
    {
      title: 'Fifth Project',
      description: ''
    },
  ]);
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
          <div>
            Hey, i am..
            <br />
            Muhammad Darab
          </div>
          <div className="p-[0.5px] bg-gray-400 my-8"></div>
          <RoundedButton label="Cool, lets go!" onClick={scrollToAboutMe} />
          <div id="section-splitting-margin" className="my-24"></div>
          <div className="text-6xl text-left mb-12 ml-[60%]" ref={AboutMeRef}>
            About me.
          </div>
          <div className="text-lg text-left font-light ml-[60%]">
            My career journey began at Invozone, where I initially learned
            JavaScript through their specialized course. Upon completion,I
            transitioned into a role as an Associate Software Engineer, working
            primarily with the MERN stack, Electron.js, Docker, and Git. <br />
            <br /> After a year and three months of work,{" "}
            <b className="bg-yellow-300">
              I was promoted to being a Software Engineer.
            </b>{" "}
            Throughout this journey, I embraced challenges, continuously
            expanding my skills and knowledge.
            <RoundedButton
              sx={{ marginTop: 24 }}
              label="Lets proceed!"
              onClick={scrollToMyProjects}
            />
          </div>
          <div className="p-[0.25px] bg-gray-400 mt-48"></div>
          <div className="text-6xl pt-8 py-10" ref={MyProjectsRef}>
            Worked on..
          </div>
          <div className="flex flex-wrap">
            {techStacks.map((item, index) => {
              return (
                <PreodicItem
                  forceURL={item.forceURL}
                  key={index}
                  title={item.title}
                  label={item.label}
                  lock={item.lock}
                  customClass={item.customClass}
                  values={[index + 47, index + 107.5]}
                />
              );
            })}
          </div>
          <div className="p-[0.25px] bg-gray-400 mt-48"></div>
          <div className="text-6xl pt-8 py-10" ref={MyProjectsRef}>
            Mostly using these, have contributed on..
          </div>
          {projects.map((item) => {
            return (
              <>
                <div className="flex flex-row mb-2 justify-between items-center">
                  <span className="text-4xl font-light">{item.title}</span>
                  <span className="text-4xl font-light"><ArrowUpRight /></span>
                </div>
                <div className="p-[0.25px] bg-gray-400 mb-8"></div>
                
              </>
            )
          })}
        </div>
        <div id="section-splitting-margin" className="py-48"></div>
      </div>
    </>
  );
};

export default LandingPage;
