import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";


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
