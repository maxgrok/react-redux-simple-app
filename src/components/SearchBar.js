import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ""//search here
        }
    }
    
    render(){
        return (<div>
            <input 
            onChange={this.onInputChange.bind(this)} value={this.state.term} 
            />
            </div>);
    }

    onInputChange(event){
       event.preventDefault();
        this.setState({term: event.target.value})
    }
}

export default SearchBar;
