import { Layout } from "antd";
import React from "react";
import Bar from "../../components/bar";
import Index from "../../components/echarts/Index";
const { Sider } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Bar />
          <h1>123</h1>
        </Sider>
        <Layout className="site-layout">
          <Index />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
