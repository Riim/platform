const userAgent = navigator.userAgent.toLowerCase();

function find(needle: string) {
	return userAgent.indexOf(needle) > -1;
}

const iPhone = find('iphone');
const iPod = find('ipod');
const iPad = find('ipad');
const android = find('android');
const androidPhone = android && find('mobile');
const androidTablet = android && !androidPhone;
const windows = find('windows');
const windowsPhone = windows && find('phone');
const windowsTablet = windows && !windowsPhone && find('touch');
const blackberry = find('blackberry') || find('bb10') || find('rim');
const blackberryPhone = blackberry && !find('tablet');
const blackberryTablet = blackberry && !blackberryPhone;
const tizen = find('tizen');
const tizenPhone = tizen && find('mobile');
const tizenTablet = tizen && !tizenPhone;
const fxOS = (find('(mobile;') || find('(tablet;')) && find('; rv:');
const fxOSPhone = fxOS && find('mobile');
const fxOSTablet = fxOS && find('tablet');
const meeGo = find('meego');

export const platform =
	iPhone ||
	iPod ||
	androidPhone ||
	windowsPhone ||
	blackberryPhone ||
	tizenPhone ||
	fxOSPhone ||
	meeGo
		? 'phone'
		: iPad || androidTablet || windowsTablet || blackberryTablet || tizenTablet || fxOSTablet
			? 'tablet'
			: 'desktop';
export const isDesktop = platform == 'desktop';
export const isPhone = platform == 'phone';
export const isTablet = platform == 'tablet';
export const isMobile = isPhone || isTablet;
