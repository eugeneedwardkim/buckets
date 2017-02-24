import React from 'react';
import Form from '../Form';
import Bowl from './Bowl';

class Bowls extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bowls: [] }
  }

  domponentDidMount() {
    $.ajax({
      url: '/bowls',
      type: 'GET',
      data: { bucketId: this.props.bucketId }
    }).done( bowls => {
      this.setState({ bowls });
    });

  }

  addBowl = (name) => {
    let { bucketId } = this.props;
    $.ajax({
      url: '/bowls',
      type: 'POST',
      data: { bucketId, name }
    }).done( bowl => {
      this.setState({ bowls: [...this.state.bowls, bowl] });
    });
  }

  deleteBowl = (id) => {
    $.ajax({
      url: `/bowls/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ bowls: this.state.bowls.filter( l => l._id !== id )});
    });
  }

  render() {
    let bowls = this.state.bowls.map( bowl => {
      return (
        <Bowl
          key={bowl._id}
          deleteBowl={this.deleteBowl}
          {...bowl}
        />
      )
    });

    return (
      <div>
        <Form add={this.addBowl} placeholder="Add Bowl"/>
        <div className="row">
          {bowls}
        </div>
      </div>
    )
  }
}

export default Bowls;