scenes = dv.pages('#event/scene')
    .filter(s => s.session.path === dv.current().file.path)
    .sort(s => s.index)

output = '> [!example]- Scenes'
scenes.forEach(scene => output += `
> - ${scene.file.link}`)

return output