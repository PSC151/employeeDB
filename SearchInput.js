import React from "react";

function SearchInput(props){
     return <input type="text" placeholder="Enter Last Name" onChange={props.handleSearchChange}></input>
}

export default SearchInput;