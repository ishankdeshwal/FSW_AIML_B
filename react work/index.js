console.log("Hello")
const parent = document.getElementById('root')
console.dir(parent)
const root = ReactDOM.createRoot(parent)

const element = <h1>Hello, world!</h1>
const l1 = <li>Orange</li>
const l2 = <li>Apple</li>
const ul = <ul>{l1}{l2}</ul>
const container = (
<div style={{backgroundColor:"cyan"}}>

    <div>{element}</div>
    <div>{ul}</div>
    
</div>
)
root.render(container);