# **animations**
---
A simple to learn and use API for custom animations in HTML5; supporting both Typescript and ES6.
> See **'installation'** for obtaining the API.

> See **'usage'** for learning how to use the API.  

## **installation**
---
Simply install the repository using npm.
```shell
#Assuming you are in your project's directory
npm i @dyrektrypt/animations
```
And that's it! Now all you need to do is import desired custom animations.

Please note if using Typescript, the tsconfig property `moduleResolution: node` should be present in order to support npm imports.

## **usage**
---
Custom animations work similar to the normal DOM `Animation` object but add extra functionality; controlling how properties change - rather than just changing properties over a set interval.

Animations come with at least two methods:
* (async) play - start and run the animation, using the `playClassValue`.
* (async) halt - stop and reset the animation, using the `haltClassValue`.

To use animations, create an instance of the desired custom animation, which follows the constructor:
```
constructor(elements: Array<HTMLElement>, animationConfig: AnimationConfig)
```
Noting `AnimationConfig` being an object with properties:
* `playClassValue: string = ''`
* `haltClassValue: string = ''`
* `interval: number`

The current custom animations are as follows:
* LoadAnimation:
  * play - loads properties linearly, detaching the `haltClassValue` and attaching the `playClassValue` after a set `interval`.
  * halt - unloads elements linearly, detaching the `playClassValue` and attaching the `haltClassValue`. 
* BlinkAnimation:
  * play - makes properties blink, switching between the `playClassValue` and then the `haltClassValue` every set `interval`.
  * halt - stops the elements from blinking, detaching the `playClassValue` and attaching the `haltClassValue`.

New custom animations are always welcome!

To enforce good coding conventions, animations change only the `class` property on HTML elements. However animations are declarative, and will only change values defined in the constructor - preventing the need to hard code all class names in an instance.

An example of this:
### HTML5
```HTML
<input class="main-input hidden"/>
```

### ES6
```ES6
import { BlinkAnimation } from '@dyrektrypt/animations'

//Fetch all 'main-input' elements
let elements = document.getElementByClassName('main-input')

//Create a new blinking animation
let blinkAnimation = new BlinkAnimation(elements, {
    haltClassValue: 'hidden', //The value for halting will be 'hidden'
    interval: 100 //The animation will be called every 100ms
})

blinkAnimation.play()
```
This will cause the input field to start 'blinking', switching between being `'hidden'` and `''`.

Notice how only the `'hidden'` is declared in the constructor, this causes `'main-input'` to remain untouched.

---