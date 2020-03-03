import React from "react";
import styled from "styled-components";



  const HomeCard = props => {
    
    console.log("Parent props", props);
    const ProfileImage = ({ image }) => (
        <Img className="image" src={image} alt="Profiles of Jane Austen Characters" />
      );
     const Copy = props => (
         <P>{props.copy}</P>
      );
      const Title = ({ name }) => <H2 className="title"> {name}</H2>;

    return (
      <Box className="box">
        <ProfileImage image={props.propsPassedFromParent.profileImg} />
        <div>
          <Title name={props.propsPassedFromParent.name} />
        </div>
        <Copy copy={props.propsPassedFromParent.copy} />
      </Box>
    );
  };
  
  export default HomeCard;
  
//   const body = styled.body`
//   height: 100vh;
//   margin: 1rem;
//   font-family: "Open Sans Condensed",
//     sans-serif;
//   background: #e8e3ec;
  //`;

  
  const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  justify-self: center;
  border: 3px solid rgb(167, 188, 164);
  `;

  const Box = styled.div`
  margin-top:100px;
  margin: 1rem;
  background-color: #efebd8;
  border-radius: 6px;
  border: 1px solid rgb(167, 188, 164);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items: center;
  
  padding: 1.25rem;
  
  `;

  const H2 = styled.h2`
  font-size: 30px;
  margin: 0 0 1rem 0;
  border-bottom: 3px solid #6b8869;
  
  `;

  const P = styled.p`
  align-self: start;
  
  `;
  
