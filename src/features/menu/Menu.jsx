import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();

  return (
    <div>
      <ul className="divide-y divide-stone-200">
        {menu.map((pizza)=>(<MenuItem key={pizza.id} pizza={pizza}/>))}
      </ul>
    </div>

  )
}
export async function loader()
{
  const menu = await getMenu();
  return menu;
}

export default Menu;
