import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import ReactTable from 'react-table';
import { Button } from 'react-bootstrap';

import "react-table/react-table.css";

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            data: [],
            message: 'Search'
        };
    }
    changeField(fieldName, event) {
        console.log(event.target.value);
        var field = {};
        field[fieldName] = event.target.value;
        this.setState(field);
    }

    async handleSearch(event) {
        let res = await fetch(`http://localhost:8000/api/users/${this.state.user}/details`).then((response) => {
            return response.json();
        });
        if(res.message !=='Not Found'){
            this.setState({
                data: [{
                    id : res.id,
                    login: res.login,
                    url: res.html_url,
                    created_at: res.created_at,
                }]
            })
        }
        this.setState({
            message: 'Not Found'
        })
        console.log(res);
    }

    render() {
        return (
            <div>
                <h1 className="center">User Details</h1>
                <div className="rt-margin">
                    <div className="mb-3 input-group">
                        <input value={this.state.user} id="user" name="user" placeholder="Search for an username" aria-label="Search for an username" aria-describedby="basic-addon2" className="form-control" onChange={this.changeField.bind(this, 'user')} />
                        <div className="input-group-append">
                            <Button className="btn-color next" block onClick={this.handleSearch.bind(this)}>
                                Search
                            </Button>
                        </div>
                    </div>
                    <ReactTable
                        showPageSizeOptions={false}
                        showPagination={false}
                        showPageJump={false}
                        data={this.state.data}
                        noDataText={this.state.message}

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
                            },
                            {
                                Header: "URL",
                                accessor: "url",
                            Cell: row => <div style={{ textAlign: "center" }}>{<a href={row.value}>{row.value}</a>}</div>
                            },
                            {
                                Header: "Creation At",
                                accessor: "created_at",
                                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
                            }
                        ]}
                        className="-striped -highlight"
                        defaultPageSize={1}
                    />
                </div>
            </div>
        );
    }
}