Prism.languages.ini= {
	'comment': /^[ \t]*;.*$/m,
	'important': /\[.*?\]/,
	'constant': /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
	'attr-value': {
		pattern: /=.*/,
		inside: {
			'punctuation': /^[=]/
		}
	}
};