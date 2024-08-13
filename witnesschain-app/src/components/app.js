import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import Provers from '../routes/provers/provers';
import Challengers from '../routes/challengers/challengers';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Home path="/home" />
				<Profile path="/profile"/>
				<Provers path="/provers"></Provers>
				<Challengers path="/challengers"></Challengers>
				{/* <Profile path="/profile/:user" /> */}
			</Router>
		</main>
	</div>
);

export default App;
