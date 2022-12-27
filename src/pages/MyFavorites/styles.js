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
  .columns {
    display: flex;
    @media (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
}
  }
  .light {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: bold;
  }
  .dark {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-weight: bold;
  }
 
  main {
  grid-area: content;
  padding: 0 125px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  @media (max-width: 600px) {
  height: 100%;
  min-width: 600px;
  flex-direction: column;
  padding: 0;
  gap: 0;
}

.columnTwo:last-child {
  @media (max-width: 600px) {
  margin-bottom: 50px;
}
}
  h1{
    margin: 10px 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
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
  
  }
  .titleDark {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .titleLight {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-weight: bold;
  }

  h2{
    margin-top: 20px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .requests{
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  }
  .request{
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      border-radius: 50%;
      width: 100px;
      height: 100px;
    }
  }
  .text{
    display: flex;
    align-items: center;
  }
  .Text{
    display: flex;
    flex-direction: column;
  .descriptionLight {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .descriptionDark {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.RED_300};
  }
  }
}
`;

export const ButtonText = styled(Link)`
  margin: 30px 0;
  white-space: nowrap;
  width: 300px;
  grid-area: back;  
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
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

