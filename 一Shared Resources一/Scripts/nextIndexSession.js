function nextIndexSession (campaign) {
    campaignSessions = DataviewAPI.pages('#session')
        .filter(s => s.campaign.path === campaign.file.path)
        .sort(s => s.index, 'desc')
    return campaignSessions.length > 0 ? campaignSessions.first().index + 1 : 0
}
module.exports = nextIndexSession;