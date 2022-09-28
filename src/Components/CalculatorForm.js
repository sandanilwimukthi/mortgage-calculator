import React, { useEffect } from 'react'
import { Button, Form, Select, InputNumber } from 'antd';
const { Option } = Select;

export default function CalculatorForm(props) {
    const [form] = Form.useForm();
    const onReset = () => {
        form.resetFields();
        onResultClear();
    };
    const onResultClear = () => {
        let results = {
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
        props.sendResultObject(results);
    }
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    useEffect(() => {
        onResultClear();
    }, [])

    const onFinish = (values) => {
        let amortizationPeriod = values.amortizationPeriod
        let interestRate = values.interestRate / 100;
        let mortgageAmount = values.mortgageAmount
        let paymentFrequency = values.paymentFrequency
        let term = values.term

        let termNoOfPayments = term * 12;
        let periodNoOfPayments = amortizationPeriod * 12;

        let mortgagePayment = (mortgageAmount * interestRate) /
            (paymentFrequency * (1 - Math.pow(1 + interestRate / paymentFrequency, amortizationPeriod * -paymentFrequency)));
        mortgagePayment = mortgagePayment;

        let termPrinciplePayment = ((mortgageAmount * (interestRate / paymentFrequency) * Math.pow(1 + interestRate / paymentFrequency, term * paymentFrequency)) / ((Math.pow(1 + interestRate / paymentFrequency, term * paymentFrequency) - 1))) - mortgageAmount * interestRate / paymentFrequency;;
        termPrinciplePayment = termPrinciplePayment;
        let periodPrinciplePayment = mortgageAmount;

        let termInterestPayment = Math.abs(paymentFrequency * mortgagePayment * term - mortgageAmount);
        let periodInterestPayment = Math.abs(paymentFrequency * mortgagePayment * amortizationPeriod - mortgageAmount);

        let termTotalCost = termPrinciplePayment + termInterestPayment;
        let periodTotalCost = periodPrinciplePayment + periodInterestPayment;

        let results = {
            termNoOfPayments: termNoOfPayments,
            periodNoOfPayments: periodNoOfPayments,
            termMortgagePayment: mortgagePayment.toFixed(2),
            periodMortgagePayment: mortgagePayment.toFixed(2),
            termPrinciplePayment: termPrinciplePayment.toFixed(2),
            periodPrinciplePayment: periodPrinciplePayment.toFixed(2),
            termInterestPayment: termInterestPayment.toFixed(2),
            periodInterestPayment: periodInterestPayment.toFixed(2),
            termTotalCost: termTotalCost.toFixed(2),
            periodTotalCost: periodTotalCost.toFixed(2)
        }
        props.sendResultObject(results);
    }

    return (
        <div>
            <Form {...layout}
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    name="mortgageAmount"
                    label="Mortgage Amount:"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Mortgage Amount!'
                        },
                    ]}
                >
                    <InputNumber
                        addonBefore={'$'}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="interestRate"
                    label="Interest Rate:"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Mortgage Interest Rate!'
                        },
                    ]}
                >
                    <InputNumber
                        addonAfter={'%'}
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="amortizationPeriod"
                    label="Amortization Period:"
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Amortization Period!'
                        },
                    ]}
                >
                    <Select placeholder="Select The Amortization Period" style={{ width: '100%' }}>
                        {[...Array(30)].map((_, i) => i + 1).map(val =>
                            <Option key={val} value={val}>{val} Years</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item
                    name="paymentFrequency"
                    label="Payment Frequency:"
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Payment Frequency!'
                        },
                    ]}
                >
                    <Select placeholder="Select The Payment Frequency" style={{ width: '100%' }}>
                        <Option key={1} value={'12'}>Monthly (12x per year)</Option>
                        <Option key={2} value={'24'}>Semi-Monthly (24x per year)</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="term"
                    label="Term:"
                    rules={[
                        {
                            required: true,
                            message: 'Please Select Term!'
                        },
                    ]}
                >
                    <Select placeholder="Select The Term" style={{ width: '48%' }}>
                        {[...Array(10)].map((_, i) => i + 1).map(val =>
                            <Option key={val} value={val}>{val} Years</Option>
                        )}
                    </Select>
                </Form.Item>
                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType="submit">
                        Calculate
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
