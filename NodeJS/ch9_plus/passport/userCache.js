let userCache = {};

exports.userCache = userCache;

exports.removeUserFromCache = (userId) => {
    delete userCache[userId];
}