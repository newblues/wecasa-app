import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Container } from 'reactstrap';
import { fetchCatalog } from '../actions/index';

import Prestation from '../components/prestation';
import Loader from '../components/loader';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCatalog();
  }

  renderPrestations = () => {
    const { catalog } = this.props;

    if (catalog.pending === false) {
      return catalog.haircut.categories.map(categorie => {
        return <Prestation key={categorie.reference} categorie={categorie} />;
      });
    }
  };

  render() {
    const { catalog } = this.props;

    return (
      <div>
        {catalog.pending ? (
          <Loader />
        ) : (
          <Container>
            <Row>{this.renderPrestations()}</Row>
          </Container>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ fetchCatalog }, dispatch),
});

const mapStateToProps = state => {
  return {
    catalog: state.catalog,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
