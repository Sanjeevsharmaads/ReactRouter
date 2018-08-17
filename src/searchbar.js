import React, { Component } from 'react';
import './App.css';
import { SearchBar } from 'react';

class searchbar extends Component { 
  render() {
    return (
      <div>
       <SearchBar
  placeholder='Type Here...' />

<SearchBar
  clearIcon={{ color: 'red' }}
  placeholder='Type Here...' />

      </div>


    );
  }

}

export default searchbar;