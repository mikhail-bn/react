import Header from "./components/Header"
import { ways, differences } from "./data"
import ListItem from "./components/ListItem"
import Button from "./components/Button/Button"
import { useState } from 'react'

export default function App() {  
  const [contentType, setContentType] = useState(null)  
  //let content = 'Click the button'

  function handleClick(type) {
    setContentType(type)
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Here is our goals</h3>
          <ul>
            <ListItem 
              title={ways[0].title}
              description={ways[0].description}/> 
            <ListItem {...ways[1]} />
            <ListItem {...ways[2]} />                     
          </ul>
        </section>
        <section>
          <h3>So, what's the difference?</h3>
          <Button isActive={contentType==='way'} 
                  onClickToButton={() => handleClick('way')}>Aproach</Button>
          <Button isActive={contentType==='easy'} 
                  onClickToButton={() => handleClick('easy')}>Functionality</Button>
          <Button isActive={contentType==='program'} 
                  onClickToButton={() => handleClick('program')}>Prediction</Button> 
          { !contentType ? <p>Click the button</p> : null }        
          { contentType ? <p>{differences[contentType]}</p> : null }        
        </section>
      </main>
    </div>
  );
}
