import { ways } from "../data"
import ListItem from "./ListItem"

export default function Goals () {
    return (
        <section>
          <h3>Here is our goals</h3>
          <ul>

            {/* // Преобразовать массив ways в лист компонентов ListItem, необходима запись key */}
            { ways.map(way => <ListItem key={way.title} {...way} />)  }                
          </ul>
        </section>
    )
}