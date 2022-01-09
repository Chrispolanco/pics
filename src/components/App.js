import React from 'react'; 
import axios from 'axios'; 
import SearchBar from './SearchBar';

class App extends React.Component{
    async onSearchSubmit(term){
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term}, 
            headers: {
                Authorization: 'Client-ID iFcvSnS8HyB6wTq1UWfZx91kamMY6lockJ3g1mFIUX8'
            }
        }); 
        
        console.log(response.data.results); 
    }

    render(){
        return (
            <div className='ui container' style = {{marginTop: '20px'}}>
                <SearchBar onSubmit = {this.onSearchSubmit}/>
            </div>
        ); 
    }
}

export default App; 
