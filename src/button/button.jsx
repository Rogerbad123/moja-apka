import "./button.css"

function Button(){
    function handleButton(){
        console.log("klik przyciska tako")
    }
    function handleButton2(){
        console.log("normalnie tako najazd na buttona")
    }



    return <>
        <button onClick={handleButton}>click me</button>
        <button onMouseEnter={handleButton2}>najazd na buttona</button>
    </>



}
export default Button
