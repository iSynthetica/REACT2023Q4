import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';
import { MemoryRouter } from 'react-router-dom';
import AppProvider from '../../state/AppProvider';

const searchQuery = 'backpack';

describe('Search Component', () => {
  it('should renders Button', async () => {
    const result = render(
      <>
        <MemoryRouter>
          <AppProvider>
            <Search />
          </AppProvider>
        </MemoryRouter>
      </>
    );

    const button = screen.getByText('Search');
    const input = result.container.querySelector('input');

    expect(button).toBeVisible();
    expect(input).toBeVisible();

    await userEvent.type(input as HTMLInputElement, searchQuery);
    expect(input).toHaveValue(searchQuery);
  });
});
