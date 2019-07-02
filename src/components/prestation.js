import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

const prestation = ({ categorie, addPrestationCallBack }) => {
  const addPrestation = presta => {
    addPrestationCallBack(presta.reference);
  };

  const prestationList = categorie.prestations.map(presta => {
    return (
      <Card key={presta.reference}>
        <CardBody>
          <CardTitle>{presta.title}</CardTitle>
          <CardSubtitle>{presta.price} Euros</CardSubtitle>
          <CardText>{presta.duration} min</CardText>
          <Button onClick={() => addPrestation(presta)}>Add to Basket</Button>
        </CardBody>
      </Card>
    );
  });

  return (
    <Col xs="12" md="6" lg="4">
      <h5>{categorie.title}</h5>
      <div>{prestationList}</div>
    </Col>
  );
};

export default prestation;

// import React, { Component } from 'react';
// import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';

// export default class Prestation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const { categorie } = this.props;

//     const prestationList = categorie.prestations.map(prestation => {
//       return (
//         <Card key={prestation.reference}>
//           <CardBody>
//             <CardTitle>{prestation.title}</CardTitle>
//             <CardSubtitle>{prestation.price} Euros</CardSubtitle>
//             <CardText>{prestation.duration} min</CardText>
//             <Button>Add to Basket</Button>
//           </CardBody>
//         </Card>
//       );
//     });

//     return (
//       <Col xs="12" md="6" lg="4">
//         <h5>{categorie.title}</h5>
//         <div>{prestationList}</div>
//       </Col>
//     );
//   }
// }
