import './list.css'

function List(){
    const numbers = [231, 23, 41, 56, 67, 77, 23]
    const people = [{name: "maciek", age: '12'}, {name: "marek", age: '87'}]
    const parsed = numbers.map((val) => val * 100)
    return <>
    <div>{parsed.map((val)=>{return <p>{val}</p>})}</div>
    <div>{people.map((val,i) => 
    {return <div key={1} className='person>'><span>{val.name},</span>,<span>{val.age}</span></div>}
    )}
    </div>
    </>

}
export default List