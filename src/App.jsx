import Header from "./components/Header"

// Импорт массивов из data
import { ways, differences } from "./data"
import ListItem from "./components/ListItem"
import Button from "./components/Button/Button"

// Импорт хука State
import { useState } from 'react'

export default function App() {

  // useState обязательно вверху
  // State для массива переменных ( контейнер данных contentType  и функция его изменения setContentType) и помещение им null значения
  const [contentType, setContentType] = useState(null)

 // Функция меняет (после её вызова потом) ключ выводимиго контента (в переменную type будет помещено значение ключа контента) и )
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

          {/* Заголовок  */}

          <h3>So, what's the difference?</h3>

          {/* Кнопки */}

          <Button isActive={contentType==='way'} 
                  onClickToButton={() => handleClick('way')}>Aproach</Button>
          <Button isActive={contentType==='easy'} 
                  onClickToButton={() => handleClick('easy')}>Functionality</Button>
          <Button isActive={contentType==='program'} 
                  onClickToButton={() => handleClick('program')}>Prediction</Button>

          {/* Контентная часть */}

            {/* Если contentType нет то выводить Click the button если есть то ничего не выводить */}
            { !contentType ? <p>Click the button</p> : null }
            
            {/* Если contentType есть то выводить {differences[contentType]} если нет то ничего не выводить */}        
            { contentType ? <p>{differences[contentType]}</p> : null }  

        </section>
      </main>
    </div>
  );
}
