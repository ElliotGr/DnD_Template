<%*
party = await tp.system.suggester(p => p.file.name, tp.user.parties(), true, 'Party:')
player = await tp.system.suggester(p => p.file.name, tp.user.players(), true, 'Player:')
-%>
<%await tp.file.move(`${player.file.folder}/-Characters-/${tp.file.title}/${tp.file.title}`)-%>
---
aliases:
  - 
tags:
  - character/player
---

%%
factions:: <%party.file.link%>
player:: <%player.file.link%>
%%

`$= await dv.view('一Resources一/Views/playerCharacterHeader')`

<%tp.file.cursor(0)%>