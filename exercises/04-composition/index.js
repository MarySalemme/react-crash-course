import React from 'react';

class List extends React.Component {
  // TODO write your component here
  
  render() {

    const listItems = this.props.topics.map(function(topic) {
      return <li className='list-group-item'>{topic}</li>
    });

    return (
      <ul className='list-group'>
        {listItems}
      </ul>
    );
  }
}

class Topics extends React.Component {
  // TODO write your component here
  render() {
    
    const items = [
      'Component',
      'Props',
      'Composition'
    ];

    return (
      <div>
        <h4>Below is a list a of topics</h4>
        <List topics={items} />
      </div>
    );
  }
}

export default Topics;
