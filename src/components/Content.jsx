import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Content = ({
	part1,
	part2,
	part3,
	excercises1,
	excercises2,
	excercises3,
}) => {
	return (
		<div>
			<Part1 part1={part1} excercises1={excercises1} />
			<Part2 part2={part2} excercises2={excercises2} />
			<Part3 part3={part3} excercises3={excercises3} />
		</div>
	);
};

export default Content;
