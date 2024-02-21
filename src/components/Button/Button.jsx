// Компонент button
import "./Button.css"


// children - использовать запись в тег, onClickToButton - присвоение событию onClick переменной, isActive - true, false
export default function Button({ children, onClickToButton, isActive}) {
      
    return (
        <button 
            className={isActive ? "button active" : "button"}
            onClick={onClickToButton}>           
            {children}
        </button>
    )
}