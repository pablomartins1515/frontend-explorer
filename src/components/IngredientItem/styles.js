import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  align-items: center;
  //como passamos propriedades dentro de Container no arquivo jxs podemos recuperar essa propriedade aqui, podemos acessar essa propriedade fazendo interpolação (propriedade é uma variável)
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.COLOR_BORDER_900}; //podemos usar a propriedade isNew no ternário, caso seja uma nota nova (true), o background vai ser transparente, caso contrário...
  color: ${({theme}) => theme.COLORS.GRAY_100}; 
  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : 'none'}; //aqui no caso vai novamente ser um ternário, se a nota for nota, vai aplicar a primeira configuração, caso contrário...
  border-radius: 10px;
 
  
  button {
    border: none;
    background: none;
    padding: 0 10px;
  } 

  .button-delete {
    svg{
        color:  ${({ theme }) => theme.COLORS.WHITE_200};
        width: 12px;
        height: 12px;
        margin-top: 5px;
      }
  }

  .button-add {
    svg{
        color:  ${({ theme }) => theme.COLORS.GRAY_100};
        width: 15px;
        height: 15px;
        margin-top: 5px;
      }
  }


  input {
    display: flex;
    align-items: center;
    width: 150px;
    height: 32px;
    padding: 12px;
    color: ${({theme}) => theme.COLORS.WHITE_100};
    background: transparent;
    border: none;
    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`;