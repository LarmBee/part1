const Total = ({parts}) => {
	return (
		<p>Total exercises completed
		{parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}
		</p>
	);
};

export default Total;
