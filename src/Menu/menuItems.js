

let productsMenu =  [
	{label:'Product Develop'},
	{label:'Startup Services'},
	{label:'Software Develop'},
	{label:'Product Design'},
	{label:'Data Analysis'}
];
let ourTeamMenu =  [
	{label:'Founder'},
	{label:'Chief Financial'},
	{label:'Senior Vice President'},
	{label:'Chief Creative Officer'},
	{label:'Vice President'}
];

// let ourTeamMenu =  [
// 	{label:'F'},
// 	{label:'C'},
// 	{label:'S'},
// 	{label:'C'},
// 	{label:'V'}
// ];


let menu = [
	{label:'Home' },
	{label:'Products', secondMenu: productsMenu},
	{label:'Portfolio'},
	{label:'Our Team retetet', secondMenu: ourTeamMenu},
	{label: 'Contacts'},
	{label:'About'}
];

export {menu};
