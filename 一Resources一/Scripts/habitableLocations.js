function habitableLocations () {
    return DataviewAPI.pages('#location/habitable')
        .sort(l => l.file.mtime, 'desc')
}
module.exports = habitableLocations;