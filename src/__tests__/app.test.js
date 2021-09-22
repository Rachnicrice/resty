'use strict';
import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app.js';

test('our application loads and contains starter data', async () => {
  render(<App />);
  expect()
});