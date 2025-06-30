const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-xl ${i <= rating ? "text-amber-400" : "text-gray-300"}`}
      >
        ★
      </span>
    );
  }
  return <div className="flex space-x-1">{stars}</div>;
};
