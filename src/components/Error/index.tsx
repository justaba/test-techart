import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Cancel } from "../../actions/appAction";
import { RootState } from "../../store/type/appReducerType";
import {
  Block,
  Body,
  Button,
  ButtonsBlock,
  Center,
  H2,
  Step,
  Title,
  Wrap,
} from "../../styled";

const P = styled.p`
  font-size: 16px;
  color: #ee3d26;
`;

const Error: React.FC = () => {
  const dispatch = useDispatch();
  const { page, error } = useSelector((state: RootState) => state.app);

  const handleCancel = () => {
    dispatch(Cancel());
  };

  if (page !== "error") return null;

  return (
    <Wrap>
      <Step>Результат рассчета</Step>
      <Block>
        <Title>
          <H2>Ошибка</H2>
        </Title>
        <Body>
          <Center>
            <P>{error}</P>
          </Center>
        </Body>
      </Block>
      <ButtonsBlock>
        <Button onClick={handleCancel}>Новый расчет</Button>
      </ButtonsBlock>
    </Wrap>
  );
};

export default Error;
