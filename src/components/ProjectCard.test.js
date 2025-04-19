import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard Component', () => {
    const mockProps = {
        title: 'Test Project',
        description: 'This is a test project description.',
        imageUrl: 'test-image-url.jpg',
        projectUrl: 'https://test-project.com',
    };

    it('renders the project title', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    });

    it('renders the project description', () => {
        render(<ProjectCard {...mockProps} />);
        expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    });

    it('handles missing imageUrl gracefully', () => {
        const { imageUrl, ...propsWithoutImage } = mockProps;
        render(<ProjectCard {...propsWithoutImage} />);
        const image = screen.queryByAltText(mockProps.title || 'Project');
        expect(image).not.toBeInTheDocument();
    });

    it('handles missing projectUrl gracefully', () => {
        const { projectUrl, ...propsWithoutUrl } = mockProps;
        render(<ProjectCard {...propsWithoutUrl} />);
        const link = screen.queryByRole('link', { name: mockProps.title });
        expect(link).not.toBeInTheDocument();
    });
});