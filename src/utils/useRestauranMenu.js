import { useEffect, useState } from "react";
// import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([null]);
  const [resItems, setResItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.390357109608406&lng=76.75831396132708&restaurantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json.data?.cards[0]?.card?.card?.info);
    setResItems(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    console.log(json);
    const newCategories = resItems?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge"
    );
    console.log("newCategories", newCategories);
    setCategories(newCategories);
  };
  console.log(resInfo);
  console.log(resItems);
  console.log(categories);
  return [resInfo, resItems, categories];
};

export default useRestaurantMenu;
