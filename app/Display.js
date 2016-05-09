import React from 'react';
import Util from './utils';

class Display extends React.Component {
  constructor(props) {
    super(props);

    this.updateDisplay = this.updateDisplay.bind(this);
    this.state = {
      text: this.props.text || '0'
    }
  }

  updateDisplay(str) {
    str = str.split ? str.split(' ').reverse().join(' ') : str;
    this.setState({
      text: str
    });
  }

  componentWillMount() {
    Util.addListener('output', this.updateDisplay);
  }

	render() {
		return (
			<div className="center display">{this.state.text}</div>
		);
	}
}

export default Display;
