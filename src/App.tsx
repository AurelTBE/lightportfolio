import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';
import { Project } from "../components/Projects/Project";
import { List } from "../components/Projects/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

function Store({ match }:any) {
  let { id } = match.params;
  const imageHasLoaded = true;

  return (
    <>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Project id={id} key="item" />}
      </AnimatePresence>
    </>
  );
}

function App() {

  return (
    <Layout>
      <Hero />
      <Projects />
      <Technologies />
      <Timeline />
      <Projects />
    </Layout>
  )
}

export default App
