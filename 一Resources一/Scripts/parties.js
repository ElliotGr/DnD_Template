function parties() {
    return DataviewAPI.pages('#faction/party')
        .sort(p => p.file.name)
}
module.exports = parties;