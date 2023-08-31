<%* 
var location = await tp.system.suggester(l => l.file.folder, tp.user.locations(), true, 'Location:')
-%>
<%await tp.file.move(`${location.file.folder}/${tp.file.title}/${tp.file.title}`)-%>
---
aliases:
  - 
tags:
  - location
---

%%
location:: <%location.file.link%>
%%

`$= await dv.view('一Resources一/Views/locationHeader')`

<%tp.file.cursor(0)%>
