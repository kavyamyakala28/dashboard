import React from 'react'
import './Header.css';



const Header = () => {

    return (
        <header className='header'>
            <div className="left-section">
                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#">Option 1</a>
                        <a href="#">Option 2</a>
                        <a href="#">Option 3</a>
                    </div>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Search" />
                    <button type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </div>
                <div className='add-button'>
                    <button><i className='fas fa-plus'></i>  Add New</button>
                </div>
            </div>
            <div className="right-section">
                <div className="notification-icon">
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div className="user-icon">
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>
        </header>
    );
}

export default Header;