import styled from 'styled-components'

export const Container = styled.header`
 .favoritesDark{
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  @media (max-width: 600px) {
  margin-left: 65px;
  margin-top: 0px;
 }
 }
 .favoritesLight{
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  @media (max-width: 600px) {
  margin-left: 65px;
  margin-top: 0px;
 }
 }
 .dark {
  @media (max-width: 600px) {
  padding: 0px;
  height: 150px;
  width: 600px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 }
  grid-area: header;
  height: 104px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0 125px;
  white-space: nowrap;
  animation: topdown 1s;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
 }
 .light {
  @media (max-width: 600px) {
  padding: 0px;
  height: 150px;
  width: 600px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
 }
  grid-area: header;
  height: 104px;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0 125px;
  white-space: nowrap;
  animation: topdown 1s;
  background-color: ${({ theme }) => theme.COLORS.WHITE_200};
 }
  a{
    color: ${({theme}) => theme.COLORS.WHITE_200};
  }
  .gap {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    .hexagonDark {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      min-width: 29.2px;
      min-height: 29.2px;
      @media (max-width: 600px) {
        position: absolute;
        left: 10px;
        top: 10px;
      }
    }
    .hexagonLight{
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      min-width: 29.2px;
      min-height: 29.2px;
      @media (max-width: 600px) {
        position: absolute;
        left: 10px;
        top: 10px;
      }
    }
    .spanDark {
      font-family: 'Roboto';
      color: ${({theme}) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 25px;
      @media (max-width: 600px) {
        font-size: 0px;
      }
    }
    .spanLight {
      font-family: 'Roboto';
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
      font-weight: bold;
      font-size: 25px;
      @media (max-width: 600px) {
        font-size: 0px;
      }
    }
  }
  .buttons {
    display: flex;
    gap: 10px;
  }
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
  .none {
    display: none;
  }

  .searchAlert {
    position: absolute;
    background: ${({theme}) => theme.COLORS.BLUE_100};
    font-family: 'Roboto';
    color: ${({theme}) => theme.COLORS.WHITE_200};
    font-weight: bold;
    font-size: 16px;
    right: 30px;
    top: 105px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 120px;
    white-space: normal;
    padding: 10px;
    text-align: center;
    border-radius: 0px 0 8px 8px;
    animation: leftAlert 1s;
    @media (max-width: 600px) {
        display: none;
      }
  }
  .svgAlert {
    width: 50px;
    height: 50px;
  }
  @keyframes leftAlert {
    0% {
        opacity: 0;
        height: 0;
      }

      100% {
        opacity: 1;
        height: 120px;
      }
    }
    .statePage {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    scale: 1.5;
    transition: all 0.5s;
  }
  .statePage:hover {
    scale: 2.0;
    filter: brightness(0.8);
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 10px;
  .LogoutDark {
    color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    width: 22px;
    height: 22px;
  }
  .LogoutLight {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
  
`;