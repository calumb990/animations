//Non-API module

interface AnimationConfig {
    playClassValue?: string
    haltClassValue?: string
    interval: number
}

abstract class _Animation {
    protected readonly elements: Array<HTMLElement>
    protected readonly playClassValue: string
    protected readonly haltClassValue: string
    protected readonly interval: number

    protected constructor(elements: Array<HTMLElement>, animationConfig: AnimationConfig) {
        this.elements = elements
        this.playClassValue = animationConfig.playClassValue || ''
        this.haltClassValue = animationConfig.haltClassValue || ''
        this.interval = animationConfig.interval
    }

    protected sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    protected reset(element: HTMLElement, replaceValue: string, appendValue: string): void {
        let classNames = ((element?.getAttribute('class') || '').replace(new RegExp(replaceValue || appendValue + '|' + appendValue || replaceValue, 'g'), '') + ' ' + appendValue + ' ').trim()
    
        if (classNames === '') {
            element.removeAttribute('class')
    
        } else {
            element.setAttribute('class', classNames)
        }
    }

    abstract play(): Promise<void>

    abstract halt(): Promise<void>
}

export { _Animation, AnimationConfig }