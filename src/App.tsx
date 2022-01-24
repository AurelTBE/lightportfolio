import Layout from '../components/Layout'
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Timeline from '../components/Timeline';
import Index from './Index';
import { Project } from "../components/Projects/Project";
import { List } from "../components/Projects/Projects";
import { Routes, Route } from "react-router-dom";
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
      <AnimateSharedLayout>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/:id" element={Store} />
        </Routes>
      </AnimateSharedLayout>
    </Layout>
  )
}

export default App
