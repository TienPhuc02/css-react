import Card from "./Card";
import styled from "styled-components";
const StylesCardList = styled.div`
  height: 100vh;
  /* padding: 20px 0px; */
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  column-gap: 30px;
  max-width: 1269px;
`;
const CardList = () => {
  return (
    <StylesCardList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StylesCardList>
  );
};

export default CardList;
