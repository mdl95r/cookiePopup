import CookiePopup from './module/cookiePopup'

new CookiePopup('#cookie-popup', {
	padding: '20px',
	width: "600px",
	text: 'This website uses cookies to ensure you get the best experience on our website.',
	decorations: {
		background: 'rgba(100, 118, 138, 0.9)',
	}
})