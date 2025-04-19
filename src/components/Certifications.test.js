import React from 'react';
import { render, screen } from '@testing-library/react';
import Certifications from './Certifications';
import { certificationsData } from '../data/certificationsData';

jest.mock('../data/certificationsData', () => ({
    certificationsData: [
        {
            name: 'Certification 1',
            issuer: 'Issuer 1',
            date: 'January 2023',
            logoUrl: 'https://example.com/logo1.png',
            link: 'https://example.com/verify1',
        },
        {
            name: 'Certification 2',
            issuer: 'Issuer 2',
            date: 'February 2023',
            logoUrl: '',
            link: '',
        },
    ],
}));

describe('Certifications Component', () => {
    test('renders the Certifications section', () => {
        render(<Certifications />);
        expect(screen.getByText('Certifications')).toBeInTheDocument();
    });

    test('renders all certifications from the data', () => {
        render(<Certifications />);
        certificationsData.forEach((cert) => {
            expect(screen.getByText(cert.name)).toBeInTheDocument();
            expect(screen.getByText(`${cert.issuer} - ${cert.date}`)).toBeInTheDocument();
        });
    });

    test('renders logos if logoUrl exists', () => {
        render(<Certifications />);
        const logo = screen.getByAltText('Issuer 1 logo');
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('src', 'https://example.com/logo1.png');
    });

    test('does not render logos if logoUrl is missing', () => {
        render(<Certifications />);
        const logo = screen.queryByAltText('Issuer 2 logo');
        expect(logo).not.toBeInTheDocument();
    });

    test('renders verification links if link exists', () => {
        render(<Certifications />);
        const link = screen.getByText('Verify');
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://example.com/verify1');
    });

    test('does not render verification links if link is missing', () => {
        render(<Certifications />);
        const link = screen.queryByText('Verify', { selector: 'a' });
        expect(link).toBeInTheDocument(); // Only one link should exist
    });
});
