import React from 'react';

class Bowl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cups: [] }
  }

  componentDidMount() {
    $.ajax({
      url: '/cups',
      tpe: 'GET',
      data: { bowlID: this.props._id }
    }).done( cups => {
      this.setState({ cups });
    });
  }

  addCup = (e) => {
    e.preventDefault();
    $.ajax({
      url: `/cups`,
      type: 'POST',
      data: { name: this.cupName.value, bowlId: this.props._id }
    }).done( cup => {
      this.setState({ cups: [...this.state.cups, cup] });
      this.cupName.value = null;
    });
  }

  deleteCup = (id) => {
    $.ajax({
      url: `/cups/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ cups: this.state.cups.filter( c => c._id !== id )  });
    });
  }

  render() {
    let { name, deleteBowl, _id } = this.props
    let cups = this.state.cups.map( c => {
      return (
        <li key={c._id} className="collection-item">
          <div>
            {c.name}
            <a
              className="secondary-content"
              onClick={ () => this.deleteCup(c._id) }
            >
              <i className="materiali-icons">delete</i>
            </a>
          </div>
        </li>
      )
    });

    return (
      <div className="col s12 m3">
        <h5 className="center">
          {name}
        <span>
          <i
            className="material-icons"
            onClick={() => deleteBowl(_id)}
          >
            delete
          </i>
        </span>
        </h5>
          <form onSubmit={this.addCup}>
            <input ref={ n => this.cupName = n } placeholder="Add Cup" />
          </form>
          <ul className="collection">
            {cups}
          </ul>
        </div>
    )
  }
}

export default Bowl;