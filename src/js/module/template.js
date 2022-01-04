// @ts-check

/**
 * 
 * @param {Object} options опции в виде объекта
 * @returns {String}
*/

const getTemplate = (options) => {
	const { text, padding, decorations, width } = options

	const styles = {
		wrap: {
			padding: `padding: ${padding}`,
			background: `background: ${decorations.background}`,
			color: `color: ${decorations.color}`,
			maxWidth: `max-width: ${width}`,
		},
		button: {
			color: `color: ${decorations.color}`,
			fontSize: `font-size: ${decorations.buttonFontSize}`
		}
	}

	return `
		<div class="cookie-popup__wrap" style="${styles.wrap.padding}; ${styles.wrap.color}; ${styles.wrap.background}; ${styles.wrap.maxWidth}">
			<p>${text}</p>
			<button style="${styles.button.color}; ${styles.button.fontSize}" data-type="button">×</button>
		</div>
	`
}

export default getTemplate