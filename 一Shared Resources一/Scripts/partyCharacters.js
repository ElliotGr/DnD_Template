function partyCharacters(party) {
    return DataviewAPI.pages('#character/player')
        .filter(c => DataviewAPI.array(c.factions).path.array().includes(party.file.path))
        .sort(c => c.file.name)
}
module.exports = partyCharacters;