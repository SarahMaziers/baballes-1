import Circle from "./Circle";

const animation = {
    canvas: document.querySelector('canvas'),
    c: undefined,
    circlesArray: [],
    circlesCount: 80,
    mouse: {
        x: undefined,
        y: undefined
    },
    requestId: 0,

    init() {
        this.circlesArray = []
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.c = this.canvas.getContext('2d')
        for (let i = 0; i < this.circlesCount ; i++) {
            this.circlesArray.push(new Circle(this))
        }
        if (this.requestId !== 0) window.cancelAnimationFrame(this.requestId)
        this.animate()
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.circlesArray.forEach(circle => circle.update())
        this.requestId = window.requestAnimationFrame(function () {
            animation.animate()
        })
    }
}

window.addEventListener('mousemove', event => {
    animation.mouse.x = event.x
    animation.mouse.y = event.y
})

window.addEventListener('resize', () => {
    animation.canvas.width = window.innerWidth
    animation.canvas.height = window.innerHeight
    // Probably a bit harsh, but good enough at this point in the training
    animation.init()
})

animation.init()