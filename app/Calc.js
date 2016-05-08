import React from 'react';
import Display from './Display';
import ButtonSet from './ButtonSet';

class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

	render() {
		return (
      <div className="section">
        <div className="row">
          <Display text={this.state.text}/>

          <ButtonSet />
        </div>
      </div>
		);
	}
}

export default Calc;
