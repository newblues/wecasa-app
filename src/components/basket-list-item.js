import React from 'react';
import { Button, Label, Input } from 'reactstrap';

const BasketListItem = props => {
  const { prestation } = props;

  const deletePrestation = prestation => {
    props.deletePrestationCallBack(prestation);
  };

  return (
    <div>
      Prestation: {prestation.title} / Prix: {prestation.price} euros / {prestation.duration} min
      <Button onClick={() => deletePrestation(prestation)}>Delete</Button>
    </div>
  );
};

export default BasketListItem;
