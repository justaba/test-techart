import styled from "styled-components";

export const Wrap = styled.div`
  width: 400px;
  min-height: 300px;
`;

export const Block = styled.div`
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  border: 1px solid #212f3d;
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  height: 40px;
  background-color: #d6eaf8;
  text-align: center;
`;

export const Step = styled.h6`
  font-size: 14px;
  font-weight: 300;
  color: #999da1;
  text-align: center;
  margin: 10px 0;
`;

export const H2 = styled.h2`
  font-size: 16px;
  color: #133fd1;
  font-weight: 500;
  line-height: 40px;
`;

export const Value = styled.li`
  color: #2ecc71;
  cursor: pointer;
  list-style-type: none;

  &:hover {
    text-decoration: underline;
  }

  &:before {
    color: #000000;
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #000000;
    margin-right: 8px;
    display: inline-block;
    text-decoration: underline;
  }
  &:before,
  &:hover:before {
    text-decoration: none;
  }
`;

export const ButtonsBlock = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  min-width: 60px;
  padding: 5px 10px;
  border: 1px solid #212f3d;
  border-radius: 8px;
  margin: 0 5px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) => (props.disabled ? "#D5D8DC" : "#000000")};
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 90px;
  margin: 0 5px;
`;
