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
  grid-template-rows: 104px auto 77px;
  @media (max-width: 600px) {
    grid-template-rows: 150px auto 77px;
  }
  overflow: hidden;
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
  main {  
    grid-area: content;
    width: 100%;
    overflow-y: auto;
    padding: 0 125px;
    @media (max-width: 600px) {
    height: 100%;
    min-width: 600px;
    padding: 0;
  }
  .h1Dark{
    margin: 34px 0;
    animation: left 1s;
  }
  .h1Light{
    margin: 34px 0;
    animation: left 1s;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  }
  @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(-20px)
      }
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
  .tableDark{
    border-radius: 10px 10px 0 0;
    width: 100%;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    border-spacing: 0px;
    border-left: none;
    border-bottom: none;
    margin-bottom: 80px;
    animation: scale 1s;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    @media (max-width: 600px) {
    max-width: 600px;
  }
}
  .tableLight{
    border-radius: 10px 10px 0 0;
    width: 100%;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_200};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
    background: transparent;
    border-spacing: 0px;
    border-left: none;
    border-bottom: none;
    margin-bottom: 80px;
    animation: scale 1s;
    @media (max-width: 600px) {
    max-width: 600px;
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
  thead tr th:first-child {
    border-radius: 10px 0 0 0;
    padding: 20px;
    @media (max-width: 600px) {
    padding: 0;
  }
  }
  .thDark {
    white-space: nowrap;
    text-align: left;
    padding: 20px 200px 20px 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    @media (max-width: 600px) {
    padding:  20px 5px;
    font-size: 12px;
  }
    }
    .thLight {
    white-space: nowrap;
    text-align: left;
    padding: 20px 200px 20px 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_200};
    background: transparent;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    @media (max-width: 600px) {
    padding:  20px 5px;
    font-size: 12px;
  }
    }
    tbody tr td:first-child {
      white-space: nowrap;
      @media (max-width: 600px) {
        white-space: normal;
  }
    }
    .tdDark {
    position: relative;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    padding: 20px;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';  
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
  .tdLight {
    position: relative;
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE_200};
    background: transparent;
    padding: 20px;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';  
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
    @media (max-width: 600px) {
        font-size: 12px;
        padding: 5px;
  }
    
    button {
    position: absolute;
    margin-left: 120px;
    margin-top: -5px;
    background-color: ${({ theme }) => theme.COLORS.RED_200};
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    height: 30px;
    padding: 0 10px;
    border: 0;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 500;
    font-family: 'Poppins';
    gap: 8px;
  svg {
    position: absolute;
    margin-left: 40px;
    margin-top: -20px;
    width: 26px;
    height: 22px;
  }
  }
  .none {
    display: none;
  }
}

`;

export const ButtonText = styled(Link)`
  margin-top: 50px;
  width: 300px;
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  @media (max-width: 600px) {
    margin-left: 0;
  }
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




