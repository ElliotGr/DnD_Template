function campaigns () {
    return DataviewAPI.pages('#campaign')
        .sort(c => c.file.name)
}
module.exports = campaigns;