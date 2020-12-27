import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  background: var(--color-dark);
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  > img {
    height: 50px;
  }
`;

export const Heading = styled.h2`
  color: ${props => props.color};
`;
