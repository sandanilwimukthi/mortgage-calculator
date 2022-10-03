import * as React from 'react'
import { render } from '@testing-library/react';
import CalculatorResult from '../Components/CalculatorResult';

test("Render title in the Document", () => {
    const baseProps = {
        resultsObject: {
            termNoOfPayments: 0,
            periodNoOfPayments: 0,
            termMortgagePayment: 0,
            periodMortgagePayment: 0,
            termPrinciplePayment: 0,
            periodPrinciplePayment: 0,
            termInterestPayment: 0,
            periodInterestPayment: 0,
            termTotalCost: 0,
            periodTotalCost: 0
        }
    };
    const component = render(<CalculatorResult {...baseProps} />);
    const element = component.getByTestId("result");
    expect(element).toBeInTheDocument();
});