import styled from "styled-components";
import { ColorExtractor } from "react-color-extractor";
import { useState } from "react";
export function Card1() {
  const [colors, setColors] = useState([]);
  const getColors = (colorSwatch) => {
    setColors(colorSwatch);
  };
  return (
    <Container $color0={colors[0]} $color1={colors[1]} $color2={colors[2]}>
      <div className="image-over2">
        <div className="contentImg">
          <img src="https://i.ibb.co/wSs2B9F/Diapositiva2.png" />
        </div>
        <a className="seller">
          <div className="seller-thumb avatar-lg">
            <ColorExtractor getColors={getColors}>
              <img
                className="rounded-circle"
                src="https://i.ibb.co/GsJvk3W/charizard.png"
              />
            </ColorExtractor>
          </div>
        </a>
      </div>
      <div className="card-body">
        <span className="title">
          React-intermedio - full diseños responsive
        </span>
        <span className="precio">$ 9.99</span>
        <span className="fecha">02 diciembre 2024</span>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  justify-content: center;
  flex-direction: column;
  padding: 18px;
  text-align: center;
  border-radius: 20px;
  width: 300px;
  box-shadow: 28px 7px 35px 9px rgba(0, 0, 0, 0.1);

  .image-over2 {
    position: relative;

    .contentImg {
      width: 100%;
      border-radius: 15px;
      overflow: hidden;

      img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
      }
    }
    .seller {
      display: flex;
      position: absolute;
      top: calc(100% - 2.5rem);
      justify-content: center;
      width: 100%;

      .seller-thumb {
        position: relative;
        border: 3px solid ${(props) => props.$color1};
        height: 80px;
        width: 80px;
        border-radius: 50%;
        box-shadow: inset 0 0 0 2px ${(props) => props.$color0};
        &:after {
          content: "";
          position: absolute;
          right: 100px;
          margin: auto;
          border-radius: 50%;
          transition: all 0.2s;
        }

        img {
          height: calc(5rem - 16px);
          width: calc(5rem - 16px);
          margin: 5px;
        }
      }
    }
  }
  &:hover {
    .image-over2 {
      .seller {
        .seller-thumb {
          &::after {
            filter: drop-shadow(0 0 1em ${(props) => props.$color0});
            height: calc(5rem + 5px);
            width: calc(5rem + 5px);
            top: -3px;
            left: -3px;
            box-shadow: 0 5px 15px ${(props) => props.$color0};
          }
        }
      }
    }
    .card-body{
      .title{
        color: ${(props)=>props.$color0};
      }
    }

  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding-top: 20%;
    gap:10px;
    span {
      font-weight: 700;
    }
    .title{
      color: ${({ theme }) => theme.text};
    }
    .precio {
      color: #b8b8b8;
      font-weight: 500;
    }
    .fecha {
      color: ${({ theme }) => theme.text};
    }
  }
`;
