import { useState, useRef } from "react";
import Button from "./Button/Button";


function StateVsRef() {
    const input = useRef()
    const [show, setShow] = useState(false)

    function handleKeyDown(e) {
        if (e.key === 'Enter'){
            setShow(true)
        }
    }
    return (
        <div>
            <h3>Input value: {show  && input.current.value}</h3>
            <input
                ref={input}                
                className="control" 
                type="text"              
                onKeyDown={handleKeyDown}/>
        </div>
        
    )
}
export default function  Feedback () {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        hasError: false,
    })
    //const [name, setName] = useState('')
    //const [reason, setReason] = useState('help')
    //const [hasError, setHasError] = useState(true)

    function  handleNameChange(event) {
        //setName(event.target.value)
        //setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev,
            name: event.target.value,
            hasError: event.target.value.trim().length === 0,
        }))
    }

    // function toggleError() {
        //setHasError((prev) => !prev)
    // }

    return (
        <section>
            <h3>Contact Us</h3>            

            {/* <Button onClick={toggleError}>Toggle Error</Button> */}
            
            <form style={{marginBottom:'1rem', border: '1px solid #ccc', padding: '15px', borderRadius: '8px'}}>
                <label htmlFor="name"><p><b>Your Name</b></p></label>
                <input 
                    value={form.name} 
                    type="text"
                    className="control"
                    style={{border: form.hasError ? '1px solid red' : null,}} 
                    id="name"
                    onChange={handleNameChange}
                    />            

                <label htmlFor="reason"><p><b>Reason to reach us</b></p></label>
                <select 
                    value={form.reason} 
                    className="control"  
                    id="reason" 
                    onChange={(event) => setForm((prev) => ({...prev, reason: event.target.value}))}>
                        <option value="mistake">Mistake</option>
                        <option value="help">Need Help</option>
                        <option value="suggestions">Suggestions</option>                
                </select>
                 {/* <pre>{JSON.stringify(form, null, 2)}</pre>  */}
                <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>               
            </form>
            
            <StateVsRef />
        </section>
    )
}