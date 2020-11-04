import React from "react";

export default class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: "",
      id: "",
      title: "",
      body: ""
    };
  }

  Create() {
    fetch("http://localhost:3004/LIST", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(result => {
      result.json().then(response => {
        console.log(response);
      });
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>Create</h1>
        </div>
        <div>
          <label>userId:</label>
          <input
            onChange={event => {
              this.setState({ userId: event.target.value });
            }}
          />
          <br />
          <br />
          <label>id:</label>
          <input
            onChange={event => {
              this.setState({ id: event.target.value });
            }}
          />
          <br />
          <br />
          <label>title:</label>
          <input
            onChange={event => {
              this.setState({ title: event.target.value });
            }}
          />
          <br />
          <br />
          <label>body:</label>
          <input
            onChange={event => {
              this.setState({ body: event.target.value });
            }}
          />
          <br />
          <br />
          <button
            onClick={() => {
              this.Create();
            }}
          >
            Add List
          </button>
        </div>
      </div>
    );
  }
}
