import * as React from 'react'
import { render, screen } from '@testing-library/react';
import PageHeader from '../Layouts/PageHeader';

describe("PageHeader Component", () => {
    test("Title in the Document", () => {
        render(<PageHeader />);
        const element = screen.getByText("Mortgage Calculator");
        expect(element).toBeInTheDocument();
    });
})