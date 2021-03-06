import React from 'react';

class HiddenMessage extends React.Component {
  constructor() {
    super();

    // TODO implement this.state
    this.state = {
      collapsed: true,
      label: 'Show',
      msg: 'Such state'
    };
  }

  onClick(ev) {
    this.setState({
      collapsed: !this.state.collapsed,
      label: !this.state.collapsed ? 'Show' : 'Hide'
    })
  }
  render() {
    console.log(this.state);

    const style = {
      display: this.state.collapsed ? 'none' : 'block'
    };

    return (
      <div>
        <button
          type='button'
          onClick={this.onClick.bind(this)}
          className='btn btn-default'
        >
          {this.state.label}
        </button>
        <div className='well' style={style}>
          {this.state.msg}
        </div>
      </div>
    );
  }
}

export default HiddenMessage;
