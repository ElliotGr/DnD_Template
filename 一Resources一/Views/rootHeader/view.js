children = dv.pages('#location')
	.filter(l => l.location)
	.filter(l => l.location.path === dv.current().file.path)
	.sort(l => l.file.name)
if (children.length > 0) {
	dv.span(`↓ ${children.file.link.array()}`)
}
characters = dv.pages('#character')
	.filter(c => c.location)
	.filter(c => c.location.path === dv.current().file.path)
if (characters.length > 0) {
	calloutCharacters = '> [!example]- Characters'
	characters.forEach(character => calloutCharacters += `
> - ${character.file.link}`)
	dv.span(calloutCharacters)
}