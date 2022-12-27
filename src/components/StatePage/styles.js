import styled from 'styled-components'

export const Container = styled.div`
.statePage {
    position: absolute;
    top: 25px;
    right: 25px;
    cursor: pointer;
    scale: 2.5;
    transition: all 0.5s;
  }
  .statePage:hover {
    scale: 3.0;
    filter: brightness(0.8);
  }
`;