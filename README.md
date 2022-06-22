# ToDoListWithReact
Making the static interface dynamic by assigning various functions to the buttons.
**Gains:**
onChange() and onClick() Event Handlers,Dynamic CSS,filter function

**onChange():**
<input
          value={newTitle} 
          onChange={(e) => setnewTitle(e.target.value)} 
          placeholder="Add to the List"
/>

**onClick():**
const addNew = (title) => {
    setList([...liste, { id: Date.now(), title: title, completed: false }]);//Date.now For unique key,//...liste list will be same and add a data
    setnewTitle("");
  };
<button
          onClick={() => {
            addNew(newTitle);
          }}
        >
  
**Dynamic css:**
 ```javascript
   <div className="list">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => markCompleted(item.id)}
            className={item.completed ? "completed" : ""}// if item completed change css "completed"
          >
            {item.title}
          </div>;
```
     
**filter Function:**
     
    const clearCompleted = () => {
    setList(list.filter((item) => !item.completed));//if item not completed don't clear
  };
     <button onClick={() => clearCompleted()} className="clear">
        Clear Completed
      </button>
