import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../App.css';
import ReactTable from 'react-table';
import { Button } from 'react-bootstrap';
import baseUrl from './baseUrl'


import "react-table/react-table.css";

export default class Repositories extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            data: [],
            message: 'Search'
        };
    }
    changeField(fieldName, event) {
        var field = {};
        field[fieldName] = event.target.value;
        this.setState(field);
    }

    async handleSearch() {
        let res = await fetch(`${baseUrl}api/users/${this.state.user}/repos`).then((response) => {
            return response.json();
        });
        if(res.message !=='Not Found'){
            this.setState({
                data: res.map(repo=>{
                    return {
                        id : repo.id,
                        name: repo.name,
                        url: repo.html_url,
                    }
                })
            })
        }
        this.setState({
            message: 'Not Found'
        })
    }

    render() {
        return (
            <div>
                <h1 className="center page-header">User Repositories</h1>
                <div className="rt-margin">
                    <div className="mb-3 input-group">
                        <input value={this.state.user} id="user" name="user" placeholder="Search for a username to get his public repositories" aria-label="Search for a username to get his public repositories" aria-describedby="basic-addon2" className="form-control" onChange={this.changeField.bind(this, 'user')} />
                        <div className="input-group-append">
                            <Button className="btn-color next" block onClick={this.handleSearch.bind(this)}>
                                Search
                            </Button>
                        </div>
                    </div>
                    <ReactTable
                        showPageSizeOptions={false}
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
                                Header: "Name",
                                accessor: "name",
                                Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
                            },
                            {
                                Header: "URL",
                                accessor: "url",
                            Cell: row => <div style={{ textAlign: "center" }}>{<a href={row.value} target="_blank" rel="noopener noreferrer">{row.value}</a>}</div>
                            }
                        ]}
                        className="-striped -highlight"
                        defaultPageSize={10}
                    />
                </div>
            </div>
        );
    }
}