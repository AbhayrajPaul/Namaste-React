import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); // copy of all the restaurant
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // filtered data
  const [searchText, setSearchText] = useState("");

  console.log(restaurantList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();
    console.log(json.data);

    setRestaurantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants // updating filtered restaurant~
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>
        <h1>You are offline!!!!</h1>
        <Shimmer />
      </>
    );

  //conditional rendering

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Search bar */}
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Type here....."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-"
            onClick={() => {
              //filter restaurant carts and update UI
              // searchText
              const filteredRestaurant = restaurantList.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant?.info?.avgRating > 4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {" "}
            <RestaurantCard
              id={restaurant?.info?.id}
              cloudinaryImageId={restaurant?.info?.cloudinaryImageId}
              name={restaurant?.info?.name}
              avgRating={restaurant?.info?.avgRating}
              cuisines={restaurant?.info?.cuisines}
              costForTwo={restaurant?.info?.costForTwo}
              deliveryTime={restaurant?.info?.sla.deliveryTime}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
