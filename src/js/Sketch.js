
const Sketch = (p) => {
    p.setup = () => {
        p.createCanvas(400,400)
    }

    p.draw = () => {
        p.background(0)
        p.circle(p.width/2,p.height/2, 40)
    }
}

export default Sketch