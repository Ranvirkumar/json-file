import React from "react";
import { Link } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      List: null
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3004/List").then(response => {
      response.json().then(result => {
        this.setState({ list: result });
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3004/LIST/" + id, {
      method: "delete"
    }).then(result => {
      result.json().then(response => {
        console.log(response);
        this.getData();
      });
    });
  }

  render() {
    return (
      <div>
        <h1>List</h1>
        {this.state.list ? (
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>userId</th>
                  <th>id</th>
                  <th>title</th>
                  <th>body</th>
                  <th>operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{i}</td>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                      <Link to={"/Update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="orange" />
                      </Link>
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        ) : (
          <p>please wait</p>
        )}
      </div>
    );
  }
}
