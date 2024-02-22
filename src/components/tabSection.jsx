import Button from "./Button/Button"

export default function TabSection({active, onChange}) {
    return (
        <section style={{marginBottom: '2rem'}}>
            <Button
                isActive={active === 'main'}
                onClick={() => onChange('main')}>Home</Button>
            <Button
                isActive={active === 'feedback'}
                onClick={() => onChange('feedback')}>Contact Us</Button>
            <Button
                isActive={active === 'effect'}
                onClick={() => onChange('effect')}>Effect</Button>
        </section>
    )
}