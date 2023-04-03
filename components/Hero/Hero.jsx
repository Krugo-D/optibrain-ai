// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

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
        and challenges. Stay ahead of the curve with OptiBrain cutting-edge AI
        tools.
      </p>
    </div>
    <div className={styles.right}></div>
  </div>
);

export default Hero;
