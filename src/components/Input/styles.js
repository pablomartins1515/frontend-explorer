import styled from 'styled-components'

export const Container = styled.div`
@media (max-width: 600px) {
  width: 280px;
 }
 
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 5px;
 
  input.dark{
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    border: none;
    padding: 10px;
    height: 100%;
    transition: all 1s;
    width: 100%;
  }

  input.light{
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    border: none;
    padding: 10px;
    height: 100%;
    transition: all 1s;
    width: 100%;
    border-radius: 5px;
  }
  
  input:focus {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
  }
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    width: 19.5px;
    height: 19.5px;
  }
  button {
    border: none;
    background: none;
    height: 100%;
    width: 50px;
    border-left: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_400};
    transition: all 1s;
    border-radius: 0 5px 5px 0;
  }

  button:hover {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
  .searchResults{
    position: absolute;
    z-index: 4;
    top: 76px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    border-radius: 5px 5px 10px 10px;
    padding: 10px 10px 10px 10px;
    width: 276px;
    height: 200px;
    overflow-y:auto;
    .close {
      right: 10px;
      position: absolute;
      cursor: pointer;
    }
    animation: width 1s;
    @keyframes width {
      0% {
        opacity: 0;
        height: 0;
      }
      100% {
        opacity: 1;
        height: 200px;
      }
    }
    .li {
      list-style-type: none;
      display: flex;
      align-items: center;
      padding: 5px;
      background:  ${({ theme }) => theme.COLORS.BACKGROUND_1000};
      transition: all 0.3s;
      animation: left 1s;
      animation-delay: var(--delay);
    @keyframes left {
      0% {
        opacity: 0;
        transform: translateX(50px)
      }
    
      100% {
        opacity: 1;
        transform: translateX(0)
      }
    }
    }
    .li:first-child {
      border-radius: 10px 10px 0 0;
      margin-top: 30px;
    }
    .li:last-child {
      border-radius: 0 0 10px 10px;
    }
    .li:hover {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_1100}; 
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
    p {
      padding: 0 10px;
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      transition: all 0.3s;
      cursor: pointer;
    }
  }
  .searchResults::-webkit-scrollbar {
  width: 10px;
  }
  .searchResults::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 50px;
  width: 0px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 0px solid rgba(0, 0, 0, 0);
  }
  .searchResults::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 50px;
  width: 0px;
  background-clip: padding-box; /*para as bordas ficarem transparentes e com isso dar a impressão que tem uma margem nos lados da borda*/
  border: 0px solid rgba(0, 0, 0, 0);
  }
  svg {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
  }
  .trash {
    position: absolute;
    right: 15px;
    cursor: pointer;
    padding-top: 4px;
    padding-right: 5px;
  }
  .none {
    display: none;
  }
`;

