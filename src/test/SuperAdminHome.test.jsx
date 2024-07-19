// src/pages/__tests__/SuperAdminHome.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SuperAdminHome from '../pages/SuperAdminHome';
import { Dashboard, SuperSideBar } from '../../constants';

// Mocking the imported components
jest.mock('../../constants', () => ({
  Dashboard: jest.fn(() => <div data-testid="dashboard">Dashboard</div>),
  SuperSideBar: jest.fn(() => <div data-testid="super-sidebar">SuperSideBar</div>),
}));

describe('SuperAdminHome', () => {
  const renderWithRouter = (path) => {
    return render(
      <Router initialEntries={[path]}>
        <Routes>
          <Route path="*" element={<SuperAdminHome />} />
        </Routes>
      </Router>
    );
  };

  test('renders SuperAdminHome component', () => {
    const { getByTestId } = renderWithRouter('/admin');
    expect(getByTestId('super-admin-home')).toBeInTheDocument();
  });

  test('renders SuperSideBar component on large screens', () => {
    window.innerWidth = 1024; // Simulating large screen
    const { getByTestId } = renderWithRouter('/admin');
    expect(getByTestId('super-sidebar')).toBeInTheDocument();
  });

  test('does not render SuperSideBar component on small screens', () => {
    window.innerWidth = 768; // Simulating small screen
    const { queryByTestId } = renderWithRouter('/admin');
    expect(queryByTestId('super-sidebar')).not.toBeInTheDocument();
  });

  test('renders Dashboard component when at admin root', () => {
    const { getByTestId } = renderWithRouter('/admin');
    expect(getByTestId('dashboard')).toBeInTheDocument();
  });

  test('does not render Dashboard component when not at admin root', () => {
    const { queryByTestId } = renderWithRouter('/admin/other');
    expect(queryByTestId('dashboard')).not.toBeInTheDocument();
  });

  test('renders Outlet component', () => {
    const { getByTestId } = renderWithRouter('/admin');
    expect(getByTestId('outlet')).toBeInTheDocument();
  });
});
