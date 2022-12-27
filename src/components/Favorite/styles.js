import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-left: 0px;
  margin-top: 20px;
  
  svg {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    
    transition: transform 0.5s;
  }
  svg:hover {
    transform: scale(1.5)
  }
`;