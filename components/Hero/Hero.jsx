// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import { Link, Button } from "react-bootstrap";
import Image from "next/image";
import { BsLightning, BsGear } from "react-icons/bs";

const Hero = () => (
  <div className={styles.jumbotron}>
    <div className={styles.jumbotron}>
      {/*logo*/}
      <Image
        src="/logo_transparent.png"
        alt="OptiBrain Logo"
        width={500}
        height={500}
      />
      {/*subtitle*/}
      <p className={styles.lead}>Optimize your brain with our AI tools.</p>
      <p>
        AI is rapidly changing the world, creating unprecedented opportunities
        and challenges. Stay ahead of the curve with OptiBrains' cutting-edge AI
        tools.
      </p>
      <div className={styles.icons}>
        <BsLightning size={40} className={styles.icon} />
        <BsGear size={40} className={styles.icon} />
      </div>
    </div>
    <div className={styles.right}></div>
  </div>
);

export default Hero;