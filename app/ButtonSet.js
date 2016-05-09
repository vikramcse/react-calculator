import React from 'react';
import Button from './Button';
import Util from './utils';

class ButtonSet extends React.Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(value, type) {
    if (type === 'number') {
      if (!Util.curInput) {
        return Util.newInput = value;
      }

      return Util.newInput = `${Util.curInput}${value}`;
    } else {
      if (value !== '=') {
        Util.newInput = `${Util.curInput} ${value} `;
      } else if(value === 'clear') {
        console.log('clearing');
        Util.currInput = 0;
      } else {
        Util.newInput = eval(Util.curInput);
      }
    }
  }

  render() {
    var arr = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '=', '/', 'clear'];

    var list = arr.map(function(item) {
      return (<Button
                value={item}
                key={item}
                type={typeof item !== 'string' ? 'number' : 'operator'}
                clickHandler={this.buttonClick} />)
      }.bind(this));

      return (
        <div className="center controls">
          {list}
        </div>
      );
  }
}

export default ButtonSet;
