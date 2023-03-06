import styled from 'styled-components'

/* 2 kinds of export is possible */
/* export default styled.button` */
export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  /* if I pass the border-color as a props, I want the button to be different, please see details.js line 64  */
  border-color: ${(props) =>
    props.cart ? 'var(--mainGreen)' : 'var(--lightBlue)'};
  color: ${(props) => (props.cart ? 'var(--mainGreen)' : 'var(--lightBlue)')};

  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? 'var(--mainGreen)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`
