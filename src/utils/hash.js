export function hashIdGenerator() {
    return Math.floor(Date.now() * Math.random()).toString(36);
}