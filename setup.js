// super dirty hacks for legacy modules requiring global jQuery
global.$ = require('jquery')
global.window = { $: require('jquery') }