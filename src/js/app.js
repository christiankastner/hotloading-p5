import Sketch from './Sketch'
import * as p5 from 'p5'
var getBy = (id) => {
    return document.getElementById(id)
}

document.addEventListener("DOMContentLoaded", function() {
    new p5(Sketch, getBy('sketch'))
})