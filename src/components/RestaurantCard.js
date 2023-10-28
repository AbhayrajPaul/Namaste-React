import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = restaurantData?.data;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4> ₹{costForTwo / 100}/-</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  ); // converting the costForTwo in inr
};

export default RestaurantCard;
