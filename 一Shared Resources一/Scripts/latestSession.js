function latestSession() {
    return DataviewAPI.pages('#session')
        .sort(s => s.index, 'desc')
        .sort(s => s['irl-date'], 'desc')
        .first()
}
module.exports = latestSession;