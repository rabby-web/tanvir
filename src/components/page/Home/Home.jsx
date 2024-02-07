import Team from "../../Team/Team";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Test from "../Banner/Test";
import Contract from "../Contract/Contract";
import Project from "../Project/Project";
import Service from "../Service/Service";
import Skill from "../Skill/Skill";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <div class="absolute bottom-44 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>
      </div>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Service></Service>
      <Project></Project>
      <Team></Team>
      <Contract></Contract>
    </>
  );
}
