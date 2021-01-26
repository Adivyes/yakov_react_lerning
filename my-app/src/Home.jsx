import './Home.css'

export default function Home() {
    let text = "this is home"
    let titleId = "titel"
    return (
        <div class = "home">
            <h1 id="hader">{text}</h1>
            <h2 id={titleId}>hello world</h2>
        </div>
    )
}
