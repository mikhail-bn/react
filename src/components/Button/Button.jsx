// Компонент button
import "./Button.css"

export default function Button({ children, onClickToButton, isActive}) {
      
    return (
        <button 
            className={isActive ? "button active" : "button"}
            onClick={onClickToButton}>           
            {children}
        </button>
    )
}