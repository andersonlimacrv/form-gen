import { FaHome } from 'react-icons/fa';
import {
	TbCircleLetterR,
	TbCircleLetterC,
	TbCircleLetterU,
} from 'react-icons/tb';

import { BiSolidDashboard } from 'react-icons/bi';

import { VscGraph } from 'react-icons/vsc';

import { MdOutlineEnergySavingsLeaf } from 'react-icons/md';
import { RiAlarmWarningFill } from 'react-icons/ri';
import { IoAirplane } from 'react-icons/io5';

const sizeIcons = 'h-8 w-8 drop-shadow-lg';

export const SidebarData = [
	{
		_categoryId: 0,
		category: 'Unidade',
		items: [
			{
				title: 'Home',
				href: '/',
				icon: <FaHome className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
		],
	},
	{
		_categoryId: 1,
		category: 'Dashboard',
		items: [
			{
				title: 'Geral',
				href: '/dashboard',
				icon: <BiSolidDashboard className={sizeIcons} />,
				submenu: true,
				submenuItems: [
					{
						title: 'Dashboard',
						href: '/item1',
					},
				],
			},
			{
				title: 'Energia',
				href: '/monitoramento/energia',
				icon: (
					<MdOutlineEnergySavingsLeaf
						className={sizeIcons}
					/>
				),
				submenu: false,
			},
			{
				title: 'Cargas Termicas',
				href: '/monitoramento/cargas-termicas',
				icon: <VscGraph className={sizeIcons} />,
				submenu: false,
			},
		],
	},
	{
		_categoryId: 2,
		category: 'Equipamentos',
		items: [
			{
				title: 'Unidade',
				href: '/equipamentos/unidade',
				icon: <TbCircleLetterU className={sizeIcons} />,
				submenu: false,
			},
			{
				title: 'Regime',
				href: '/equipamentos/regime',
				icon: <TbCircleLetterR className={sizeIcons} />,
				submenu: false,
			},
			{
				title: 'Compressor',
				href: '/equipamentos/compressor',
				icon: <TbCircleLetterC className={sizeIcons} />,
				submenu: false,
			},
			{
				title: 'Condensador',
				href: '/equipamentos/condensador',
				icon: <TbCircleLetterC className={sizeIcons} />,
				submenu: false,
			},
		],
	},
	{
		_categoryId: 3,
		category: 'Relatorios',
		items: [
			{
				title: 'Energia',
				href: '/energia',
				icon: (
					<MdOutlineEnergySavingsLeaf
						className={sizeIcons}
					/>
				),
				submenu: false,
			},
			{
				title: 'Alarmes',
				href: '/Alarmes',
				icon: <RiAlarmWarningFill className={sizeIcons} />,
				submenu: false,
			},
		],
	},
	{
		_categoryId: 4,
		category: 'Simulação',
		items: [
			{
				title: 'Unidade',
				href: '/simulacao-unidade',
				icon: <IoAirplane className={sizeIcons} />,
				submenu: false,
			},
		],
	},
];
