import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;

export const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Warn = styled.small`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: #f74646;
  margin-right: 2.4rem;
`;

export const ChangeThemeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeBtn};
  cursor: pointer;
  img {
    margin-left: 1.6rem;
  }
`;
