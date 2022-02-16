import styled from "styled-components"

export const WrappedHeader = styled.div`

  .content{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:689px;
    height:35px;
    border-bottom:2px solid #c00c0c;
  }
`
export const Left = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  h3 {
    font-size:20px;
    padding-left:35px;
    background: url(${require("@/assets/img/sprite_02.png")});
    background-position: -225px -156px;
  }
  .left-nav {
    margin-left:20px;
    i {
      margin:0 10px;
      color:#cccccc;
    }
  }
`
export const Right = styled.div`
  a {
    display:block;
    background: url(${require("@/assets/img/sprite_02.png")}) no-repeat 0 9999px;
    background-position: 28px -236px;
    padding-right: 29px;
  }
  
`