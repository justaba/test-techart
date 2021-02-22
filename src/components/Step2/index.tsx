import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cancel, setValue } from "../../actions/appAction";
import { SET_FLOOR } from "../../actions/type/appType";
import { RootState } from "../../store/type/appReducerType";
import {
  Block,
  Body,
  Button,
  ButtonsBlock,
  Center,
  H2,
  Input,
  Step,
  Title,
  Wrap,
} from "../../styled";

const Step2: React.FC = () => {
  const [floor, setFloor] = useState<number>(0);
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.app);

  const handleCancel = () => {
    dispatch(Cancel());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFloor(Number(value));
  };

  const handleForward = () => {
    dispatch(setValue(SET_FLOOR, floor));
  };

  if (page !== "step2") return null;

  return (
    <Wrap>
      <Step>Шаг 2</Step>
      <Block>
        <Title>
          <H2>Количество этажей</H2>
        </Title>
        <Body>
          <Center>
            <Input onChange={handleChange} type="number" />
          </Center>
        </Body>
      </Block>
      <ButtonsBlock>
        <Button onClick={handleCancel}>Отмена</Button>
        <Button onClick={handleForward} disabled={floor > 0 ? false : true}>
          Далее
        </Button>
      </ButtonsBlock>
    </Wrap>
  );
};

export default Step2;
