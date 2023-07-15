import styled from "styled-components";
// const StylesCard=styled.tag``
const StylesCard = styled.div`
  /* padding: 20px; */
  width: 400px;
  height: 463px;
  background-color: #e5e5e5;
  position: relative;
  margin-bottom: 30px;
`;

const CardImageStyles = styled.div`
  max-width: 400px;
  border-radius: 8px;
`;
const ImageStyles = styled.img`
  width: 100%;
`;
const ContentCardStyle = styled.div`
  max-width: 363px;
  width: 363px;
  border-radius: 20px;
  height: auto;
  padding: 20px;
  background-color: #ffffff;
  position: absolute;
  transform: translateY(-50%);
  z-index: 10;
  left: 20px;
`;
const ContentTCardTopStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const ContentAvatarStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentAvatarImgStyles = styled.img`
  margin-right: 12px;
`;
const ContentAvatarSpanStyles = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;
const ContentRatingStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentRatingImgStyles = styled.img`
  height: 18px;
  margin-right: 12px;
`;
const ContentRatingSpanStyles = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
`;
const ContentTCardBottomStyles = styled.div`
  display: flex;
  justify-content: space-between;
  .title {
    color: #000000;
    font-family: "Poppins", sans-serif;
    font-weight: 500px;
    font-style: 18px;
  }
  .number {
    background: linear-gradient(
      86.88deg,
      #7d6aff 1.38%,
      #ffb86c 64.35%,
      #fc2872 119.91%
    );
    font-weight: 700;
    font-style: 18px;
    font-family: "Poppins", sans-serif;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Card = () => {
  return (
    <StylesCard>
      <CardImageStyles>
        <ImageStyles src="/img1.png" alt="" />
      </CardImageStyles>
      <ContentCardStyle>
        <ContentTCardTopStyles>
          <ContentAvatarStyles>
            <ContentAvatarImgStyles src="/img11.png" alt="" />
            <ContentAvatarSpanStyles>@zndrson</ContentAvatarSpanStyles>
          </ContentAvatarStyles>
          <ContentRatingStyles>
            <ContentRatingImgStyles src="/img12.png" alt="" />
            <ContentRatingSpanStyles>256</ContentRatingSpanStyles>
          </ContentRatingStyles>
        </ContentTCardTopStyles>
        <ContentTCardBottomStyles>
          <span className="title">Cosmic Perspective</span>
          <span className="number">12,000 PSL</span>
        </ContentTCardBottomStyles>
      </ContentCardStyle>
    </StylesCard>
  );
};

export default Card;
