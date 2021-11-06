import * as React from "react";
import * as styles from "./index.module.scss";

import { FaClock, FaTree, FaPython } from "react-icons/fa";
import { GiPillow } from "react-icons/gi";

import TechStack from "../home/TechStack";
import SlideBar from "../slidebar";

interface Props {
    vidSrc: string;
}

const InfoGrid: React.FC<Props> = ({ vidSrc, overview, techStack, prereqs, timeEstimate }) => (
    <div className={styles.overviewWrapper}>

        <div className={styles.infoGrid}>
            <video autoPlay loop className={styles.demoVid}>
                <source src={vidSrc} />
            </video>

            <div className={styles.overview}>
                <h3> Overview </h3>
                <p>
                    {overview}
                </p>
            </div>

            <div className={styles.difficulty}>
                <h3> Difficulty </h3>

                <SlideBar skillLevel={6} />
            </div>

            <div className={styles.techStack}>
                <h3> Tech Stack </h3>

                <TechStack stack={techStack} />
            </div>

            <div className={styles.prerequisites}>
                <h3> Prerequisites </h3>

                <TechStack stack={prereqs} />
            </div>

            <div className={styles.timeEstimate}>
                <h3> Time Estimate </h3>

                <TechStack stack={[
                    { logo: FaClock, size: 36, name: timeEstimate }
                ]} />
            </div>
        </div>
    </div>
)

export default InfoGrid;