
import React, {Component} from 'react';
import './style.css';
import Link from './Links/index';
import {menu} from './menuItems';

class Menu extends Component{
	render(){
		
		return(
			<nav className="main_menu">
				<ul >
					{menu.map((item, itemKey)=>{
						return <Link item={item} key={itemKey+Date.now()}/>
					})}
				</ul>
			</nav>
		)
	}
}

export default Menu;