export default function TodoItem({todo,onRemove,onToggle}){
    return(
        <li>
            <span onClick={onToggle}
            style={{textDecoration:todo.done ? 'line-through':'none',cursor:'pointer'}}
            >
            {todo.text}
            </span>
            <button onClick={onRemove}>삭제</button>
        </li>
    )
}