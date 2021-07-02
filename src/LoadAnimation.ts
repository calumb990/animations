import { _Animation, AnimationConfig } from './internal/Animation'


class LoadAnimation extends _Animation {

    constructor(elements: Array<HTMLElement>, animationConfig: AnimationConfig) {
        super(elements, animationConfig)
    }

    async play() {

        for (let character of this.elements) {
            await super.sleep(this.interval)
            super.reset(character, this.haltClassValue, this.playClassValue)
        }
    }

    async halt() {

        this.elements.forEach(character => {
            super.reset(character, this.playClassValue, this.haltClassValue)
        })
    }
}

export { LoadAnimation }