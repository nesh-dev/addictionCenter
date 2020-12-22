import React, { Component } from "react"
import DropdownMenuItem from '../components/dropdownMenu';
import MenuItem from '../components/menuItem';


class MainMenu extends Component {
  render() {
    const data = this.props.menu.wpMenu.menuItems.nodes
      ? this.props.menu.wpMenu.menuItems.nodes.filter(
          menuItem => menuItem.parentId === null
        )
      : null
      console.log(data, '???')

    return (
    
        <>
         <div
      style={{
        fontSize: `36px`,
        textAlign: `center`,
        fontWeight: `bold`, 
        fontFamily: `bold`,
        width: `25%`,
        marginRight: `10px`,
      }}
      >
      Addiction <span
        style={{
          color: `#56bc82`,
         
        }}
      
      >Center</span>
      </div>
          {data.map(menuItem => {
            const children = menuItem.childItems.nodes.length
              ? menuItem.childItems.nodes
              : null

            return children ? (
              <DropdownMenuItem key={menuItem.id} parent={menuItem} children={children} />
            ) : (
              <MenuItem menuItem={menuItem} />
            )
          })}
          <div style={{
        width: `60px`, 
        height: `60px`, 
        backgroundColor: `#ffff`, 
        borderRadius: `50%`,
        marginTop: `-1%`,
        marginLeft: `5%`
      }}> 
      <span style={{
        color: `#56BC82`,
        marginLeft: `15px`, 
        marginTop: `15px`

      }}
      className="material-icons">local_phone</span>
      </div>
        </>

    )
  }
}

export default MainMenu
