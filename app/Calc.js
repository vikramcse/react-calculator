import React from 'react';
import Display from './Display';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '123456'
    };
  }

	render() {
		return (
      <div className="section">
        <div className="row">
          <Display text={this.state.text}/>

          <div className="center controls">
            <button value="7" className="btn waves-effect waves-light number">7</button>
            <button value="8" className="btn waves-effect waves-light number">8</button>
            <button value="9" className="btn waves-effect waves-light number">9</button>
            <button value="+" className="btn waves-effect grey waves-light operator" disabled>+</button><br />
            <button value="4" className="btn waves-effect waves-light number">4</button>
            <button value="5" className="btn darken-2 waves-effect waves-light number">5</button>
            <button value="6" className="btn waves-effect waves-light number">6</button>
            <button value="-" className="btn waves-effect grey waves-light operator" disabled>-</button><br />
            <button value="1" className="btn waves-effect waves-light number">1</button>
            <button value="2" className="btn waves-effect waves-light number">2</button>
            <button value="3" className="btn waves-effect waves-light number">3</button>
            <button value="*" className="btn waves-effect grey waves-light operator" disabled>x</button><br />
            <button value="0" className="btn waves-effect waves-light number">0</button>
            <button value="." className="btn waves-effect grey waves-light number dot">.</button>
            <button value="=" className="btn waves-effect grey waves-light equal" disabled>=</button>
            <button value="/" className="btn waves-effect grey waves-light operator" disabled>/</button><br />
            <button className="btn waves-effect grey waves-light clear" >clear</button>
          </div>
        </div>
      </div>
		);
	}
}

export default Calc;
