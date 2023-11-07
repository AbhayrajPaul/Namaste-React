import Shimmer from "./Shimmer";
import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestauranMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, resItems, categories] = useRestaurantMenu(resId);

  console.log("resInfo:", resInfo);
  console.log("resItems:", resItems);
  console.log("categories", categories);

  if (resInfo === null || resItems === null) return <Shimmer />; // couldn't use optional because by default resInfo is set to null so couldn't fetch data in null

  //Shimmer UI
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{resInfo?.name}</h1>
      <p className="font-bold text-lg ">{resInfo?.cuisines?.join(",")}</p>
      {/* categories accordian */}
      {categories.map((category) => (
        <ResCategory />
      ))}
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
