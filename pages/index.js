import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import Contact from "../components/contact";
import Main from "../components/main";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Skills from "../components/skill";
import styles from "../styles/Home.module.css";
import { ParticlesContainer } from "../components/config/particlesBackground";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MAK | Porfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact/> */}
    </div>
  );
}
