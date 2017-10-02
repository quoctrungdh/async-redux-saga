import React from 'react';
import { connect } from 'react-redux';

import { DashBoard } from '../Components';

function dashboardWithStore(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      this.props.loadDashboard();
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  };
}

function mapStateToProps(state, props) {
  const { type } = props;
  return {
    userData: state.userReducer,
    dashboardData: state[type],
  };
}

function mapDispatchToProps(dispatch, props) {
  console.log(props);
  const typeMapping = {
    sequencedDashboard: 'LOAD_SEQUENCED_DASHBOARD',
    nonSequencedDashboard: 'LOAD_NON_SEQUENCED_DASHBOARD',
    nonSequencedNonBlockingDashboard: 'LOAD_DASHBOARD_NON_SEQUENCE_NON_BLOCKING',
  };

  return {
    loadDashboard: function loadDashboard() {
      return dispatch({
        type: typeMapping[props.type],
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(dashboardWithStore(DashBoard));
