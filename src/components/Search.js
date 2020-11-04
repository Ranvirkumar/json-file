import React from "react";
import { Link } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      SeachData: null,
      nodata: false,
      lastSearch: null
    };
  }
  Search(key) {
    this.setState({ lastSearch: key });
    fetch("http://localhost:3004/List?q=" + key).then(data => {
      data.json().then(response => {
        console.warn("response", response);
        // this.setState({Search:response})
        if (response.length > 0) {
          this.setState({ SeachData: response, nodata: false });
        } else {
          this.setState({ nodata: true, SeachData: null });
        }
      });
    });
  }

  delete(id) {
    fetch("http://localhost:3004/LIST/" + id, {
      method: "delete"
    }).then(result => {
      result.json().then(response => {
        console.log(response);
        this.Search(this.state.lastSearch);
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input
          type="text"
          onChange={event => this.Search(event.target.value)}
        />
        <Container>
          {this.state.SeachData ? (
            <div>
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
                  {this.state.SeachData.map((item, i) => (
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
            </div>
          ) : (
            ""
          )}
          {this.state.nodata ? <h3>no data found</h3> : null}
        </Container>
      </div>
    );
  }
}
