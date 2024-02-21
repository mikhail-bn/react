import Button from "./Button/Button"

export default function TabSection({active, onChange}) {
    return (
        <section style={{marginBottom: '2rem'}}>
            <Button
                isActive={active === 'main'}
                onClickToButton={() => onChange('main')}>Home</Button>
            <Button
                isActive={active === 'feedback'}
                onClickToButton={() => onChange('feedback')}>Contact Us</Button>
        </section>
    )
}