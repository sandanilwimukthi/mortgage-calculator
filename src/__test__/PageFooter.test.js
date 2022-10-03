import * as React from 'react'
import { render, screen } from '@testing-library/react';
import PageFooter from '../Layouts/PageFooter';

describe("PageFooter Component", () => {
    test("Copy rights in the Document", () => {
        render(<PageFooter />);
        const element = screen.getByText("Mortgage Calculator ©2022 Created by Sandanil Wimukthi");
        expect(element).toBeInTheDocument();
    });
})