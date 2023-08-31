scenes = dv.pages('#event/scene')
	.filter(s => s.session.path === dv.current().session.path)
	.sort(s => s.index)
scenes.innerHTML = null;
currentIndex = scenes.indexOf(dv.current())
session = dv.pages('#session')
	.filter(s => s.file.path === dv.current().session.path)
	.first()

navRoot = dv.el('div', "", {cls: 'navigation-container'})
navRoot.innerHTML = null

if (currentIndex > 0) {
	dv.el('div', `← ${scenes[currentIndex - 1].file.link}`, {container: navRoot, cls: 'navigation-back navigation-element'})
} else {
	dv.el('div', '', {container: navRoot, cls: 'navigation-back navigation-element'})
}

dv.el('div', `↑ ${session.file.link}`, {container: navRoot, cls: 'navigation-up navigation-element'})

if (currentIndex < scenes.length - 1) {
	dv.el('div', `${scenes[currentIndex + 1].file.link} →`, {container: navRoot, cls: 'navigation-forward navigation-element'})
} else {
	dv.el('div', '', {container: navRoot, cls: 'navigation-forward navigation-element'})

}