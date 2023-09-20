const Content = ({ parts }) => {
	return (
		<div>
			{parts.parts.map((part, index) => (
				<p key={index}>
					{part.name} {part.exercises}
				</p>
			))}
		</div>
	);
};

export default Content;
