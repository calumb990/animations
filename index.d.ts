declare module '@dyrektrypt/animations' {

    interface AnimationConfig {
        playClassValue?: string
        haltClassValue?: string
        interval: number
    }

    export class BlinkAnimation {

        constructor(elements: Array<HTMLElement>, animationConfig: AnimationConfig)

        play(): Promise<void>

        halt(): Promise<void>
    }
    
    export class LoadAnimation {

        constructor(elements: Array<HTMLElement>, animationConfig: AnimationConfig)

        play(): Promise<void>

        halt(): Promise<void>
    }
}