const menus = []
const addMenu = (menu) => {
	menus.push(menu)
}

const addSubMenu = (label, subMenu, menu = menus) => {
	for (const item of menu) {
		if (item.label === label) {
			item.subMenus.push(subMenu);
			return;
		}
		if (item.subMenus) {
			addSubMenu(label, subMenu, item.subMenus);
		}
	}
}

export const settingsMenu = [
	{
	  route: '#',
	  label: 'Pengaturan',
	  subMenus: [
		{
		  route: '/settings/appearance',
		  label: 'Pengaturan Tampilan',
		},
		{
		  route: '/settings/role',
		  label: 'Pengaturan Role',
		},
		{
		  route: '/settings/user',
		  label: 'Pengaturan User',
		},
	  ]
	},
]
  
export default menus
addMenu({
	route: '/paymentlink',
    label: 'PaymentLink',
	subMenus: []
})

addMenu({
	route: '/virtualaccount',
    label: 'VirtualAccount',
	subMenus: []
})
