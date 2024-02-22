// Компонент button
import classes from "./Button.module.css"


// children - использовать запись в тег, onClickToButton - присвоение событию onClick переменной, isActive - true, false
export default function Button({ children, isActive, ...props}) {
      
    return (
        <button 
            {...props}
            className={isActive ? `${classes.button} ${classes.active}` : classes.button}>           
            {children}
        </button>
    )
}