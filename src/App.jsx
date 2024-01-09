import { useState } from "react";
import { MyRoutes, GlobalStyle, useThemeStore, Sidebar1 } from "./index";
import styled, { ThemeProvider } from "styled-components";
import { Device } from "./styles/breakpoints";
function App() {
  const { themeStyle } = useThemeStore();
  const [siderbarState, setSidebarState] = useState(false);
  return (
    <>
      <ThemeProvider theme={themeStyle}>
        <GlobalStyle />
        <Container className={siderbarState ? "active" : ""}>
          <section className="contentsidebar">
            <Sidebar1 state={siderbarState} setState={setSidebarState} />
          </section>
          <section className="contentroutes">
            <MyRoutes />
          </section>
        </Container>
      </ThemeProvider>
    </>
  );
}
const Container = styled.main`
  display: grid;
  transition: all 0.2s ease;
  grid-template:
      "sidebar main" auto/
      0 1fr;

  .contentsidebar {
    grid-area: sidebar;
    display: none;
  }
  .contentroutes {
    grid-column: 1;
    width: 100%;
    grid-area: main;
  }
  @media ${Device.tablet} {
    grid-template:
      "sidebar main" auto/
      88px 1fr;

    &.active {
      grid-template:
        "sidebar main" auto/
        288px 1fr;
    }
    .contentsidebar {
      display: initial;
      grid-column: 1;
    }
    .contentroutes {
      grid-column: 2;
    }
  }
`;
export default App;
