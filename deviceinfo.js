/**
 * deviceinfo - Detect Basic Device Information
 * Author: ArenaDelMobile
 * License: Custom
 */

const deviceinfo = {
    /**
     * Returns the platform name (e.g., 'Windows', 'Mac', 'Linux', 'Android', 'iOS', 'Unknown').
     * @returns {string}
     */
    getPlatform() {
        const platform = navigator.platform.toLowerCase();
        if (platform.includes('win')) return 'Windows';
        if (platform.includes('mac')) return 'Mac';
        if (platform.includes('linux')) return 'Linux';
        if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
        if (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) return 'iOS';
        return 'Unknown';
    },

    /**
     * Returns the approximate screen resolution as a string.
     * @returns {string}
     */
    getScreenResolution() {
        return `${window.screen.width} x ${window.screen.height}`;
    },

    /**
     * Returns the browser's user agent string.
     * @returns {string}
     */
    getUserAgent() {
        return navigator.userAgent;
    }
};

// Example usage:
// console.log(deviceinfo.getPlatform()); // 'Windows', 'Mac', etc.
// console.log(deviceinfo.getScreenResolution()); // e.g., '1920 x 1080'
// console.log(deviceinfo.getUserAgent()); // Full UA string

module.exports = deviceinfo;
