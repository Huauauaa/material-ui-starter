import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTheme, withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'lightblue',
  },
};

const Demo = (props) => {
  const theme = useTheme();

  const name = 'Demo';
  return (
    <div
      className={props.classes.root}
      style={{ color: theme.palette.primary.main }}
    >
      {name}
    </div>
  );
};

Demo.propTypes = {};

Demo.defaultProps = {};

export default withStyles(styles)(Demo);
