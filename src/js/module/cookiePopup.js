import getTemplate from './template';
import { mergeDeep } from '../utils/deepObjCopy';

export default class CookiePopup {
	constructor(selector, options) {
		let defaultOptions = {
			padding: '20px',
			width: "600px",
			text: 'Test text',
			decorations: {
				color: '#fff',
				background: '#000',
				buttonFontSize: '30px',
			}
		}
		this.options = mergeDeep(defaultOptions, options)

		this.$el = document.querySelector(selector);
		
		this.#render();
		this.#init();
	}


	hide() {
		this.$el.classList.add('cookie-popup_hide');
		localStorage.setItem('cookieHide', 'true');
		setTimeout(() => {
			this.#destroy();
		}, 1000)
	}

	#render() {
		if (this.$el) {
			this.$el.classList.add('cookie-popup');
			this.$el.innerHTML = getTemplate(this.options);
		} else {
			console.error('className cookie-popup is not defined in markup!')
		}
	}

	#init() {
		const btnClose = this.$el.querySelector('[data-type="button"]');
		this.clickHandler = this.clickHandler.bind(this);
		btnClose.addEventListener('click', this.clickHandler);

		const isHide = localStorage.getItem('cookieHide');
		!!isHide && this.#destroy()
	}

	#destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
		this.$el.remove();
	}

	clickHandler() {
		this.hide()
	}
}