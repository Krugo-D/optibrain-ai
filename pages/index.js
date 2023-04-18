// index.js
import React, { useState, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Testimonial from "../components/Testimonial/Testimonial";

export default function Home() {
  const contentRef = useRef(null);

  return (
    <Layout>
      <main>
        <Hero contentRef={contentRef} />
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "descriptions"])),
    },
  };
}
