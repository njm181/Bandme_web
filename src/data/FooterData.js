import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		link: 'https://www.instagram.com'
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		link: 'https://www.youtube.com'
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		link: 'https://www.twitter.com'
	},
	
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];