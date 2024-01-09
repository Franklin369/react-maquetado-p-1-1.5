import styled from "styled-components";
import { LinksSidebar, reu } from "../../utils/dataEstatica";
import { useThemeStore } from "../../index";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Sidebar1({state,setState}) {
  const { setTheme, theme } = useThemeStore();
  return (
    <Container className={state ? "sidebar" : "sidebar close"}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={reu.logoreact} alt="" />
          </span>
          <div className="text logo-text">
            <span className="name">Codinglab</span>
            <span className="profession">Web developer</span>
          </div>
        </div>
        <span onClick={() => setState(!state)} className="toggle">
          {" "}
          {<reu.iconoflechaderecha />}
        </span>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <li className="search-box">
            <i className="bx bx-search icon">{<reu.iconosearch />}</i>
            <input type="text" placeholder="Search..." />
          </li>

          {LinksSidebar.map((item, index) => {
            return (
              <Linksidebar className="nav-link" key={index}>
                <NavLink className={({isActive})=>`Links${isActive?` active`:``}`} to={item.to}>
                  <span className="icon">{item.icono}</span>
                  <span className="text nav-text">{item.label}</span>
                </NavLink>
              </Linksidebar>
            );
          })}
        </div>
        <div className="bottom-content">
          <li className="">
            <a href="#">
              <span className="bx bx-log-out icon">{<reu.iconologout />}</span>
              <span className="text nav-text">Logout</span>
            </a>
          </li>
          <li className="mode">
            <div className="sun-moon">
              <i className="bx bx-moon icon moon"></i>
              <i className="bx bx-sun icon sun"></i>
            </div>
            <span className="mode-text text">Dark mode</span>
            <div className="toggle-switch">
              <span
                className={theme === "light" ? "switch" : "switch dark"}
                onClick={setTheme}
              ></span>
            </div>
          </li>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.nav`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bodycolor};
 
  &::selection {
    background-color: ${({ theme }) => theme.primarycolor};
    color: #fff;
  }
  &.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 250px;
    padding: 10px 14px;
    background: ${({ theme }) => theme.sidebarcolor};
  
    z-index: 100;
  }

  &.sidebar.close {
    width: 60px;
  }
  /* ===== Reusable code - Here ===== */
  &.sidebar li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  &.sidebar header .image,
  &.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
  }
  &.sidebar .icon {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  &.sidebar .text,
  &.sidebar .icon {
    /* color: ${({ theme }) => theme.textcolor}; */

    transition: all 0.2s ease;
  }
  &.sidebar .text {
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
  }
  &.sidebar.close .text {
    opacity: 0;
  }
  /* =========================== */
  &.sidebar header {
    position: relative;
  }
  &.sidebar header .image-text {
    display: flex;
    align-items: center;
  }
  &.sidebar header .logo-text {
    display: flex;
    flex-direction: column;
  }
  header{
    color: ${({ theme }) => theme.textcolor}; 
  }
  header .image-text .name {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 600;
  }
  header .image-text .profession {
    font-size: 16px;
    margin-top: -2px;
    display: block;
  }
  &.sidebar header .image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &.sidebar header .image img {
    width: 40px;
    border-radius: 6px;
  }
  &.sidebar header .toggle {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: ${({ theme }) => theme.primarycolor};
    color: ${({ theme }) => theme.sidebarcolor};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  body.dark &.sidebar header .toggle {
    color: ${({ theme }) => theme.textcolor};
  }
  &.sidebar.close .toggle {
    transform: translateY(-50%) rotate(0deg);
  }
  &.sidebar .menu {
    margin-top: 40px;
  }
  .search-box{
    color: ${({ theme }) => theme.textcolor}; 
  }
  &.sidebar li.search-box {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.primarycolorlight};

    cursor: pointer;
    transition: all 0.2s ease;
  }
  &.sidebar li.search-box input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.primarycolorlight};
    color: ${({ theme }) => theme.textcolor};
    border-radius: 6px;
    font-size: 17px;
    font-weight: 500;
    transition: all 0.2s ease;
  }
  &.sidebar li a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.2s ease;
  }
  &.sidebar li a:hover {
    background-color: ${({ theme }) => theme.primarycolor};
  }
  &.sidebar li a:hover .icon,
  &.sidebar li a:hover .text {
    color: ${({ theme }) => theme.sidebarcolor};
  }
  body.dark &.sidebar li a:hover .icon,
  body.dark &.sidebar li a:hover .text {
    color: ${({ theme }) => theme.textcolor};
  }
  &.sidebar .menu-bar {
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
  }
  .menu-bar::-webkit-scrollbar {
    display: none;
  }
  &.sidebar .menu-bar .mode {
    border-radius: 6px;
    background-color: ${({ theme }) => theme.primarycolorlight};
    position: relative;
    transition: all 0.2s ease;
  }
  .menu-bar .mode .sun-moon {
    height: 50px;
    width: 60px;
  }
  .mode .sun-moon i {
    position: absolute;
  }
  .mode .sun-moon i.sun {
    opacity: 0;
  }
  body.dark .mode .sun-moon i.sun {
    opacity: 1;
  }
  body.dark .mode .sun-moon i.moon {
    opacity: 0;
  }
  .bottom-content{
    span{
      color: ${({ theme }) => theme.textcolor}; 
    }
  }
  .menu-bar .bottom-content .toggle-switch {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
  }
  .toggle-switch .switch {
    position: relative;
    height: 22px;
    width: 40px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.togglecolor};

    transition: all 0.2s ease;
  }
  .switch::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.sidebarcolor};
    transition: var(--tran-04);
  }
  .dark::before {
    left: 20px;
  }
  .home {
    position: absolute;
    top: 0;
    top: 0;
    left: 250px;
    height: 100vh;
    width: calc(100% - 250px);
    background-color: ${({ theme }) => theme.bodycolor};
    transition: all 0.2s ease;
  }
  .home .text {
    font-size: 30px;
    font-weight: 500;
    color: ${({ theme }) => theme.textcolor};
    padding: 12px 60px;
  }
  &.sidebar.close ~ .home {
    left: 78px;
    height: 100vh;
    width: calc(100% - 78px);
  }
  body.dark .home .text {
    color: ${({ theme }) => theme.textcolor};
  }
`;
const Linksidebar =styled.li`
  .Links{
     color: ${({ theme }) => theme.textcolor}; 
    &.active{
      background-color:${({ theme }) => theme.primarycolor};
      color:#fff;
    }
  }
`
