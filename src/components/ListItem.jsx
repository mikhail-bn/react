export default function ListItem({ title, description }){
    return (
      <li>
        <p>
          <strong>{title}</strong>{description}
        </p>
      </li>
    )
  }