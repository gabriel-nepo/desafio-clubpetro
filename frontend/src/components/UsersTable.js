import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './../App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import baseUrl from './baseUrl'


export default class UsersTable extends Component {
  constructor() {
    super();
    this.state = {
      current: `${baseUrl}api/users`,
      next: '',
      allUsers: []
    }
  }
  async handleNext() {
    let res = await fetch(this.state.next).then((response) => {
      return response.json();
    });
    this.setState({
      allUsers: res.data,
      next: res.nextPage
    });

  }
  async componentDidMount() {
    let res = await fetch(this.state.current).then((response) => {
      return response.json();
    });
    await this.setState({
      allUsers: res.data,
      next: res.nextPage
    });
  }
  render() {
    return (
      <div>
        <h1 className="center page-header">GitHub Users</h1>
        <div className="rt-margin">
          <ReactTable
            showPageSizeOptions={false}
            showPagination={false}
            showPageJump={false}
            data={this.state.allUsers}
            noDataText={'No data found'}

            columns={[
              {
                Header: "ID",
                accessor: "id",
                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
              },
              {
                Header: "Login",
                accessor: "login",
                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
              }
            ]}
            className="-striped -highlight"
            defaultPageSize={30}
          />
          <Button className="btn-color next" size="lg" block onClick={this.handleNext.bind(this)}>
            Next
          </Button>
        </div>
      </div>
    );
  }
}