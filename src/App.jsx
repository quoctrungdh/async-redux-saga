import React from 'react';
import './App.css';

import { dashboardWithStore } from './HOCs';

const SequencedDashBoard = dashboardWithStore;
const NonSequencedDashBoard = dashboardWithStore;
const NonSequencedNonBlockingDashboard = dashboardWithStore;

export default function App() {
  return (
    <div className="App">
      <SequencedDashBoard type="sequencedDashboard" title="Panel Sequenced" />
      <NonSequencedDashBoard type="nonSequencedDashboard" title="Panel Non-Sequenced" />
      <NonSequencedNonBlockingDashboard type="nonSequencedNonBlockingDashboard" title="Panel Non-Blocking Non-Sequenced" />
    </div>
  );
}
