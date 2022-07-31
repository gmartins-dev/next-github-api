import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  a {
    display: grid;
    grid-template-columns: 20px 1fr;
  }
  svg {
    width: 20px;
  }
  &.unavailable {
    opacity: 0.5;
  }
`;

export const Data = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  word-break: break-all;
  margin-left: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
