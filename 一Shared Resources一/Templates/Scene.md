<%*
session = tp.user.latestSession()
campaign = tp.user.linkToFile(session.campaign)
index = tp.user.nextIndexScene(session)
var location = await tp.system.suggester(l => l.file.folder, tp.user.locations(), true, 'Location:')
-%>
<%await tp.file.move(`${session.file.folder}/Scene ${index}`)-%>
---
aliases:
  - <%campaign.file.name%>, <%session.file.name%>, Scene <%index%>
tags:
  - event/scene
fc-calendar: <%tp.user.currentCalendar().name%>
fc-category: <%campaign.file.name%>
fc-date: 
  year: <%tp.user.currentDate().year%>
  month: <%tp.user.currentDate().month + 1%>
  day: <%tp.user.currentDate().day%>
index: <%index%>
---

%%
session:: <%session.file.link%>
location:: <%location.file.link%>
%%

`$= await dv.view('一Resources一/Views/sceneHeader')`

<%tp.file.cursor(0)%>
