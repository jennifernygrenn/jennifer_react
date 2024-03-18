import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Artists from './pages/Artists';

import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 

import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
	<Router>
		<MainContainer>
			<Header />

			<Routes>
				<Route exact path ="/" element={<Home />}/>
				<Route path ="/about" element={<About />} />
				<Route path ="/contact" element={<Contact />} />
				<Route path='/support' element={<Support />} />
				<Route path='/artists' element={<Artists />} />
			</Routes>

			<Footer />

		</MainContainer>
		
	</Router>
  );
}

export default App;
