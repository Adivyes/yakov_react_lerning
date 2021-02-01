import './Home.css'
import Header from './Header'
export default function Home(itWillBePropsAnyWay) {
    let text = "this is home"
    let title = "titel"
    const personDit = itWillBePropsAnyWay
    let nextYear = itWillBePropsAnyWay.age +1
    return (
        
        <div class = "home">
        <pre>{JSON.stringify(personDit)}</pre>
            <h1 id="hader">{text}</h1>
            <h2 id={`${title}Id`}>hello world</h2>
            <h3>hello my name is {personDit.name} and im {personDit.age} years old</h3>
            <h3>and next year i will be {nextYear} </h3>
            <Header userName = "david"/>

        </div>
    )
}
Home.defaultProps = {
    name: "luffi",
    age: 25
}