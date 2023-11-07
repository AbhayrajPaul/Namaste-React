import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  deliveryTime,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400 lg:bg-green-50 sm:bg-yellow-50">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4> Rs {costForTwo}/-</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  ); // converting the costForTwo in inr
};

//Higher Order Function

export const withPromo = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promotion
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
