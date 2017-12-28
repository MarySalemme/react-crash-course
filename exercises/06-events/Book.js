import React from 'react';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { read: this.props.read };
    console.log(this.state.read);
  }
  toggleRead() {
    console.log('A: ', this.state.read);
    this.setState({
      read: !this.state.read
    })
    console.log('B: ', this);

  }
  // TODO add the missing event!
  render() {
    return (
      <tr>
        <td>
          {this.props.title}
        </td>
        <td>
          <input
            type='checkbox'
            checked={this.state.read}
            onChange={this.toggleRead.bind(this)}
          />
        </td>
      </tr>
    );
  }
}

export default Book;
