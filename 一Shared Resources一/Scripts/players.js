function players() {
    return DataviewAPI.pages('#player')
        .sort(c => c.file.name)
}
module.exports = players;