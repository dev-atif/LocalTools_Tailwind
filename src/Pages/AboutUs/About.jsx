import React from "react";
import Navbar from "../../Component/NavBar/Navbar";
import AboutGraham from "./AboutGraham";
import Story from "./Story";
import RightPeople from "./RightPeople";
import Features from "./Features";
import AboutMission from "./AboutMission";
import mission from "../../assets/mission.png";
import vision from '../../assets/vision.png'
import Footer from "../../Component/Shared/Footer";
import StaticHeading from "../../Component/Shared/StaticHeading";
const About = () => {
    const MissionP="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi  rutrum urna metus, id mauris mattis ac.Vestibulum auctor  elementum convallis. Sed porta scelerisque turpis, sit amet euismod urna facilisis sit amet. Ut pellentesque egestas nunc,  eget condimentum tellus mattis id. Etiam eu ligula commodo,  ornare leo vel,ultrices nisl. Etiam auctor odio nunc."
    const Missionp2='Quisque ipsum erat, eleifend et placerat vel, lacinia ac arcu. Nam feugiat ut urna vitae porta Aliquam faucibus lacus id magna vestibulum, a auctor erat blandit. Suspendisse ut lectu feugiat eros. Phasellus mauris odio,convallis ac libero vitae, feugiat tempor odio. Nulla facilisi.'
    return (
    <>
      <div className="bg-white">
        <div>
          <Navbar />
        </div>
       
        <div>
          <StaticHeading heading={'About'} path={'About Us'} textcolor={'text-[#92929D]'}/>
        </div>
        <div className="px-3 xl:px-9 bg-white">
          <section>
            <AboutGraham />
          </section>
          <section name='behind the story'>
            <Story/>
          </section>
          <section name='right people'>
            <RightPeople/>
          </section>
          <section name='Features'>
            <Features/>
          </section>
          <section>
            <AboutMission headind={'Our Mission'}
            paragraph1={MissionP} paragraph2={Missionp2} img={mission} /* flex={'flex-row-reverse'} *//>
          </section>
          <section className="pb-16">
            <AboutMission headind={'Our Vision'}
            paragraph1={MissionP} paragraph2={Missionp2} img={vision} flex={'flex-row-reverse'}/>
          </section>
          
        </div>
        <div>
          <Footer/>
          </div>
      </div>
    </>
  );
};

export default About;


 
