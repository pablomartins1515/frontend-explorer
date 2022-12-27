import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px 50px auto 77px;
  grid-template-areas: "header" "back" "content" "footer";
`;

export const ButtonText = styled(Link)`
  margin-left: 125px;
  margin-top: 50px;
  width: 100px;
  grid-area: back;  
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  svg {
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;

export const Main = styled.main`
  grid-area: content;
  padding: 0 125px;
  display: flex;
  align-items: center;
  gap: 50px;
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
  .textDetails {
    width: 550px;
  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;
    margin-bottom: 8px;
  }
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
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
    color: ${({ theme }) => theme.COLORS.WHITE_100};
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
  .price {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
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
  img {
    border-radius: 50%;
  }
  .image {
    width: 350px;
    height: 350px;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    width: 18px;
    height: 18px;
  }
  .button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        gap: 10px;
        transition: transform 0.5s;
        svg {
          width: 30px;
          height: 30px;
          color: ${({ theme }) => theme.COLORS.GRAY_400};
        }
      
      }
      .button:hover {
          transform: scale(1.2)
      }
`;