function nextIndexScene (session) {
    sessionScenes = DataviewAPI.pages('#event/scene')
        .filter(s => s.session.path === session.file.path)
        .sort(s => s.index, 'desc')
    return sessionScenes.length > 0 ? sessionScenes.first().index + 1 : 1
}
module.exports = nextIndexScene;