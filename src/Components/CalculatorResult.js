import React from 'react'
import { Table } from 'antd';

export default function CalculatorResult(props) {
    let resultsObject = props.resultsObject;

    const columns = [
        {
            title: 'Category',
            dataIndex: 'category'
        },
        {
            title: 'Term',
            dataIndex: 'term',
        },
        {
            title: 'Amortization Period',
            dataIndex: 'amortizationPeriod',
        },
    ];

    const data = [
        {
            key: '1',
            category: 'Number of Payments',
            term: resultsObject.termNoOfPayments,
            amortizationPeriod: resultsObject.periodNoOfPayments,
        },
        {
            key: '2',
            category: 'Mortgage Payment',
            term: '$'+resultsObject.termMortgagePayment,
            amortizationPeriod: '$'+resultsObject.periodMortgagePayment,
        },
        {
            key: '3',
            category: 'Principal Payments',
            term: '$'+resultsObject.termPrinciplePayment,
            amortizationPeriod: '$'+resultsObject.periodPrinciplePayment,
        },
        {
            key: '4',
            category: 'Interest Payments',
            term: '$'+resultsObject.termInterestPayment,
            amortizationPeriod: '$'+resultsObject.periodInterestPayment,
        },
        {
            key: '5',
            category: 'Total Cost',
            term: '$'+resultsObject.termTotalCost,
            amortizationPeriod: '$'+resultsObject.periodTotalCost,
        }
    ];


    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => <b>Calculation Summary</b>}
                pagination={false} 
                style = {{
                    marginLeft: 50,
                    marginRight: 150,
                    textAlign: 'center'
                }}
                size="small"
                data-testid="result"
            />
        </div>
    )
}
