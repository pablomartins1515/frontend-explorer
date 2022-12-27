import styled from 'styled-components'

export const Container = styled.div`
  main.light {
    background: ${({ theme }) => theme.COLORS.GRAY_100};
    
  }
  main.dark {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
  }
  main{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-width: 600px;
  }
}
  
  header {
    .statePage {
    position: fixed;
    right: 30px;
    top: 30px;
    scale: 2.5;
  }
  .statePage:hover {
    scale: 2.8;
  }
    margin-left: 150px;
    display: flex;
    align-items: center;
    gap: 19px;
    .h3Dark{
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
  .h3Light{
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 42px;
    line-height: 50px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
    @media (max-width: 600px) {
      margin-left: 0;
  }
    .svgDark {
      color: ${({ theme }) => theme.COLORS.BLUE_100};
      min-width: 50px;
      min-height: 50px;
    }
    .svgLight {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      min-width: 50px;
      min-height: 50px;
    }
  }
  .divDark{
    margin-right: 108px;
    border-radius: 16px;
    width: 476px;
    height: 600px;
    padding: 64px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  }
  .divLight{
    margin-right: 108px;
    border-radius: 16px;
    width: 476px;
    height: 600px;
    padding: 64px;
    background: ${({ theme }) => theme.COLORS.WHITE_200};
  }
    .h1Dark{
      margin-bottom: 32px;
      text-align: center;
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 32px;
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
    .h1Light{
      margin-bottom: 32px;
      text-align: center;
      font-family: 'Poppins';
      font-weight: bold;
      font-size: 32px;
      line-height: 24px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
    .linkDark{
      font-family: 'Poppins';
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      margin-top: 20px;
    }
    .linkLight{
      font-family: 'Poppins';
      font-weight: bold;
      font-size: 14px;
      line-height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      margin-top: 20px;
    }
    .input{
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 30px;
      .labelDark {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color:  ${({ theme }) => theme.COLORS.GRAY_300};
      }
      .labelLight {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 100%;
        color:  ${({ theme }) => theme.COLORS.BACKGROUND_800};
      }
      .inputDark{
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        background: transparent;
        border-radius: 5px;
        padding: 16px;
        height: 50px;
        color: ${({ theme }) => theme.COLORS.WHITE_200};
      }
      .inputLight{
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_900};
        background: transparent;
        border-radius: 5px;
        padding: 16px;
        height: 50px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      }
    }
  
`;