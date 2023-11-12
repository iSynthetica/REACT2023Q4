import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';
import { MemoryRouter, Route, Routes } from 'react-router';
import Layout from '../components/Layout';

describe('Not found', () => {
  it('Render not found page', () => {
    const badRoute = '/some/bad/route';
    render(
      <>
        <MemoryRouter initialEntries={[badRoute]}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </MemoryRouter>
      </>
    );

    expect(screen.getByText(/Page not found/i)).toBeVisible();
  });
});
