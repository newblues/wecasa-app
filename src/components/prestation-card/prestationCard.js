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
import { addPrestation } from '../../redux/actions/index';

import { formatPrice, timeConvert } from '../../helpers/helpers';

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
          src={require('../../assets/man.png')}
          alt="Card image cap"
          className="avatar card-img-top bg-custom"
        />
      );
    }
    if (gender === 'woman') {
      return (
        <CardImg
          src={require('../../assets/woman.png')}
          alt="Card image cap"
          className="card-img-top bg-custom "
        />
      );
    }
    if (gender === 'child') {
      return (
        <CardImg
          top
          variant="top"
          src={require('../../assets/child.png')}
          alt="Card image cap"
          className="card-img-top bg-custom"
        />
      );
    }
  };

  const prestationList = haircutUniverse.categories[genderNb].prestations.map(prestation => {
    return (
      <Col key={prestation.reference} xs="12" sm="6" lg="3">
        <Card className="cardCustom text-center">
          {renderImg()}
          <CardBody>
            <CardTitle className="card-title">
              {prestation.title}
              {/* <p>{prestation.duration}min</p> */}
            </CardTitle>

            <CardSubtitle className="card-price">{formatPrice(prestation.price)}</CardSubtitle>
            <CardText className="card-"></CardText>
            <Button
              className="btn-color  border boder-light"
              onClick={() => addPrestation(prestation)}
            >
              <FaShoppingCart />
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <div className="wrapper">
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
