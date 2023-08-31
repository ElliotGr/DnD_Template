function settings() {
    return DataviewAPI.pages('#location/setting')
        .sort(c => c.file.name)
}
module.exports = settings;