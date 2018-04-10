class TaskLister {
  // your solution here
  constructor() {
    this.lists = [];
  }

  deleteTask(e) {
    let list = this.lists.find(list => e.target.dataset.listid == list.id);
    let task = list.tasks.find(task => e.target.dataset.id == task.id);
    list.tasks = list.tasks.filter(newTask => newTask.id != task.id);
  }

  deleteList(e) {
    let list = this.lists.find(list => e.target.dataset.id == list.id);
    this.lists = this.lists.filter(newList => newList.id != list.id);
  }

  createList(event) {
    console.log(this)
    event.preventDefault()
    let list = new List($('#new-list-title')[0].value)
    this.lists.push(list)
    listDiv.innerHTML = this.render()
    event.target.reset()
  }

  createTask(event) {
    event.preventDefault()
    let list = this.lists.find(list => list.id == $('#parent-list')[0].value)
    let task = new Task(list, $('#new-task-description')[0].value, $('#new-task-priority')[0].value)
    list.tasks.push(task)
    listDiv.innerHTML = this.render()
    event.target.reset()
  }

  render() {
    return (`
      <form id="create-task-form">
        <label for="parent-list">Select List:</label>
        <select id="parent-list">
          ${this.renderListOptions()}
        </option>
        </select>

        <label for="new-task-description">Task description:</label>
        <input required type="text" id="new-task-description" placeholder="description">

        <label for="new-task-priority">Priority level:</label>
        <input type="text" id="new-task-priority" placeholder="priority">
        <input type="submit" value="Create New Task">
      </form>
      <div id="lists">
        ${this.renderLists()}
      </div>
    `)
  }

  renderLists() {
    return this.lists.map(list => list.render()).join("");
  }

  renderListOptions() {
    return this.lists.map(list => `<option value=${list.id}>${list.name}</option>`)
  }
}
