import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  margin: 10px;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #191d1e;
  display: flex;
  flex-direction: column;

  &:hover {
    color: #0069ef;
  }
`;
