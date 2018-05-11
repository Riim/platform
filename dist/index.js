"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userAgent = navigator.userAgent.toLowerCase();
function find(needle) {
    return userAgent.indexOf(needle) > -1;
}
var iPhone = find('iphone');
var iPod = find('ipod');
var iPad = find('ipad');
var android = find('android');
var androidPhone = android && find('mobile');
var androidTablet = android && !androidPhone;
var windows = find('windows');
var windowsPhone = windows && find('phone');
var windowsTablet = windows && !windowsPhone && find('touch');
var blackberry = find('blackberry') || find('bb10') || find('rim');
var blackberryPhone = blackberry && !find('tablet');
var blackberryTablet = blackberry && !blackberryPhone;
var tizen = find('tizen');
var tizenPhone = tizen && find('mobile');
var tizenTablet = tizen && !tizenPhone;
var fxOS = (find('(mobile;') || find('(tablet;')) && find('; rv:');
var fxOSPhone = fxOS && find('mobile');
var fxOSTablet = fxOS && find('tablet');
var meeGo = find('meego');
exports.platform = iPhone ||
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
exports.isDesktop = exports.platform == 'desktop';
exports.isPhone = exports.platform == 'phone';
exports.isTablet = exports.platform == 'tablet';
exports.isMobile = exports.isPhone || exports.isTablet;
