import * as React from 'react'
import { render, screen } from '@testing-library/react';
import Notfound from '../Layouts/NotFound';

describe("Page Not Found Component", () => {
    test("Page Not Found in the Document", () => {
        render(<Notfound />);
        const element = screen.getByText("Page Not Found");
        expect(element).toBeInTheDocument();
    });
})