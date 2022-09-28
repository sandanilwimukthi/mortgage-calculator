import React from "react";
import { Layout } from 'antd';
const { Header } = Layout;
function PageHeader() {
  return (
    <Header style={{
      margin: '16px 0',
      color: "white",
      fontSize: "20px",
      textAlign: "center",
      fontWeight: "bold"
    }}>
      <div>Mortgage Calculator</div>
    </Header>
  );
}
export default PageHeader;
