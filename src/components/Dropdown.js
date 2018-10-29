import React from 'react';


const Dropdown = () => {
    
    return (
        <div className="container drop">
        <h2>Dropdown</h2>
 <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Action</a>
    <a className="dropdown-item" href="#">Another action</a>
    <a className="dropdown-item" href="#">Something else here</a>
  </div>
</div>
    
  <div className="dropdown avatarDropdown">
    <img src="http://placehold.it/50x50" alt="avatar image" className="avatar dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="navbar-menu"/>    
  <div className="dropdown-menu" aria-labelledby="navbar-menu">
    <a className="dropdown-item" href="#">Profile</a>
    <a className="dropdown-item" href="#">Dashboard</a>
    <a className="dropdown-item" href="#">Logout</a>
  </div>
</div> 
        
</div>
    
    )
}

export default Dropdown;