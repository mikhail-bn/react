import Header from "./components/Header/Header"
import Goals from "./components/goals"
import Differences from "./components/differences"
import Intro from "./components/intro"
import TabSection from "./components/tabSection"
import Feedback from "./components/Feedback"
import { useState } from "react"
import EffectSection from "./components/EffectSection"
//import { Fragment } from "react"

export default function App() {
  const [tab, setTab] = useState('effect')
  return (
    <>
      <Header />
      <main>
        <Intro />
        <TabSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === 'main' && (
          <>
            <Goals />
            <Differences />
          </>
        )}
        {tab === 'feedback' && (
          <>
            <Feedback />
          </>
        )}        
        {tab === 'effect' && (
          <>
            <EffectSection />
          </>
        )}        
      </main>
    </>
  );
}