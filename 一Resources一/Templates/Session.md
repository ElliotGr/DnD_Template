<%*
campaign = await tp.system.suggester(c => c.file.name, tp.user.campaigns(), true, 'Campaign:')
index = tp.user.nextIndexSession(campaign)
party = await tp.system.suggester(p => p.file.name, tp.user.parties(), true, 'Party:')
playerCharacters = tp.user.partyCharacters(party)
-%>
<%await tp.file.move(`${campaign.file.folder}/Session ${index}/Session ${index}`)-%>
---
aliases:
  - <%campaign.file.name%>, Session <%index%>
tags:
  - session
campaign: "<%campaign.file.link%>"
index: <%index%>
irl-date: <%tp.date.now()%>
parties: "<%party.file.link%>"
player characters: <%*
playerCharacters.forEach(character => tR += `
  - "${character.file.link}"`)
%>
---

`$= await dv.view('一Resources一/Views/sessionHeader')`

<%tp.file.cursor(0)%>