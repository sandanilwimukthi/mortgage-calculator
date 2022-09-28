import React from "react";
import { Layout } from 'antd';
const { Footer } = Layout;

function PageFooter() {
  return (
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Mortgage Calculator ©2022 Created by Sandanil Wimukthi
    </Footer>
  );
}

export default PageFooter;