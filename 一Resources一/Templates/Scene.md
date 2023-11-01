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
fc-date: <%tp.user.formatDate(tp.user.currentDate())%>
index: <%index%>
location: "<%location.file.link%>"
session: "<%session.file.link%>"
---

`$= await dv.view('一Resources一/Views/sceneHeader')`

<%tp.file.cursor(0)%>
