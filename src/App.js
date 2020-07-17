import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Men from './Components/Men';
import Women from './Components/Women'
import MenItems from './Components/MenItems'
import MenItemDisplay from './Components/MenItemDisplay'
import WomenItems from './Components/WomenItems'
import WomenItemDisplay from './Components/WomenItemDisplay'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Routes>
          <Route path='/' element={<Home />} />
          <Route path='men' element={<Men />}>
            <Route path='/' element={<MenItems />} />
            <Route path='/shoes/:menId' element={<MenItemDisplay />} />
          </Route>
          <Route path='women' element={<Women />}>
            <Route path='/' element={<WomenItems />} />
            <Route path='/shoes/:womenId' element={<WomenItemDisplay />} />
          </Route>

        </Routes>
			</div>
		</Router>
	);
}

export default App;
