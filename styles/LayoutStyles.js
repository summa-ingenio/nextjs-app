// styles/LayoutStyles.js
import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.h1`
  color: #333;
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const LinkWrapper = styled.a`
  display: block;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DetailsWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const FilmTitle = styled.h1`
  color: #333;
  text-align: center;
`;

export const FilmInfo = styled.p`
  color: #666;
  text-align: center;
`;

export const OpeningCrawl = styled.p`
  color: #333;
  text-align: left;
  white-space: pre-line;
  margin-top: 20px;
`;
