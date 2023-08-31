function locations () {
    return DataviewAPI.pages('#location')
        .sort(l => l.file.mtime, 'desc')
}
module.exports = locations;