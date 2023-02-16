
import ListItem from "./list-item";

function List({ data }) {
    const elem = data.map(item => {
        return (
            <ListItem key={item.key} id={item.id} surname={item.surname} />
        )
    })

    return (
        <div>
            {elem}
        </div>
    )
}

export default List
