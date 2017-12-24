
import React, {Component} from 'react';
import './style.css';
import Link from './Links/index';
import {menu} from './menuItems';

class Menu extends Component{
	render(){
		return(
			<nav className="main_menu">
				<ul >
					{menu.map((item)=>{
						
						return <Link item={item} key={item.id}/>
					})}
				</ul>
			</nav>
		)
	}
}

export default Menu;