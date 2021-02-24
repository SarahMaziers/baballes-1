class Circle {
    constructor(animation) {
        this.animation = animation
        this.radius = Math.random() * 4 + 1
        this.x = Math.random() * (this.animation.canvas.width - this.radius * 2) + this.radius
        this.y = Math.random() * (this.animation.canvas.height - this.radius * 2) + this.radius
        this.dx = (Math.random() - 0.5) * 4
        this.dy = (Math.random() - 0.5) * 4
        this.minRadius = this.radius
        this.color = Circle.colors.sort(() => 0.5 - Math.random())[0]
    }

    draw() {
        this.animation.c.beginPath()
        this.animation.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.animation.c.fillStyle = this.color
        this.animation.c.fill()
    }

    update() {
        if (this.x + this.radius > this.animation.canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > this.animation.canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        // interact with the mouse

        if (this.animation.mouse.x - this.x < 50
            && this.animation.mouse.x - this.x > -50
            && this.animation.mouse.y - this.y < 50
            && this.animation.mouse.y - this.y > -50) {
            if (this.radius < Circle.maxRadius) {
                this.radius += 1
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1
        }


        this.draw()
    }

    static get colors() {
        return ['#9C7785', '#474457', '#DFCDDD', '#E8B452', '#D6384F']
    }

    static get maxRadius() {
        return 40
    }
}

export default Circle