import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import edupho from "../assets/edutechphoto.jpg";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] text-n-3">
          <h1 className="h3 text-n-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">
            Bridge the gap between value-based learning and demands
            of a competitive environment
          </h1>
          <p className="body-1 max-w-3xl mx-auto p-5 mb-6 text-n-2 lg:mb-8">
            Unleash the power of education and upgrade your productivity
            with E3 Edutech, the open learning platform.
          </p>
          <Button href={"#features"} white>
            Explore
          </Button>
        </div>

        <p className="max-w-[68rem] mx-auto  text-justify text-xl mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] text-n-2">
          E^3 Education and Solutions' mission is to bridge the gap between
          value-based learning and the demands of a competitive environment.
          They aim to reform and modernize school education to ensure it equips
          students with the skills and knowledge they need to succeed in a
          competitive world, while still fostering the ethical and moral values
          that are crucial for a well-rounded education. By doing so, they can
          create a learning experience that is not only enriching but also
          prepares students for competitive exams while still nurturing their
          well-being and fostering a love of learning.
        </p>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient"> */}
          {/* <div className="relative bg-n-8 rounded-[1rem]"> */}
          {/* <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" /> */}

          {/* <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroIcons.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax> */}

          {/* <ScrollParallax isAbsolutelyPositioned>
                <Notification
                  className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                  title="Code generation"
                />
              </ScrollParallax> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div> */}

          {/* <BackgroundCircles /> */}
        </div>

        {/* <CompanyLogos className="hidden relative z-10 mt-20 lg:block" /> */}
      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
