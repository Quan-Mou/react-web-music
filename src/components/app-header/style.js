import styled from "styled-components"

export const WrappedDiv = styled.div`
  width:100%;
  height:75px;
  background-color:#242424;
  .wraper-content {
    height:70px;
    display:flex;
    justify-content:space-between;
    /* align-items:center; */
  }
  .red-line {
    background-color:#c20c0c;
    height:5px;
  }
`

export const HeaderLeft = styled.div`
  display:flex;
  .header-logo {
     display: block;
     width: 176px;
     height: 69px;
     background-position:0 0;
  }
  .music-list {
    display:flex;
    line-height:70px;
    font-size:14px;
    .selector-item {
      position:relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      a.active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
      
    }
    
  }
      
 
`
export const HeaderRight = styled.div`
  display:flex;
  align-items:center;
  font-size: 12px;
  
  .input {
    width: 158px;
    height:32px;
    border-radius:20px;
    input {
      ::placeholder {
      font-size:12px;
      }
    }
  }
  
  .author {
    width:90px;
    height:32px;
    background-color:transparent;
    color:rgba(255,255,255,.8);
    border-radius:35px;
    border: 1px solid hsl(0deg 0% 31%);
    margin-left:12px;
  }
  .login {
    color:#787878;
    margin-left:12px;
  }

`