import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.WHITE_100};
`;