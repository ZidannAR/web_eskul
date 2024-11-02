console.log(document.title)

document.title = "hello wrold"


const body = document.body

body.append ('hell najh')

let h1 = document.createElement('h1')

h1.textContent = '<h1>ajay mabar gurinjay</h1>'

const p = document.createElement('p')
p.innerHTML = '<marquee>halo nama saya blajsdbsdibv</marquee>'

const namakamu = document.createElement('b')
namakamu.innerText= '<>namakamu adalah</>'

body.append(h1)
body.append(p)
body.append(namakamu)

const btn1 = document.getElementById('btn1')

btn1.style.border = 'none'
btn1.style.padding = '20px'
btn1.style.background ='white'

function gantiWarna(){
       btn1.style.background = 'aqua'
       console.log('aman')
}
