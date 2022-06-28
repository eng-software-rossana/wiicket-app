import React, { Dispatch, SetStateAction } from 'react';
import { Card, Title } from 'react-native-paper';
import { pcComponentStyles } from './pcComponentStyles';

interface Props {
  title: string;
  cost: number;
  imgURI?: string;
  productID: string;
  description: string;
  selectedId?: string;
  setSelectedId: Dispatch<SetStateAction<string>>;
}

const PCComponent = (props: Props) => {
  return (
    <Card
      mode="outlined"
      style={
        props.selectedId === props.productID
          ? pcComponentStyles.selectedCard
          : pcComponentStyles.card
      }
      onPress={() => {
        props.setSelectedId(props.productID);
      }}>
      <Card.Cover source={{ uri: props.imgURI }} />
      <Card.Title titleNumberOfLines={5} title={props.title} />
      <Card.Content>
        <Title style={pcComponentStyles.cost}>{`R$ ${props.cost}`}</Title>
      </Card.Content>
    </Card>
  );
};

export default PCComponent;
