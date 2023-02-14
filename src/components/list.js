import data from "./lib";
import ListItem from "./list-item";

function List({data}) {
   const elem = data.map(item => {
        return (
            <ListItem id={item.id} surname={item.surname}/>
        )
   })

   return (
    <div>
        {elem}
    </div>
   )
}

export default List
// Сделать так как это должно быть (список с элементами списка)