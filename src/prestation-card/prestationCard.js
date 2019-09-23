import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Container,
  Row,
  CardImg,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FaShoppingCart } from 'react-icons/fa';
import { addPrestation } from '../actions/index';

import './prestationCard.css';

const PrestationCard = props => {
  const { haircutUniverse } = props;
  const {
    match: { params },
  } = props;
  const { gender } = params;

  let genderNb = null;
  if (gender === 'man') {
    genderNb = 0;
  }
  if (gender === 'woman') {
    genderNb = 1;
  }
  if (gender === 'child') {
    genderNb = 2;
  }

  const addPrestation = prestation => {
    props.addPrestation(prestation);
  };

  const renderImg = () => {
    if (gender === 'man') {
      return (
        <CardImg
          top
          width="100%"
          src={require('../assets/man.png')}
          alt="Card image cap"
          className="avatar text-center"
        />
      );
    }
    if (gender === 'woman') {
      return (
        <CardImg
          top
          width="100%"
          src={require('../assets/woman.png')}
          alt="Card image cap"
          className="avatar"
        />
      );
    }
    if (gender === 'child') {
      return (
        <CardImg
          top
          width="100%"
          src={require('../assets/child.png')}
          alt="Card image cap"
          className="avatar"
        />
      );
    }
  };

  const prestationList = haircutUniverse.categories[genderNb].prestations.map(prestation => {
    return (
      <Col key={prestation.reference} xs="12" md="6" lg="3">
        <Card className="card">
          {renderImg()}
          <CardBody>
            <CardTitle className="text-center">{prestation.title}</CardTitle>
            <CardSubtitle>{prestation.price / 100} Euros</CardSubtitle>
            <CardText>{prestation.duration} min</CardText>
            <Button onClick={() => addPrestation(prestation)}>
              <FaShoppingCart />
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <Container>
        <Row>{prestationList}</Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    haircutUniverse: state.catalog.haircutUniverse,
    pending: state.catalog.pending,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ addPrestation }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PrestationCard);
