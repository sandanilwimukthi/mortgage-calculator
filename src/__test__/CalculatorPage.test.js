import * as React from 'react'
import { render } from '@testing-library/react';
import CalculatorPage from '../Pages/CalculatorPage';

describe("CalculatorPage Component", () => {

    test("CalculatorForm component in the Document", () => {
        const component = render(<CalculatorPage />);
        const element = component.getByTestId("form");
        expect(element).toBeInTheDocument();
    });

    test("CalculatorResults component in the Document", () => {
        const component = render(<CalculatorPage />);
        const element = component.getByTestId("result");
        expect(element).toBeInTheDocument();
    });
})