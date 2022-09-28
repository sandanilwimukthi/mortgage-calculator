import React, {useState} from 'react';
import { Layout, Row, Col } from 'antd';
import CalculatorForm from '../Components/CalculatorForm';
import CalculatorResult from '../Components/CalculatorResult';
const { Content } = Layout;

export default function CalculatorPage() {
  const [resultsObject, setResultsObject] = useState({});

  const getResultObject = (obj) => {
    setResultsObject(obj);
  }

  return (
    <div>
      <Content className='content'>
        <div className="site-layout-content">
          <Row>
            <Col span={10}>
              <CalculatorForm sendResultObject={getResultObject} />
            </Col>
            <Col span={14}>
              <CalculatorResult resultsObject={resultsObject} />
            </Col>
          </Row>

        </div>
      </Content>
    </div>
  )
}
