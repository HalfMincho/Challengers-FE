import React from 'react';
import styled from 'styled-components';
import { HiOutlineSearch } from "react-icons/hi";

const HeaderBlock = styled.div`  
  nav {
    padding-top: 41px;
    padding-right: 170px;
    padding-bottom: 23px;
    padding-left: 170px;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    width: 100%;

    border-bottom: 1px solid #ced4da;

    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
  }

  .navbar__left-side {
    display: flex;
    padding: 16px 0px 16px 0px;
  }
  a {
    margin-right: 50px;
  }
  .navbar__logo_img {
    width: 120px;
    padding-top: 3px;
  }
  .navbar__search {
    display: flex;
    background: #f1f3f5;
    border-radius: 2em;
  }
  
  input {
    box-sizing: border-box;
    width: 400px;
    height: 45px;
    padding: 12px 150px 12px 20px;
    background-color: #f1f3f5;
    outline: none;
    border: none;
    border-radius: 2em;
  }

`;

const HeaderSearchIcon = styled.div`
  box-sizing: border-box;
  padding: 10px 18px 10px;
  font-size: 20px;

  cursor: pointer;
`;


function Header() {
  return (
    <>
    <HeaderBlock>
      <nav>
        <div className="navbar__left-side">
          <div className="navbar__logo">
            <a href="">
              <img className="navbar__logo_img" src="/mainLogo.png"></img>
            </a>
          </div>
          <div className="navbar__search">
            <input type="search" placeholder="어떤 습관을 가지고 싶으신가요?" />
            <HeaderSearchIcon><HiOutlineSearch /></HeaderSearchIcon>
          </div>
        </div>
        <div className="navbar__right-side">
          <button className="makeChallenge">
            <span>챌린지 개설하기</span>
          </button>
          <button className="login">
            <span>로그인</span>
          </button>
        </div>
      </nav>        
    </HeaderBlock>
    </>
    
  )
}

export default Header;