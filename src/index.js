import { AUTO, Scale, Game } from 'phaser'
import CoronaBusterScene from './scenes/CoronaBusterScene'

const config = {
	type: AUTO,
	backgroundColor: '#32A5E7',
	scale: {
		width: 400,
		height: 620,
		mode: Scale.FIT,
		autoCenter: Scale.CENTER_BOTH,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false,
		},
	},
	scene: [CoronaBusterScene],
}

/* eslint-disable-next-line */
export default new Game(config)
