// Write your code here
import './index.css'

const TodoItem = props => {
  const {TodoItemList, onDeleteItem} = props
  const {title, id} = TodoItemList

  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <div className="list-item-container">
      <li className="list-item">
        <h1 className="todo-title">{title}</h1>
        <div className="button-align">
          <button className="button" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
