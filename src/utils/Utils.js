import moment from 'moment';

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function hashCode(str) {
    var hash = 0;
    if (str == null || str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}



export function formatTimestampToDate(timestamp) {
    return moment(timestamp).format('LLLL');
}