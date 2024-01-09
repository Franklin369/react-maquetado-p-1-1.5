import styled from "styled-components";
import { Header1, Card1, Sidebar1 } from "../../index";
export function Proyecto_1_Template() {
  return (
    <Container>
      
      <section className="header">
        <Header1 title="Card con extractor de colores" />
      </section>
      <section className="main">
        <Card1 />
      </section>
    </Container>
  );
}
const Container = styled.div`

  height: 100vh;
  display: grid;
  grid-template:
    "header" 100px
    "main" auto;
  .header {
    padding: 10px;
    grid-area: header;
    /* background-color: rgba(24, 235, 13, 0.14); */
  }
  .main {
    grid-area: main;
    /* background-color: rgba(235, 16, 107, 0.14); */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
