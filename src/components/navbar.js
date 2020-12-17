import React from 'react';

function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark main-navbar">
        <div class="container-fluid">
            <form className="form-inline ml-4">
                <input className="form-control search-bar" type="search" placeholder="Search" aria-label="Search"/>
                {/* <button className="btn btn-success btn-sm" type="submit">Search</button> */}
            </form>
            <ul class="nav navbar-nav navbar-right navbar-expand-sm">
                <li class="m-2"><i class="fa fa-fw fa-bell fa-lg nav-icon"></i></li>
                <li class="m-2"><i class="fa fa-fw fa-envelope fa-lg nav-icon"></i><span class="badge badge-pill badge-primary">New</span></li>
                <li class="m-2"><i class="fa fa-fw fa-user fa-lg nav-icon"></i></li>
                <li class="mx-2"><img src="/images/pic.jpg" height="40px" width="40px" alt="" class="rounded-circle"></img><i class="fa fa-fw fa-caret-down fa-lg nav-icon"></i></li>
            </ul>
        </div>
    </nav>
    </>
  );
}

export default Navbar;