scenes = dv.pages('#session')
    .filter(s => s.campaign.path === dv.current().file.path)
    .sort(s => s.index)

output = '> [!example]- Sessions'
scenes.forEach(scene => output += `
> - ${scene.file.link}`)

return output