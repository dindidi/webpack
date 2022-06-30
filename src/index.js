
import './styles.scss'
import img from './univ.jpg'

function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('conntainer')
}


function titleComponent() {
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello world'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image(1920,1080)
    elemImg.src = img
    return elemImg
}

rootStyle()
document.body.appendChild(titleComponent())
document.body.appendChild(imageComponent())