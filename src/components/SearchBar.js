import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: "" //search term here
        }
    }
    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }

    render(){
        return (<div className="search-bar">
            <input 
            onChange={(e)=>this.onInputChange(e.target.value)}
            value={this.state.term} 
            />
            </div>);
    }
}

export default SearchBar;
