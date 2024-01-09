import styled from "styled-components";
import reactlogo from "../../assets/react.svg"
import {rotar} from "../../styles/Animaciones"
export function Header1({title}) {
  return (<Container>
<img className="logo" src={reactlogo}></img>
<span>{title}</span>
  </Container>);
}
const Container =styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  gap: 20px;
  color: ${({theme})=>theme.text};
  font-weight: 700;
  font-size: 30px;
  height:100%;
 

 
  .logo{
    height: 2.2em;
    animation:${rotar} infinite 20s linear;
   
  }
`