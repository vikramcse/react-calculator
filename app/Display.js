import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

	render() {
		return (
			<div className="center display">{this.props.text}</div>
		);
	}
}

export default Display;
