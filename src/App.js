import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logoImg from './images/logo.png';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Manpower from './components/Manpower';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class App extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    componentDidMount() {
        console.log('22',ReactDOM.findDOMNode(this.refs.subArrow))
        //console.log('88',ReactDOM.findDOMNode(this.refs['ant-menu-submenu-arrow']))
        //this.refs['sender-name']
        //var oArrow = document.getElementByClassName("ant-menu-submenu-arrow");
        //console.log(oArrow)
    }
    render() {
        return (
            <div className="App">
                <div className="AppHeader">
                    <div className="headerTop">
                        <div className="headerTopL">         
                            <img src={ logoImg } />
                        </div>
                        <span className="headerTopC"><b>中国联通HR网上服务平台</b></span>
                        <div className="headerTopR">
                            <Search
                              placeholder="请输入功能或服务关键字"
                              enterButton="搜索"
                              onSearch={value => console.log(value)}
                            />
                        </div>
                    </div>
                    <div className="headerBottom">
                        <nav>
                            <a href="jacascript::void(0)">员工服务大厅</a>
                            <a href="jacascript::void(0)" className="navActive">人力业务管理</a>
                            <a href="jacascript::void(0)">数据决策中心</a>
                        </nav>
                    </div>
                </div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                      collapsible
                      collapsed={this.state.collapsed}
                      onCollapse={this.onCollapse}
                    >
                      <div className="logo" />
                      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                          <Icon type="pie-chart" />
                          <span>人员管理</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                          <Icon type="desktop" />
                          <span>组织管理</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                          <Icon type="desktop" />
                          <span>绩效管理</span>
                        </Menu.Item>
                        <SubMenu
                          key="sub1"
                          title={<span><Icon type="team" /><span>干部管理</span></span>}
                          ref="subArrow"
                        >
                            <SubMenu
                              key="sub01"
                              title={<span><span>同步信息管理</span></span>}
                            >
                                <Menu.Item key="4">Team 1</Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub02"
                              title={<span><span>字段库标签库管理</span></span>}
                            >
                              <Menu.Item key="5">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub03"
                              title={<span><span>干部信息管理</span></span>}
                            >
                              <Menu.Item key="6">Team 3</Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub04"
                              title={<span><span>干部信息查询</span></span>}
                            >
                              <Menu.Item key="7">集团高管-正式</Menu.Item>
                              <Menu.Item key="8">集团高管-后备</Menu.Item>
                              <Menu.Item key="9">省管-正式</Menu.Item>
                              <Menu.Item key="10">省管-后备</Menu.Item>
                              <Menu.Item key="11">地市管-正式</Menu.Item>
                              <Menu.Item key="12">地市管-后备</Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub05"
                              title={<span><span>日志记录</span></span>}
                            >
                              <Menu.Item key="13">Team 4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                              key="sub06"
                              title={<span><span>干部数据分析</span></span>}
                            >
                              <Menu.Item key="14">Team 5</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <Menu.Item key="15">
                          <Icon type="file" />
                          <span>知识共享平台</span>
                        </Menu.Item>
                        <Menu.Item key="16">
                          <Icon type="file" />
                          <span>能力评估</span>
                        </Menu.Item>
                      </Menu>
                    </Sider>
                    <Manpower />
                </Layout>
            </div>
        );
    }
}

export default App;