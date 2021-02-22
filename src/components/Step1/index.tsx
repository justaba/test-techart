import React, { ChangeEvent, ReactNode, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cancel, setValue } from "../../actions/appAction";
import { SET_TYPE_BUILD } from "../../actions/type/appType";
import { RootState } from "../../store/type/appReducerType";
import {
  Block,
  Body,
  Button,
  ButtonsBlock,
  H2,
  Step,
  Title,
  Value,
  Wrap,
} from "../../styled";

const Step1: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.app);

  const handleCancel = () => {
    dispatch(Cancel());
  };

  const handleForward = (e: React.MouseEvent<HTMLElement>) => {
    const type = e.currentTarget.getAttribute("data-type");
    dispatch(setValue(SET_TYPE_BUILD, Number(type)));
  };

  if (page !== "step1") return null;

  return (
    <Wrap>
      <Step>Шаг 1</Step>
      <Block>
        <Title>
          <H2>Что будем строить ?</H2>
        </Title>
        <Body>
          <ul>
            <Value onClick={handleForward} data-type={1}>
              Жилой дом
            </Value>
            <Value onClick={handleForward} data-type={2}>
              Гараж
            </Value>
          </ul>
        </Body>
      </Block>
      <ButtonsBlock>
        <Button onClick={handleCancel}>Отмена</Button>
        <Button>Далее</Button>
      </ButtonsBlock>
    </Wrap>
  );
};

export default Step1;
