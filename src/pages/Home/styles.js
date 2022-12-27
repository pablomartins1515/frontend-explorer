import styled from 'styled-components'

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
  overflow: hidden;
  width: 100%;
  height: 100vh;
  display: grid;
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

export const Main = styled.main`
    width: 100%;
    height: 100%;
    grid-area: content;
    overflow: auto;
   
    @media (max-width: 600px) {
    margin-bottom: 40px;
    height: 100%;
    width: 600px;
    overflow-x: hidden;
  }
  .searchAlert {
    position: absolute;
    z-index: 3;
    background: ${({theme}) => theme.COLORS.BLUE_100};
    font-family: 'Roboto';
    color: ${({theme}) => theme.COLORS.WHITE_200};
    font-weight: bold;
    font-size: 16px;
    right: 20px;
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
  .none {
    display: none;
  }
  .textDark{
    @media (max-width: 600px) {
      padding: 48px 0px 40px;
  }
    padding: 48px 125px 40px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    animation: left 1s;
  }
  .textLight{
    @media (max-width: 600px) {
      padding: 48px 0px 40px;
  }
    padding: 48px 125px 40px;
    font-family: 'Poppins';
    font-weight: bold;
    font-size: 32px;
    line-height: 140%;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    animation: left 1s;
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
  .logoHomeDark {
    @media (max-width: 600px) {
      width: 600px;
      margin: 100px 0 0 0;
      height: 150px;
  }
    margin: 0 auto;
    margin-top: 80px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_200};
    width: 1120px;
    height: 260px;
    display: flex;
    animation: topdown 1s;
    img {
      @media (max-width: 600px) {
      width: 200px;
      height: 150px;
      margin-top: 0px;
  }
      margin-top: -50px;
      margin-left: -40px;
    }
  }
  .logoHomeLight {
    @media (max-width: 600px) {
      width: 600px;
      margin: 100px 0 0 0;
      height: 150px;
  }
    margin: 0 auto;
    margin-top: 80px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_1200};
    width: 1120px;
    height: 260px;
    display: flex;
    animation: topdown 1s;
    img {
      @media (max-width: 600px) {
      width: 200px;
      height: 150px;
      margin-top: 0px;
  }
      margin-top: -50px;
      margin-left: -40px;
    }
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
  .logoTextDark{
    @media (max-width: 600px) {
    margin-left: -650px;
  }
    margin-left: -500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
    justify-content: center;
    white-space: nowrap;
  h1 {
    @media (max-width: 600px) {
      font-size: 20px;
  }
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
      @media (max-width: 600px) {
    font-size: 14px;
  }
    }
  }
  .logoTextLight{
    @media (max-width: 600px) {
    margin-left: -650px;
  }
    margin-left: -500px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
    justify-content: center;
    white-space: nowrap;
  h1 {
    @media (max-width: 600px) {
      font-size: 20px;
  }
      margin-left: 600px;
      font-family: 'Poppins';
      font-weight: bold;
      font-size: 40px;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
    p {
      margin-left: 600px;
      font-family: 'Poppins';
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      font-weight: 500;
      font-size: 16px;
      line-height: 140%;
      @media (max-width: 600px) {
    font-size: 14px;
  }
    }
  }
  
  .container {
    position: relative;
    display: flex;
    margin: 0px 125px;
    height: 512px;
    animation: scale 1s;
    z-index: 2;
    @media (max-width: 600px) {
      margin: 0;
      width: 600px;
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
    .arrowOneDark{
      position: absolute;
      z-index: 1;
      width: 80px;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_000};
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
    .arrowOneLight{
      position: absolute;
      z-index: 1;
      width: 80px;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_1300};
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
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
    .arrowTwoDark{
      position: absolute;
      z-index: 0;
      width: 80px;
      right: 0;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_300};
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
  .arrowTwoLight{
      position: absolute;
      z-index: 0;
      width: 80px;
      right: 0;
      height: 512px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_1400};
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        cursor: pointer;
        width: 40px;
        height: 40px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
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
  .searchNone {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    align-items: center;
    justify-content: center;
    font-family: 'Poppins';
    font-weight: 700;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    width: 100%;
    height: 512px;
    svg {
      width: 200px;
      height: 200px;
      margin:  0 auto;
    }
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
        margin: 18px auto 0px;
        width: 220px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
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
        margin: 10px 62px 16px 62px;
      }
      svg {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        width: 18px;
        height: 18px;
    }
    .priceDark {
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
    .priceLight {
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 32px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .amountAndButton {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 0 46px;
    }
    .amount{
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Roboto';
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
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
    left: 920px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 440px;
    height: 120px;
    white-space: normal;
    padding: 10px;
    text-align: center;
    border-radius: 0 0 8px 8px;
    animation: topdownalert 1s;
  }
  .svgAlert {
    width: 50px;
    height: 50px;
  }
  @keyframes topdownalert {
      0% {
        opacity: 0;
        transform: translateY(-40px)
      }
      80% {
        transform: translateY(5px)
      }

      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }
    `;