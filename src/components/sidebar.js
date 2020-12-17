import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom'
import bars from "../icons/bars.svg";
import '../css/dropdown.css'

const Sidebar = ({menuitems}) => {
  const [isMin, setIsMin] = useState(false);

  return (
    <div className={`main-sidebar ${isMin && "minimized"}`}>
        <span className="logo">
            <img className= "" src={bars} onClick={() => setIsMin(!isMin)}/>
            {!isMin && <a className="" href="#"> Expert System</a>}
        </span>
        <SideNav menuitems={menuitems} isMin={isMin}/>
    </div>
  );
}

const SideNav = ({menuitems, isMin}) => {
  const [activeLink, setActiveLink] = useState(null);
  const children = MapSidebarItems(menuitems, activeLink, setActiveLink, isMin, `root ${isMin && "root-min"}`)

  return (
    <nav>{children}</nav>
  )
}

const SideNavLink = ({menuitem, activeLink, setActiveLink, isMin}) => {
  const linkClass = menuitem.link === activeLink ? "list-item-active" : "list-item"
  return (
    <li>
      <Link className={linkClass} to="/master" onClick={() => setActiveLink(menuitem.link)}>
        <i className={menuitem.icon}/> {!isMin && menuitem.label}
      </Link>
    </li>
  )
}

const SideNavItem = ({menuitem, activeLink, setActiveLink, isMin}) => {
  const [isOpen, setIsOpen] = useState(false);
  const children = !isMin ? MapSidebarItems(menuitem.items, activeLink, setActiveLink)
      : <NavDropdown node={menuitem.items} activeLink={activeLink} setActiveLink={setActiveLink} setIsOpen={setIsOpen} />
  const classNames = !isMin ? "node" : "navdropdown"
  //useEffect(() => setIsOpen(false), [isMin])
  useEffect(() => {if(isMin) setIsOpen(false)}, [activeLink])

  return (
    <li className={isMin && "list-item-relative"}>
      <span className="list-item" onClick={() => setIsOpen(!isOpen)}>
        <i className={menuitem.icon} /> {!isMin && menuitem.label}
        {!isMin && <span className={`list-drop-down-arrow ${isOpen && "list-drop-down-arrow-active"}`}>&#8250;</span>}
      </span>
      <CSSTransition in={isOpen} unmountOnExit classNames={classNames} timeout={200}>
        {children}
      </CSSTransition>
    </li>
  )
}

const NavDropdown = ({node, activeLink, setActiveLink, setIsOpen}) => {
  const dropdownRef = useRef(null)
  const children = MapSidebarItems(node, activeLink, setActiveLink, false, "sidebar-dropdown-root")

  useEffect(() => {dropdownRef.current.focus();}, [])

  return (
      <div className="sidebar-dropdown" ref={dropdownRef} tabIndex={0} onMouseLeave={() => setIsOpen(false)} onBlur={() => setIsOpen(false)} >
          {children}
      </div>
  )
}

const MapSidebarItems = (SidebarNode, activeLink, setActiveLink, isMin, classNames) => (
  <ul className={classNames}>
    {(SidebarNode || []).map((menuitem) => (
      menuitem.link 
        ? <SideNavLink  key={menuitem.id} menuitem={menuitem} activeLink={activeLink} setActiveLink={setActiveLink} isMin={isMin} />
        : <SideNavItem key={menuitem.id} menuitem={menuitem} activeLink={activeLink} setActiveLink={setActiveLink} isMin={isMin}/>
    ))}
  </ul>
)

export default Sidebar;