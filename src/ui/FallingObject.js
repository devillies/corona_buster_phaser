import { Physics } from 'phaser'

export default class FallingObject extends Physics.Arcade.Sprite {
	constructor(scene, x, y, texture, config) {
		super(scene, x, y, texture)
		this.scene = scene
		this.speed = config.speed
		this.rotationalVal = config.rotation
	}

	spawn(positionX) {
		this.setPosition(positionX, -10)
		this.setActive(true)
		this.setVisible(true)
	}

	die() {
		this.destroy()
	}

	update() {
		this.setVelocityY(this.speed)
		this.rotation += this.rotationalVal

		const gameHeight = this.scene.scale.height
		if (this.y > gameHeight + 5) {
			this.die()
		}
	}
}
