require("./bower_components/mui/packages/cdn/css/mui.css")

import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div className="mui-container">
	      <div className="mui-panel">
	        <h1>My Demo</h1>
	        <button className="mui-btn mui-btn--primary mui-btn--raised">My Button</button>
	      </div>
	    </div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
