import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;
  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }
  @media (min-width: 900px) {
    padding: 4.8rem;
  }
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

export const SideArea = styled.div`
  width: 100%;
`;
