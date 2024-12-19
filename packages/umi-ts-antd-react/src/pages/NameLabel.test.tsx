import { render, screen, fireEvent } from '@testing-library/react';
import NameLabel, { User } from './NameLabel';

// Mock window.matchMedia
beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});

describe('NameLabel Component', () => {
    const user: User = {
        name: 'John Doe',
        gender: 'Male',
        age: 30,
    };

    it('should render user name, gender, and age', () => {
        render(<NameLabel user={user} />);
        expect(screen.getByText('John Doe')).toBeTruthy();
        expect(screen.getByText('Gender: Male, Age: 30')).toBeTruthy();
    });

    it('should render avatar icon', () => {
        render(<NameLabel user={user} />);
        expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThan(0);
    });

    it('should call onClick when button is clicked', () => {
        const handleClick = jest.fn();
        render(<NameLabel user={user} onClick={handleClick} />);
        fireEvent.click(screen.getByText('View Details'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should render the cover image', () => {
        render(<NameLabel user={user} />);
        expect(screen.getByAltText('example')).toBeTruthy();
    });
});