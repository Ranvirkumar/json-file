import React from "react";

export default class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      id: "",
      title: "",
      body: ""
    };
  }
  componentWillMount() {
    fetch("http://localhost:3004/List/" + this.props.match.params.id).then(
      response => {
        response.json().then(result => {
          console.log(result);
          this.setState({
            userId: result.userId,
            id: result.id,
            title: result.title,
            body: result.body
          });
        });
      }
    );
  }
  Update() {
    fetch("http://localhost:3004/LIST/" + this.state.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(result => {
      result.json().then(response => {
        alert("list has been updated");
      });
    });
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <div>
          <h1>Update</h1>
        </div>
        <div>
          <label>userId:</label>
          <input
            onChange={event => {
              this.setState({ userId: event.target.value });
            }}
            value={this.state.userId}
          />
          <br />
          <br />
          <label>title:</label>
          <input
            onChange={event => {
              this.setState({ title: event.target.value });
            }}
            value={this.state.title}
          />
          <br />
          <br />
          <label>body:</label>
          <input
            onChange={event => {
              this.setState({ body: event.target.value });
            }}
            value={this.state.body}
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.Update();
            }}
          >
            Update List
          </button>
        </div>
      </div>
    );
  }
}
