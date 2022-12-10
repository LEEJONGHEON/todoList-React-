
import React, {useEffect, useState} from "react";
const TodoList = () => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const getData = () => {
        fetch('http://localhost:8181/api/todos')
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setData(json.todoList)
            setCount(json.count)
        })
    }

    const makeLi = () => {
        const list = []
        for(let d of data) {
            list.push(<li key={d.id}>
                할일번호 : {d.id}, 내용: {d.title}, 완료여부{d.done}
            </li>);
        }
        return list;
    }

    useEffect(() => {
        getData();
    }, [])

    const handleAddClick = (e) => {
        const $input = e.target.previousElementSibling;
        const title = $input.value;

    }

    return (
        <>
            <input type="text" placeholder="할일 입력"/>
            <button onClick={handleAddClick}>등록</button>
            <h1 style={{marginTop: '30px'}}>할일 개수 : {count}</h1>
            <ul>
                {makeLi()}
            </ul>
        </>
    );
}

//  export default TodoList;