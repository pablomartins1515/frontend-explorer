import styled from 'styled-components'

export const Container = styled.footer`
@media (max-width: 600px) {
      width: 600px;
  }
  .dark {
  position: absolute;
  bottom: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  grid-area: footer;
  width: 100%;
  height: 77px;
  padding: 0 125px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: downtop 1s;
  @media (max-width: 600px) {
    padding: 0px;
  }
  }
  .light {
  position: absolute;
  bottom: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.COLORS.WHITE_200};
  grid-area: footer;
  width: 100%;
  height: 77px;
  padding: 0 125px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: downtop 1s;
  @media (max-width: 600px) {
    padding: 0px;
  }
  }
  
  
  .logo {
    display: flex;
    align-items: center;
    gap: 11px;
    .darkLogo {
      color: ${({ theme }) => theme.COLORS.COLOR_FOOTER};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 29px;
    }
    .lightLogo {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 29px;
    }
    
    .darkSvg {
      color: ${({ theme }) => theme.COLORS.COLOR_FOOTER};
      width: 29.2px;
      height: 29.2px;
    }
    .lightSvg{
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      width: 29.2px;
      height: 29.2px;
    }
  }
  .darkSpan {
    font-family: 'DM Sans';
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  .lightSpan{
    font-family: 'DM Sans';
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
  @keyframes downtop {
      0% {
        opacity: 0;
        transform: translateY(20px)
      }
      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }
`;