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
            termNoOfPayments : 0,
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

    useEffect(()=>{
        onResultClear();
    },[])

    const onFinish = (values) => {
        let amortizationPeriod = values.amortizationPeriod
        let interestRate = values.interestRate
        let mortgageAmount = values.mortgageAmount
        let paymentFrequency = values.paymentFrequency
        let term = values.term

        let numberOfMonths = amortizationPeriod * 12;

        let termNoOfPayments = term * 12;
        let periodNoOfPayments = amortizationPeriod * 12;

        let mortgagePayment = (mortgageAmount * interestRate) /
            (1 - Math.pow(1 + interestRate, numberOfMonths * -1)).toFixed(2);

        let termPrinciplePayment = 0;
        let periodPrinciplePayment = 0;

        let termInterestPayment = 0;
        let periodInterestPayment = 0;

        let termTotalCost = 0;
        let periodTotalCost = 0;

        let results = {
            termNoOfPayments : termNoOfPayments,
            periodNoOfPayments: periodNoOfPayments,
            termMortgagePayment: mortgagePayment,
            periodMortgagePayment: mortgagePayment,
            termPrinciplePayment: termPrinciplePayment,
            periodPrinciplePayment: periodPrinciplePayment,
            termInterestPayment: termInterestPayment,
            periodInterestPayment: periodInterestPayment,
            termTotalCost: termTotalCost,
            periodTotalCost: periodTotalCost
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
