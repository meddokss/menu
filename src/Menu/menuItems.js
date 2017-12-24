

let productsMenu =  [
	{label:'Product Develop', id: 1},
	{label:'Startup Services', id: 2},
	{label:'Software Develop', id: 3},
	{label:'Product Design', id: 4},
	{label:'Data Analysis', id: 5}
];
let ourTeamMenu =  [
	{label:'Founder', id: 1},
	{label:'Chief Financial', id: 2},
	{label:'Senior Vice President', id: 3},
	{label:'Chief Creative Officer', id: 4},
	{label:'Vice President', id: 5}
];

let menu = [
	// {label:'Home', id: 1 },
	{label:'Products',id: 2,  secondMenu: productsMenu},
	// {label:'Portfolio', id: 3},
	// {label:'Our Team', id: 4, secondMenu: ourTeamMenu},
	// {label: 'Contacts', id: 5},
	// {label:'About', id: 6}
];

export {menu};
