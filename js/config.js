export class Config {
	constructor() {
		this.width = 500;
		this.height = 500;
		this.gravity = 0.3;
		this.jump = -6;
		this.tps = 60;
		this.pipe_spawn_rate = 2;
		this.pipe_speed = 2.5;
		this.hole_size = 100;
		this.background_speed = 0.5;
		this.speed_multiplier = 1;
		this.debug_mode = false;
		this.paused = false;
		this.animate_bird = true;
		this.keybinds = {
			flap: " ",
			pause: "p",
		}
	}
}