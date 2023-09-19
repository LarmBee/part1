const Header = ({ course }) => {
	return (
		<div>
			<h1>{course}</h1>
		</div>
	);
};

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

const Total = ({ excercises1, excercises2, excercises3 }) => {
	return (
		<div>
			<p>Number of excercies {excercises1 + excercises2 + excercises3}</p>
		</div>
	);
};

const App = (props) => {
	const course = "Half Stack Application Development";
	const part1 = "Fundamentals Of React";
	const excercises1 = 10;
	const part2 = "Using props to pass data";
	const excercises2 = 7;
	const part3 = "State of a component";
	const excercises3 = 14;

	return (
		<div>
			<Header course={course} />
			<Content
				part1={part1}
				part2={part2}
				part3={part3}
				excercises1={excercises1}
				excercises2={excercises2}
				excercises3={excercises3}
			/>
			<Total
				excercises1={excercises1}
				excercises2={excercises2}
				excercises3={excercises3}
			/>
		</div>
	);
};

export default App;
