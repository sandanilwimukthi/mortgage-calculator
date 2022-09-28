import { render, screen } from '@testing-library/react';
import './Common'
import CalculatorForm from '../Components/CalculatorForm';

test("Render Mortgage Amount Input in the Document", () => {
    const baseProps = {
        sendResultObject: jest.fn()
    };
    render(<CalculatorForm {...baseProps} />);
    const childElement = screen.getByText("Mortgage Amount")
    expect(childElement).toBeInTheDocument();
});