//Компонент Header
import logo from '/public/react-logo-text.svg'
import { useState } from 'react'
//import './Header.css'
import { styled } from 'styled-components'

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    background: #fafafa;
`

export default function Header() {


    // State для динамики времени - массив переменной now и условие её изменения setNow
    const [now, setNow] = useState(new Date())
    
    // Изменять значение переменной now через секунду переменную
    setInterval(() => setNow(new Date()), 1000)


    return (
      <HeaderContainer>          
          <img src={logo} alt="logo" />        
          <span>Actual time: {now.toLocaleTimeString()}</span> 
      </HeaderContainer>
    )
  }