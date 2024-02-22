import Button from "./Button/Button"
import Modal from "./Modal/modal"
import { useState } from "react"

export default function EffectSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }

    return (
        <section>
            <h3>Effect</h3>

            <Button onClick={openModal}>Open Information</Button>
            <Modal open={isModalOpen}>
                <h3 style={{textAlign: 'center'}}>Hello!</h3>
                <p>We check mobile system functionality, usability, performance, security, GUI, compatibility, and integrability to ensure high performance and high security of mobile software and, thus, to enable customers to increase income and enter new markets.</p>
                <Button style={{transform: 'translate(60%)', marginBottom: '10px', marginRight: '0'}} onClick={() => setIsModalOpen(false)}>Close Information</Button>
            </Modal>
            
        </section>
    )
}