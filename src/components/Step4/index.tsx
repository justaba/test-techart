import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Calculate, Cancel, setValueSize } from "../../actions/appAction";
import { RootState } from "../../store/type/appReducerType";
import {
  Block,
  Body,
  Button,
  ButtonsBlock,
  H2,
  Step,
  Title,
  Wrap,
  Center,
  Input,
} from "../../styled";

const Elem = styled.div`
  display: flex;
  align-items: center;
`;

const Step4: React.FC = () => {
  const [sizex, setSizex] = useState<number>();
  const [sizey, setSizey] = useState<number>();
  const dispatch = useDispatch();
  const { page, buildType, floor, material } = useSelector(
    (state: RootState) => state.app
  );

  const handleCancel = () => {
    dispatch(Cancel());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "sizex") {
      setSizex(Number(value));
    } else {
      setSizey(Number(value));
    }
  };

  const handleCalculate = () => {
    if (buildType && floor && material && sizex && sizey) {
      dispatch(Calculate(buildType, floor, material, sizex, sizey));
    } else if (buildType && material && sizex && sizey) {
      dispatch(Calculate(buildType, 0, material, sizex, sizey));
    }
  };

  if (page !== "step4") return null;

  return (
    <Wrap>
      <Step>{buildType == 2 ? "Шаг 3" : "Шаг 4"}</Step>
      <Block>
        <Title>
          <H2>Длина стен (в метрах)</H2>
        </Title>
        <Body>
          <Center>
            <Input onChange={handleChange} type="number" name="sizex" />
            <Elem>X</Elem>
            <Input onChange={handleChange} type="number" name="sizey" />
          </Center>
        </Body>
      </Block>
      <ButtonsBlock>
        <Button onClick={handleCancel}>Отмена</Button>
        <Button onClick={handleCalculate}>Рассчитать</Button>
      </ButtonsBlock>
    </Wrap>
  );
};

export default Step4;
