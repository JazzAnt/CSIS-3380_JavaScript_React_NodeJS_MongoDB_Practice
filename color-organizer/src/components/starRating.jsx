import Star from "./star.jsx";
const StarRating = ({ rating = 0, maxRating = 5, updateRating = f=>f}) => {
  return [...Array(maxRating)].map((_, index) => (
    <Star key={index} selected={index < rating} updateRating = {() => {
      console.log("StarRating.jsx function called with rating of", index+1)
      
      updateRating(index+1)

    }}/>
  ));
};

export default StarRating;
