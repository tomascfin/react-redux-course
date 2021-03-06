import React, { Component } from 'react';

// version functional component
/*const SearchBar = () => {
    return <input />
};*/

//version class component
class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term : ''};

    }
    render(){
        //return <input onChange={(event) => console.log(event.target.value)}/>;
        return (
            <div>
            <input
                value = {this.state.term}
                onChange={event => this.setState({term: event.target.value})}/>
            </div>
        );
    }


}

export default SearchBar;