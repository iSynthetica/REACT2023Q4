import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from './Search';
import { MemoryRouter } from 'react-router-dom';
import AppProvider from '../../state/AppProvider';

const searchQuery = 'backpack';
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Search Component', () => {
  let event: React.FormEvent<HTMLFormElement>;
  beforeEach(() => {
    event = {
      preventDefault: vi.fn(),
      target: {
        s: {
          value: searchQuery,
        },
      },
    } as unknown as React.FormEvent<HTMLFormElement>;
  });
  it('should renders Button', async () => {
    const result = render(
      <>
        <AppProvider>
          <MemoryRouter>
            <Search />
          </MemoryRouter>
        </AppProvider>
      </>
    );

    const button = screen.getByText('Search');
    const input = result.container.querySelector('input');

    expect(button).toBeVisible();
    expect(input).toBeVisible();

    await userEvent.type(input as HTMLInputElement, searchQuery);
    expect(input).toHaveValue(searchQuery);

    fireEvent.submit(document.querySelector('form') as HTMLFormElement, event);

    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'searchInput',
        searchQuery
      );
      expect(localStorageMock.getItem('searchInput')).toBe(searchQuery);
    });
  });
});
