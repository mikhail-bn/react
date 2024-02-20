//Компонент Header
import logo from '/logo-name.svg'
import {useState} from 'react'

export default function Header() {


    // State для динамики времени - массив переменной now и условие её изменения setNow
    const [now, setNow] = useState(new Date())
    
    // Изменять значение переменной now через секунду переменную
    setInterval(() => setNow(new Date()), 1000)


    return (
      <header>          
          <img src={logo} alt="logo" />        
          <span>Actual time: {now.toLocaleTimeString()}</span> 
        </header>
    )
  }