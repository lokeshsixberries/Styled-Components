import "./styles.css";
import styled, { keyframes } from "styled-components";
const Title = styled.h1`
  color: red;
  background-color: yellow;
  box-shadow: 1px 1px 5px gray;
  width: 200px;
  position: relative;
  left: 100px;
  border-radius: 20px;
  font-size: 35px;
  font-weight: 100;
`;

const anim = keyframes`
  from {
  transform:rotate(10deg);
  }
  to {
  transform:rotate(100deg);
  }
`;
const color = "black";

const main = {
  color: "red"
};

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${main.color};
  width: 200px;
  height: 200px;
  position: relative;
  animation: ${anim} 0.2s infinite;
  left: 100px;
  box-shadow: 3px 10px 10px lightgray;
  border-radius: 10px;
`;

const TheamH = styled.h1`
  color: red;
  background-color: yellow;
`;

const Box1 = styled(Box)`
  background-color: green;
`;

export default function App() {
  return (
    <div className="App">
      <Title>Lokehs</Title>
      <Box />
      <Box1 />
      <TheamH>Veera</TheamH>
    </div>
  );
}
