import Button from "./Button/Button"
// Импорт массивов из data
import { differences } from "../data"
// Импорт хука State
import { useState } from "react"
import { Fragment } from "react"

export default function Differences () {

    // useState обязательно вверху
    // State для массива переменных ( контейнер данных contentType  и функция его изменения setContentType) и помещение им null значения
        const [contentType, setContentType] = useState(null)

    // Функция меняет (после её вызова потом) ключ выводимиго контента (в переменную type будет помещено значение ключа контента) и )
        function handleClick(type) {
            setContentType(type)
        }

    return (

      
        <section>

          {/* Заголовок  */}

          <h3>So, what's the difference?</h3>

          {/* Кнопки */}

          <Button 
                  // Проверка: если contentType==='way', то isActive - true и в кнопке присвоится класс active
                  isActive={contentType==='way'}
                  // Событие при нажатии - колбек для изменения типа ключа контента 
                  onClick={() => handleClick('way')}>Aproach</Button>
          <Button 
                  isActive={contentType==='easy'} 
                  onClick={() => handleClick('easy')}>Functionality</Button>
          <Button 
                  isActive={contentType==='program'} 
                  onClick={() => handleClick('program')}>Prediction</Button>

          {/* Контентная часть */}

            {/* Если contentType нет то выводить Click the button если есть то ничего не выводить */}
            { !contentType ? <p>Click the button</p> : null }

            {/* Если contentType есть то выводить {differences[contentType]} если нет то ничего не выводить */}        
            { contentType ? <p>{differences[contentType]}</p> : null }  

        </section>
    )
}