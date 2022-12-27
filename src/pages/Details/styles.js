import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerOne = styled.div`
    div.containerLight {
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }
    div.containerDark {
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
  }
`

export const ContainerTwo = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: 104px auto 77px;
  @media (max-width: 600px) {
    grid-template-rows: 150px auto 77px;
  }
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
  main.light {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }
  main.dark {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
  }
`;

export const ButtonText = styled(Link)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
 .svgDark {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .svgLight {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}
  
  .light {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: bold;
  }
  .dark {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;


export const Main = styled.main`
  grid-area: content;
  padding: 0 125px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  animation: scale 1s;
  overflow-y: scroll;
  height: 100%;
  @media (max-width: 600px) {
  padding: 0px;
  width: 600px;
  gap: 10px;
 }
 .details {
  display: flex;
  gap: 30px;
  @media (max-width: 600px) {
  flex-direction: column;
 }
 }
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
  .textDetails {
    @media (max-width: 600px) {
  margin-bottom: 50px;
 }
    width: 550px;
  .h1Dark {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 8px;
  }
  .h1Light {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 8px;
  }
  .pDark {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .pLight {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
  }
}
  .ingredients {
    display: flex;
    align-items: end;
    gap: 16px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
    .Dark{
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
    .Light{
    color: ${({ theme }) => theme.COLORS.BACKGROUND_1100};
  }
    margin-bottom: 45px;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }
  .finishBuy {
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 50px;
    padding-right: 160px;
  }
  .priceDark {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }
  .priceLight {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .amount{
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .image {
    border-radius: 50%;
    width: 350px;
    height: 350px;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 18px;
    height: 18px;
  }
  .none {
    display: none;
  }
`;