require("./bower_components/Materialize/dist/css/materialize.css")
require("./style.css")

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './app/NavBar';
import Calc from './app/Calc';

export class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Calc />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
