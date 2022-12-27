import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;
  height: 104px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;;
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
      color: ${({theme}) => theme.COLORS.WHITE_200};
      font-weight: bold;
      font-size: 25px;
    }
  }
  .adm{
    display: flex;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color:  ${({theme}) => theme.COLORS.GRAY_300};
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  padding-left: 37px;
  svg {
    color: ${({theme}) => theme.COLORS.WHITE_200};
    width: 22px;
    height: 22px;
  }
`;
