import React from 'react';
import { Spinner } from 'reactstrap';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
};

const Loader = () => {
  return (
    <div style={styles.container}>
      <Spinner style={{ width: '6rem', height: '6rem' }} color="info" />
    </div>
  );
};

export default Loader;
