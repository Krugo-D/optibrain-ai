// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => (
  <div className={styles.jumbotron}>
    <div className={styles.jumbotron}>
      {/*logo*/}
      <div className={styles["logo-container"]}>
        <Image
          src="/logo_transparent.png"
          alt="OptiBrain Logo"
          layout="fill" // Fill the logo container
          objectFit="cover" // Cover the logo container
        />
      </div>
      {/*subtitle*/}
      <h2 className={styles.lead}>
        Find the perfect AI to optimize your brain
      </h2>
      <p>
        AI is rapidly changing the world, creating unprecedented opportunities
        and challenges. <br />
        Stay ahead of the curve with OptiBrain{"'"}s cutting-edge AI tools and
        guides.
      </p>
    </div>
  </div>
);

export default Hero;
