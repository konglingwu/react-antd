import React from 'react';
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less'
import logo from './../../resource/assets/logo.svg';
const SubMenu = Menu.SubMenu;
export default class Nav extends React.Component {

  componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    });
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}> {item.title} </Menu.Item>
    })
  }

  render() {
    return (
      <div className="nume-left">
        <div className="logo">
          <img src={logo}></img>
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark" mode="inline">
          {this.state.menuTreeNode}
        </Menu>
      </div>

    );
  }
}
