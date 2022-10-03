import * as React from 'react'
import { render } from '@testing-library/react';
import CalculatorForm from '../Components/CalculatorForm';

describe("Test CalculatorForm Component", () => {
    test("Mortgage Amount Input in the Document", () => {
        const baseProps = {
            sendResultObject: jest.fn()
        };
        const component = render(<CalculatorForm {...baseProps} />);
        const element = component.getByTestId("mortgageAmount");
        expect(element).toBeInTheDocument();
    });

    test("Interest Rate Input in the Document", () => {
        const baseProps = {
            sendResultObject: jest.fn()
        };
        const component = render(<CalculatorForm {...baseProps} />);
        const element = component.getByTestId("interestRate");
        expect(element).toBeInTheDocument();
    });

    test("Amortization Period Input in the Document", () => {
        const baseProps = {
            sendResultObject: jest.fn()
        };
        const component = render(<CalculatorForm {...baseProps} />);
        const element = component.getByTestId("amortizationPeriod");
        expect(element).toBeInTheDocument();
    });

    test("Payment Frequency Input in the Document", () => {
        const baseProps = {
            sendResultObject: jest.fn()
        };
        const component = render(<CalculatorForm {...baseProps} />);
        const element = component.getByTestId("paymentFrequency");
        expect(element).toBeInTheDocument();
    });

    test("Term Input in the Document", () => {
        const baseProps = {
            sendResultObject: jest.fn()
        };
        const component = render(<CalculatorForm {...baseProps} />);
        const element = component.getByTestId("term");
        expect(element).toBeInTheDocument();
    });

})