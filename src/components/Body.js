import RestaurantCard from "./RestaurantCard";
import restaurantListData from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  let [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(data, json);
    setRestaurantList(
      data.json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant?.data?.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="reataurant-container">
        {restaurantList.map(
          (restaurant) => (
            (
              <RestaurantCard
                key={restaurant.data.id}
                restaurantData={restaurant}
              />
            ),
            console.log(restaurantList)
          )
        )}
      </div>
    </div>
  );
};

export default Body;
