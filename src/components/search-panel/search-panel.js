import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component  {

    state = {
        term: ""
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render (){
        const searchText = 'Type here to search';

        return (
        <input type ="text"
        onChange={this.onSearchChange}
        className="form-control search-input" 
        placeholder={searchText}
        value={this.state.term} />
    );
    }
};
