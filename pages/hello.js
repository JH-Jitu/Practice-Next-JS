import Image from "next/image";
import React from "react";
import { BackgroundWave } from "../modules/Container.styles";
import backgroundWave from "./../modules/assets/backgroundWave.svg";
import bgMap from "./../modules/assets/map.png";

const Hello = () => {
  return (
    <div>
      <BackgroundWave bgPhoto={backgroundWave}>
        <div>
          <section>
            <h1>We are mooov</h1>
            <p>
              To become the solution for global transfers and payrolls we are
              after like-minded investors to be a part our journey.
            </p>
          </section>
        </div>
      </BackgroundWave>
    </div>
  );
};

export default Hello;
