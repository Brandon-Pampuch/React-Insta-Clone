import React from 'react'
import '../global-styles/global.scss'
import './SearchBar.scss'

const SearchBar = (props) =>{
    

    return(
        <div className="search-bar">
            <div>
                <i className="fab fa-instagram search-bar__icon search-bar__icon--padding-right "></i>
                <img className="search-bar__search-logo"  src="http://www.logospng.com/images/15/instagram-logo-large-390x130-jonathan-jeter-15681.png" alt="search bar"></img>
            </div>
            <input type="text" placeholder="search"></input>
            <div>
                <i className="far fa-compass search-bar__icon"></i>
                <i className="far fa-heart search-bar__icon"></i>
                <i className="far fa-user search-bar__icon"></i>
            </div>

        </div>
    )   
}


export default SearchBar