import React from 'react';

class Book extends React.Component {
  render() {
    return (<div>
      <p>{this.props.title}</p>
      <input type="checkbox" checked={this.props.read}/> Read
    </div>);
  }
}

// TODO
Book.defaultProps = {
  title: '',
  read: false
};

class Library extends React.Component {
  render() {
    const read = true;
    const title = 'Professional Node.js: Building JavaScript Based Scalable Software';

    return (
      <ul>
        {/* don't declare any attributes here */}
        <li><Book title={title} read={read}/></li>
        {/* TODO pass the title and read values to Book by using the Book tag attributes */}
        <li><Book title="Harry Potter" read={false} /></li>
      </ul>
    );
  }
}

export default Library;
