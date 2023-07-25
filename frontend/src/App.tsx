import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Listing from "./pages/Listing";
import Rate from "./pages/Rate";

function App() {
	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Listing />} />
				<Route path="/movie/:movieId" element={<Rate />} />
			</Routes>
		</BrowserRouter>
	)
}
	
export default App;
