import styled from "styled-components";

export const WrappedDiscover = styled.div`
  .nav-list {
    color:red;
    height:30px;
    background-color:#c20c0c;
  }
`

export const TopMenu = styled.div`
  display:flex;
  align-items:center;
  padding-left: 124px;
  a {
    padding:0 13px;
    margin: 2px 17px 0;
    color:#fff;
    :hover {
      background-color: hsl(0deg 89% 32%);
      border-radius:20px;
      text-decoration:none;
    }
  }
  a.active {
    background-color: hsl(0deg 89% 32%);
    border-radius:20px;
  }
  
  

`