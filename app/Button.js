import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickHandler(this.props.value, this.props.type);
  }

  render() {
    var type = this.props.type;

    return (
      <button
        value={this.props.value}
        onClick={this.handleClick}
        className={"btn waves-effect waves-light" + (type === 'operator' ? ' grey': '')}>
          {this.props.value}
        </button>
    );
  }
}

export default Button;
