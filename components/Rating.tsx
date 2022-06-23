interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  return <div className="text-blue-500 font-bold">{rating}</div>;
};

export default Rating;
