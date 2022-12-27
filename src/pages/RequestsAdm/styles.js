import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  width: 100%;
  overflow-y: auto;
  h1{
    padding: 0 125px;
    margin: 15px 0;
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
  }
  table{
    border-radius: 10px 10px 0 0;
    margin: 0 125px;
    text-align: left;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    border-spacing: 0px;
    border-left: none;
    border-bottom: none;
    margin-bottom: 80px;
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
  thead tr th:first-child {
    border-radius: 10px 0 0 0;
    padding: 20px;
  }
  thead tr th {
    white-space: nowrap;
    text-align: left;
    padding: 20px 100px 20px 20px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    }
    tbody tr td:first-child {
      white-space: nowrap;
    }
    tbody tr td {
    position: relative;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    background: transparent;
    width: 100%;
    height: 100%;
    padding: 20px;
    border-top: none;
    border-right: none;
    font-family: 'Roboto';  
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    select {
      background-color: transparent;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      color: white;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      text-align: left;
      font-family: 'Roboto';
      font-weight: 400;
      font-size: 14px;
    }
    option {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_600};   
    }
    }
    button {
    position: absolute;
    margin-left: 20px;
    margin-top: -5px;
    background-color: ${({theme}) => theme.COLORS.RED_200};
    color: ${({theme}) => theme.COLORS.WHITE_200};
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
}
`;

export const ButtonText = styled(Link)`
  margin-left: 125px;
  margin-top: 24px;
  width: 100px;
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

