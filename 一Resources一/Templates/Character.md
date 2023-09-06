<%* 
var location = await tp.system.suggester(l => l.file.name, tp.user.habitableLocations(), true, 'Location:')
-%>
<%await tp.file.move(`${location.file.folder}/-Characters-/${tp.file.title}`)-%>
---
aliases:
  - 
tags:
  - character
---

%%
location:: <%location.file.link%>
%%

`$= await dv.view('一Resources一/Views/characterHeader')`

> [!info]- What do they look like?
> <%tp.file.cursor(0)%>
