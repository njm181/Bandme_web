
import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';

import { BiDollar } from 'react-icons/bi';
import {FaConnectdevelop} from 'react-icons/fa'
import {CgSearchFound} from 'react-icons/cg'
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Best Security',
		description: 'modern security throughout the app to safeguard your privacy',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Ease of Use',
		description: 'easy to intuitive design for effective use',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Connection',
		description: 'Easy connection with other artists',
		icon: iconStyle(FaConnectdevelop),
		imgClass: 'four',
	},
	{
		name: 'Price',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Find',
		description: 'Find the best artists, bands & places',
		icon: iconStyle(CgSearchFound),
		imgClass: 'six',
	},


];