import React from 'react';
import Button from './Button';

class ButtonSet extends React.Component {
  constructor(props) {
    super(props);

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(value) {
    console.log(value);
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
