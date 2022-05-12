import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

const buildReduxContainer =
  (mapStateToProps, actionCreators) => WrappedComponent => {
    class ReduxContainer extends PureComponent {
      constructor(props) {
        super(props);
        const { dispatch } = props;
        this.boundActionCreators = bindActionCreators(actionCreators, dispatch);
      }

      render() {
        return (
          <WrappedComponent {...this.props} {...this.boundActionCreators} />
        );
      }
    }

    ReduxContainer.propTypes = {
      dispatch: PropTypes.func,
    };
    ReduxContainer.defaultProps = {
      dispatch: () => {},
    };

    return connect(mapStateToProps)(ReduxContainer);
  };

export default buildReduxContainer;
