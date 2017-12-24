import React, {Component} from 'react';

class Link extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			opened: false,
			setStyle: {
				top: null,
				left: null,
			},
			show: 'hidden',
		};
		
	}
	
	handleClick = (e) => {
		// console.log(this.node.offsetHeight);
		e.preventDefault();
		
		
		
		if (this.state.show === 'hidden') {
			
			let dropDownHeight = 315;
			let target = e.target;
			let nextSibling = e.target.parentElement.nextSibling;
			let prevSibling = e.target.parentElement.previousSibling;
			let coords = target.getBoundingClientRect();
			let down = document.documentElement.clientHeight - coords.bottom;
			let rightSide = document.documentElement.clientWidth - coords.right;
			let leftSide = coords.left;
			var top=true;
			var left;
		
			
			// право
			if (rightSide < 20 && leftSide > 0) {
				// не вылезать за правую границу окна
				left = -coords.width;
				if(coords.top > dropDownHeight/2 ){
					top = -dropDownHeight/2 + coords.height;
					console.log('ОТКРЫВАЕМ ВЛЕВО ПО СЕРЕДИНЕ ПУНКТА');
				}else{
					top = 0;
					console.log('ОТКРЫВАЕМ ВЛЕВО КОГДА СПРАВА МАЛО МЕСТА');
				}
			}
			
			// лево
			if (leftSide > 0 && coords.top < dropDownHeight && down < dropDownHeight && !prevSibling) {
				// ЕСЛИ СВЕРХУ НЕДОСТАТОЧНО МЕСТА - ОТКРЫВАЕМ ВЛЕВО
				left = -coords.width;
				if(coords.top > dropDownHeight/2 ){
					top = -dropDownHeight/2 + coords.height;
					console.log('ОТКРЫВАЕМ ВЛЕВО ПО СЕРЕДИНЕ ПУНКТА');
				}else{
					top = 0;
					console.log('ОТКРЫВАЕМ ВЛЕВО КОГДА СВЕРХУ МАЛО МЕСТА');
				}
			}
			
			if (leftSide <= 0 && down < dropDownHeight && !nextSibling) {
				// ЕСЛИ СЛЕВА НЕДОСТАТОЧНО МЕСТА - ОТКРЫВАЕМ ВПРАВО
				left = coords.width;
				if(coords.top > dropDownHeight/2 ){
					top = -dropDownHeight/2 + coords.height;
					console.log('ОТКРЫВАЕМ ВЛЕВО ПО СЕРЕДИНЕ ПУНКТА');
				}else{
					top = 0;
					console.log('ОТКРЫВАЕМ ВЛЕВО КОГДА СПРАВА МАЛО МЕСТА');
				}
			}
			
			// //верх-низ
			// if (coords.top < 0) {
			// 	// не вылезать за верхнюю границу окна ЕСЛИ СВЕРХУ НЕДОСТАТОЧНО МЕСТА - ОТКРЫВАЕМ ВНИЗ
			// 	top = coords.height + 17;
			// 	console.log('ОТКРЫВАЕМ ВНИЗ');
			// }
			// console.log(coords.top);
			
			if (coords.top + coords.height > dropDownHeight && down < dropDownHeight && rightSide > 20 && top>0) {
				top = -dropDownHeight;
				console.log('ОТКРЫВАЕМ ВВЕРХ');
			}
			
			
			document.addEventListener('click', this.handleOutsideClick, false);
			this.setState({
				show: 'show',
			});
			
		} else {
			this.setState({
				show: 'hidden',
			});
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		
		this.setState({
			opened: !this.state.opened,
			setStyle: {
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
	
	render() {
		let {item, menu} = this.props;
		const url = `./${item.label.toLowerCase().trim().replace(' ', '-')}`;
		if(item.secondMenu){
			menu = item.secondMenu.map((itemSecond)=>{
				return <li key = {itemSecond.label + +Date.now()}><a href={`./${itemSecond.label.toLowerCase().trim().replace(' ', '-')}`}>{itemSecond.label}</a></li>
			})
		}
		return (
			<li onClick={this.handleClick}>
				<a href={url}>{item.label}</a>
				<ul
					ref={(node) => this.node = node}
					className={this.state.show}
					style={this.state.setStyle}>
					{menu}
				</ul>
			</li>
		)
	}
}

export default Link;

