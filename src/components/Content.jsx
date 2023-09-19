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
			<p>
				{part1} {excercises1}
			</p>
			<p>
				{part2} {excercises2}
			</p>
			<p>
				{part3} {excercises3}
			</p>
		</div>
	);
};

export default Content;
