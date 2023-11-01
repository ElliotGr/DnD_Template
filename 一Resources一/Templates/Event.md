<%*
era = tp.user.currentEra()
date = await tp.system.prompt('Event Date', tp.user.formatDate(tp.user.currentDate()), true)
var location = await tp.system.suggester(l => l.file.folder, tp.user.locations(), true, 'Location:')
-%>
<%await tp.file.move(`-${era}-/${date.split('-')[0]}/${date.split('-')[1]}/${date.split('-')[2]}/${tp.file.title}`)-%>
---
tags:
  - event
fc-calendar: <%tp.user.currentCalendar().name%>
fc-date: <%date%>
location: "<%location.file.link%>"
---

`$= await dv.view('一Resources一/Views/eventHeader')`

<%tp.file.cursor(0)%>