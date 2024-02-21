import Header from "./components/Header"
import Goals from "./components/goals"
import Differences from "./components/differences"
import Intro from "./components/intro"
import TabSection from "./components/tabSection"
import Feedback from "./components/Feedback"
import { useState } from "react"
import { Fragment } from "react"

export default function App() {
  const [tab, setTab] = useState('feedback')
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
      </main>
    </>
  );
}
