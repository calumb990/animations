import { _Animation, AnimationConfig } from './internal/Animation'


class BlinkAnimation extends _Animation {
    private hidden = false
    private blinker = 0 
    private index = 0

    constructor(elements: Array<HTMLElement>, animationConfig: AnimationConfig) {
        super(elements, animationConfig)
    }

    async play() {

        if (this.index === this.elements.length) {
            this.hidden = !this.hidden
            this.index = 0
        }

        if (!this.hidden) {
            super.reset(this.elements[this.index], this.haltClassValue, this.playClassValue)
            this.index++

        } else {
            super.reset(this.elements[this.index], this.playClassValue, this.haltClassValue)
            this.index++
        }

        this.blinker = setTimeout(this.play.bind(this), this.interval)
    }

    async halt() {
 
        clearTimeout(this.blinker)
        this.elements.forEach(character => {
            super.reset(character, this.playClassValue, this.haltClassValue)
        })
    }
}

export { BlinkAnimation }