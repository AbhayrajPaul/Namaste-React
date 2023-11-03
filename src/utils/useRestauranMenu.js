import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [resItems, setResItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data?.cards[0]?.card?.card?.info);
    setResItems(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };
  //   console.log(resInfo);
  //   console.log(resItems);
  return [resInfo, resItems];
};

export default useRestaurantMenu;
