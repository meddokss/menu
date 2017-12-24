import React, {Component} from 'react';

class Link extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			subMenuStyle: {
				top: null,
				left: null,
			},
			show: false,
		};
		
	}
	
	handleClick = (e) => {
		e.preventDefault();
		let dropDownHeight = this.node.offsetHeight;
		let top = true;
		let left;
		
		if (!this.state.show) {
			let target = e.target;
			let {previousSibling, nextSibling} = e.target.parentElement;
			let coords = target.getBoundingClientRect();
			let down = document.documentElement.clientHeight - coords.bottom;
			let rightSide = document.documentElement.clientWidth - coords.right;
			let leftSide = coords.left;
			
			// право
			if (rightSide < 20 && leftSide > 0 && !previousSibling) {
				// не вылезать за правую границу окна
				left = -coords.width;
				if (coords.top > dropDownHeight / 2) {
					top = -dropDownHeight / 2 + coords.height;
					console.log('ОТКРЫВАЕМ ВЛЕВО ПО СЕРЕДИНЕ ПУНКТА');
				} else {
					top = 0;
					console.log('ОТКРЫВАЕМ ВЛЕВО КОГДА СПРАВА МАЛО МЕСТА');
				}
			}
			
			// лево
			if (leftSide > 0 && coords.top < dropDownHeight && down < dropDownHeight && !previousSibling) {
				// ЕСЛИ СВЕРХУ НЕДОСТАТОЧНО МЕСТА - ОТКРЫВАЕМ ВЛЕВО
				left = -coords.width;
				if (coords.top > dropDownHeight / 2) {
					top = -dropDownHeight / 2 + coords.height;
					console.log('ОТКРЫВАЕМ ВЛЕВО ПО СЕРЕДИНЕ ПУНКТА');
				} else {
					top = 0;
					console.log('ОТКРЫВАЕМ ВЛЕВО КОГДА СВЕРХУ МАЛО МЕСТА');
				}
			}
			
			if (leftSide <= 0 && down < dropDownHeight && !nextSibling) {
				// ЕСЛИ СЛЕВА НЕДОСТАТОЧНО МЕСТА - ОТКРЫВАЕМ ВПРАВО
				left = coords.width;
				if (coords.top > dropDownHeight / 2) {
					top = -dropDownHeight / 2 + coords.height;
					console.log('ОТКРЫВАЕМ ВЛЕВО ПО СЕРЕДИНЕ ПУНКТА');
				} else {
					top = 0;
					console.log('ОТКРЫВАЕМ ВЛЕВО КОГДА СПРАВА МАЛО МЕСТА');
				}
			}
			
			if (coords.top + coords.height > dropDownHeight && down < dropDownHeight && rightSide > 20 && top > 0) {
				top = -dropDownHeight;
				console.log('ОТКРЫВАЕМ ВВЕРХ');
			}
			
			document.addEventListener('click', this.handleOutsideClick, false);
			this.setState({
				show: true,
			});
			
		} else {
			this.setState({
				show: false,
			});
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		
		this.setState({
			subMenuStyle: {
				top: top,
				left: left,
			}
		});
		
	};
	
	handleOutsideClick = (e) => {
		if (e.target.tagName === 'LI') {
			return;
		}
		this.handleClick(e);

	};
	
	getUrl = (item) => {
		return item.toLowerCase().trim().replace(' ', '-')
	};
	
	render() {
		let {item, menu} = this.props;
		if (item.secondMenu) {
			menu = item.secondMenu.map((itemSub) => {
				return <li key={itemSub.id}><a
					href={`./${this.getUrl(itemSub.label)}`}>{itemSub.label}</a></li>
			})
		}
		return (
			<li onClick={this.handleClick}>
				<a href={`./${this.getUrl(item.label)}`}>{item.label}</a>
				<ul
					ref={(node) => this.node = node}
					className={this.state.show ? 'show': 'hidden'}
					style={this.state.subMenuStyle}>
					{menu}
				</ul>
			</li>
		)
	}
}

export default Link;



