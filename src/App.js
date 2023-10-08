import "./App.css";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import Form from "./components/Form";
import Success from "./components/Success";
import { useSelector } from "react-redux";

function App() {
	const success = useSelector((state) => state.card.success);
	return (
		<div className="App">
			<div className="background" />
			<div className="foreground">
				<div className="cardContainer">
					<CardFront />
					<CardBack />
				</div>
				<div className="formContainer">
					{!success && <Form />}
					{success && <Success />}
				</div>
			</div>
		</div>
	);
}

export default App;
