import styled from 'styled-components';
export const Img = styled.img`
  width:40%;

`
export const GridContainer = styled.section`
  max-width: auto;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 3rem;
  row-gap: 3rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const H1 = styled.h1`
text-align: center;
padding-top:1rem;
margin-bottom:1rem;
text-decoration: underline ;
`;
export const GridContainer1 = styled.section`
  max-width: auto;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 1rem;
  place-items: center;
  column-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

  
export const Div = styled.div`
  text-align: center;
  magine :auto
  display: flex,
  justifyContent: center,
`;
export const Div1 = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 0px 15px;
`;
export const Div2 = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: transparent;
  border: none;
  height: 100%;
`;
export const Card = styled.div`
background-color: white;
height:auto;
border-radius: 10px;
width:auto;
box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

`;
export const Card2 = styled.div`
background-color: white;
height:auto;
width:100%;

`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
 
`;