// src/test/SuperAdminHome.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import SuperAdminHome from '../pages/SuperAdminHome';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('SuperAdminHome Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders SuperAdminHome component with SuperSideBar for large screens', () => {
    global.innerWidth = 1024;
    useLocation.mockReturnValue({ pathname: '/admin' });
    render(<SuperAdminHome />);
    
    const superSideBar = screen.getByTestId('super-sidebar');
    const dashboard = screen.getByTestId('dashboard');
    const outlet = screen.getByTestId('outlet');

    expect(superSideBar).toBeInTheDocument();
    expect(dashboard).toBeInTheDocument();
    expect(outlet).toBeInTheDocument();
  });

  test('renders SuperAdminHome component without SuperSideBar for small screens', () => {
    global.innerWidth = 600;
    useLocation.mockReturnValue({ pathname: '/admin' });
    render(<SuperAdminHome />);
    
    const superSideBar = screen.queryByTestId('super-sidebar');
    const dashboard = screen.getByTestId('dashboard');
    const outlet = screen.getByTestId('outlet');

    expect(superSideBar).not.toBeInTheDocument();
    expect(dashboard).toBeInTheDocument();
    expect(outlet).toBeInTheDocument();
  });

  test('does not display dashboard when isAdminRoot is false', () => {
    useLocation.mockReturnValue({ pathname: '/some-other-path' });
    render(<SuperAdminHome />);
    
    const dashboard = screen.queryByTestId('dashboard');
    const outlet = screen.getByTestId('outlet');

    expect(dashboard).not.toBeInTheDocument();
    expect(outlet).toBeInTheDocument();
  });

  test('renders Outlet component even without a valid path', () => {
    useLocation.mockReturnValue({ pathname: '/' });
    render(<SuperAdminHome />);
    
    const outlet = screen.getByTestId('outlet');

    expect(outlet).toBeInTheDocument();
  });
});
