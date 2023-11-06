import Shimmer from "./Shimmer";
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, resItems] = useRestaurantMenu(resId);

  console.log("resInfo:", resInfo);
  console.log("resItems:", resItems);

  if (resInfo === null || resItems === null) return <Shimmer />; // couldn't use optional because by default resInfo is set to null so couldn't fetch data in null

  //Shimmer UI
  return (
    <div>
      <h1>{resInfo?.name}</h1>
      <p>{resInfo?.cuisines.join(",")}</p>
      <h3>{resInfo?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <div>
        {resItems.map((item) => (
          <div key={item?.card?.info?.id}>
            <h1>{item?.card?.card?.title}</h1>
            {item?.card?.card?.itemCards?.map((e) => {
              return (
                <div key={e.card.info.id}>
                  <h5>
                    {e.card.info.name} , ₹{e.card.info.price / 100}/-Ff{" "}
                  </h5>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
