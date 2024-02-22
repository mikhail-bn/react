import Button from "./Button/Button"
import Modal from "./Modal/modal"
import { useState, useEffect, useCallback } from "react"
import useInput from "../hooks/useInput"

export default function EffectSection() {
    const input = useInput()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [dataUsers, setDataUsers] = useState([])

    const fatchUsers = useCallback(async() => {
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const dataUsers = await response.json()
        setDataUsers(dataUsers)
        setLoading(false)
    }, [])

    
    useEffect(() => {
        fatchUsers()
    }, [fatchUsers])

    return (
        <section>
            <h3>Effect</h3>

            <Button style={{marginBottom: '10px'}} onClick={() => setIsModalOpen(true)}>
                Open Information
            </Button>

                <Modal open={isModalOpen}>

                    <h3 style={{textAlign: 'center'}}>Hello!</h3>

                    <p>We check mobile system functionality, usability, performance, security, GUI, compatibility, and integrability to ensure high performance and high security of mobile software and, thus, to enable customers to increase income and enter new markets.</p>

                    <Button style={{transform: 'translate(60%)', marginBottom: '10px', marginRight: '0'}} onClick={() => setIsModalOpen(false)}>Close Information</Button>

                </Modal>

                {loading && <p>Loading...</p>}
                {!loading && (
                    <>
                        <input type="text" className="control" {...input} />
                         <ul>
                            {dataUsers
                                .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
                                .map(user => <li key={user.id}>{user.name}</li>)
                            }
                        </ul>
                    </>
                   
                )}
            
        </section>
    )
}