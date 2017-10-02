export function sequencedDashboard(state = {}, action) {
  switch (action.type) {
    case 'FETCH_SEQUENCED_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function nonSequencedDashboard(state = {}, action) {
  switch (action.type) {
    case 'FETCH_NON_SEQUENCED_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export function nonSequencedNonBlockingDashboard(state = {}, action) {
  switch (action.type) {
    case 'FETCH_NON_SEQUENCED_NON_BLOCKING_DASHBOARD_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
