import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cancel, setValue } from "../../actions/appAction";
import { SET_MATERIAL } from "../../actions/type/appType";
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

const Step3: React.FC = () => {
  const dispatch = useDispatch();
  const { page, buildType } = useSelector((state: RootState) => state.app);

  const handleCancel = () => {
    dispatch(Cancel());
  };

  const handleForward = (e: React.MouseEvent<HTMLElement>) => {
    const type = e.currentTarget.getAttribute("data-type");
    dispatch(setValue(SET_MATERIAL, Number(type)));
  };

  if (page !== "step3") return null;

  if (buildType == 1) {
    return (
      <Wrap>
        <Step>Шаг 3</Step>
        <Block>
          <Title>
            <H2>Материал стен</H2>
          </Title>
          <Body>
            <ul>
              <Value onClick={handleForward} data-type={1}>
                Кирпич
              </Value>
              <Value onClick={handleForward} data-type={2}>
                Шлакоблок
              </Value>
              <Value onClick={handleForward} data-type={3}>
                Деревянный брус
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
  } else {
    return (
      <Wrap>
        <Step>Шаг 2</Step>
        <Block>
          <Title>
            <H2>Материал стен</H2>
          </Title>
          <Body>
            <ul>
              <Value onClick={handleForward} data-type={2}>
                Шлакоблок
              </Value>
              <Value onClick={handleForward} data-type={4}>
                Металл
              </Value>
              <Value onClick={handleForward} data-type={5}>
                Сендвич-панели
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
  }
};

export default Step3;
