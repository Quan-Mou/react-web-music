import styled from "styled-components"

export const WrappedRennder = styled.div`
  width:100%;
  height:285px;
  /* overflow:hidden; */
  background-color: pink;
  .content {
    display:flex;
    position:relative;

    .left-arrow ,.right-arrow {
      position:absolute;
      cursor:pointer;
      width: 37px;
      height: 63px;
      top:50%;
      transform:translateY(-50%);
      background: url(${require("@/assets/img/banner_sprite.png")});
      :hover {
        background-color: rgba(0,0,0,.1);
      }
    }
    .left-arrow {
      
      left:-67px;
      background-position: 0 -360px;
    }
    .right-arrow {
      right:-67px;
      background-position: 0 -508px;
    }
  }
  

`

export const BannerLeft = styled.div`
  width:730px;
  height:285px;
  .item {
    /* height:285px; */
    background-color: blue;
    img {
      width:100%;
      height:285px;
      background-size:cover;
      cursor:pointer;
    }
  }

`

export const BannerRight = styled.div`
  flex:1;
  .download {
    display: block;
    width:100%;
    height:100%;
    background: url(${require("@/assets/img/download.png")});
    background-color: transparent;
  }
`