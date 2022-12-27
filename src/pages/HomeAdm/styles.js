import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Links = styled(Link)`
      padding: 2px 10px;
      display: flex;
      margin-left: -10px;
      border-left: none;
      font-style: italic;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas: "header" "content" "footer";
  main::-webkit-scrollbar {
  width: 20px;
  }
  main::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  main::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 20px;
  width: 1px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 5px solid rgba(0, 0, 0, 0);
  }
  main {
    width: 100%;
    grid-area: content;
    overflow: auto;
    
  .none {
    display: none;
  }
  #title{
    padding: 48px 125px 40px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    animation: right 1s;
  @keyframes right {
      0% {
        opacity: 0;
        transform: translateX(30px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
  }
  .logoHome {
    margin: 0 auto;
    margin-top: 80px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    width: 1120px;
    height: 260px;
    display: flex;
    animation: left 1s;
  @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(-30px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
    img {
      margin-top: -50px;
      margin-left: -40px;
    }
    .addFoods{
    display: flex;
    gap: 8px;
    white-space: nowrap;
    align-items: center;
    span{
      border-radius: 10px 0 0 0;
      margin-left: 600px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      padding: 4px 10px;
    }
    a{
      padding: 4px 10px;
      display: flex;
      margin-left: -10px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      border-left: none;
      font-style: italic;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    a:last-child{
      border-radius: 0 10px 10px 0;
    }
  }
    .requests{
      border-radius: 0 0 10px 10px;
      padding: 4px 10px;
      display: flex;
      margin-left: 600px;
      margin-top: -9px;
      font-style: italic;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      border-top: none;
      
  }
  }
  .logoText{
    margin-left: -500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
    justify-content: center;
    white-space: nowrap;
  
  
  h1 {
      margin-left: 600px;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    p {
      margin-left: 600px;
      font-family: 'Poppins';
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
    }
  }
  .container {
    position: relative;
    margin: 0px 125px;
    height: 512px;
    animation: scale 1s;
 @keyframes scale {
      0% {
        opacity: 0;
        transform: scale(1.2)
      }
      100% {
        opacity: 1;
        transform: scale(1.0)
      }
    }
    .arrowOne{
      width: 80px;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_000};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
      cursor: pointer;
      width: 40px;
      height: 40px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    button {
      background: none;
      border: none;
      transition: transform 1s;
    }
    button:hover {
      transform: scale(1.5);
    }
    }
    .arrowTwo{
      position: absolute;
      width: 80px;
      right: 0;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_300};
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    button {
      background: none;
      border: none;
      transition: transform 1s;
    }
    button:hover {
      transform: scale(1.5);
    }
    }
  }
  .container:last-child{
    margin-bottom: 60px;
  }
  }
    .listFood{
      display: flex;
      overflow-x: hidden;
      scroll-behavior: smooth;
      width: 100%;
  }
  .listFoods{
    display: flex;
    flex-direction: row;
    gap: 27px;
    .cardFood{
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      width: 300px;
      height: 512px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2{
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        svg {
          width: 30px;
          height: 30px;
        }
      }
      p{
        width: 220px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        margin: 18px auto 0px;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_300};

        display: -webkit-box;
        text-overflow: ellipsis; 
        overflow: hidden; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
      }
      img {
        border-radius: 50%;
        width: 176px;
        height: 176px;
        margin: 30px 62px 16px 62px;
      }
      .button {
        margin-top: 20px;
        background: none;
        border: none;
        svg {
          width: 30px;
          height: 30px;
          color: ${({ theme }) => theme.COLORS.GRAY_400};
          transition: transform 0.5s;
        }
      svg:hover {
          transform: scale(1.5)
      }
      }
      svg {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        width: 18px;
        height: 18px;
    }
    .price {
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 32px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BLUE_200};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    
  }
  
  }

`;

export const Header = styled.header`
  grid-area: header;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 125px;
  white-space: nowrap;
  animation: topdown 1s;
  @keyframes topdown {
      0% {
        opacity: 0;
        transform: translateY(-20px)
      }
      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }
  a{
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .gap {
    display: flex;
    width: 800px;
    align-items: center;
    gap: 32px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 11px;
    padding-right: 37px;
    svg {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      width: 29.2px;
      height: 29.2px;
    }
    span {
      font-family: 'Roboto';
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 25px;
    }
  }
  .buttons {
    display: flex;
    gap: 20px;
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 37px;
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
`;

export const Input = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 16px;
  input {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    padding-left: 16px;
    width: 100%;
    background: transparent;
    border: none;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    width: 19.5px;
    height: 19.5px;
  }
`;