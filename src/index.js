import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBMi2WxWc85_c4fMiZC8YL1YQjuph80-1M';


const App =  ()  => {
    return ( <div>
    <SearchBar/>
    </div>
    );
}


ReactDOM.render(<App/>, document.querySelector('.container'));