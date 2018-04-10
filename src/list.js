let listId = 0

class List {
  // your code here
  constructor(name) {
    this.name = name
    this.id = listId++
    this.tasks = []
  }

  render() {
    return (`
      <div id="${this.id}">
        <h2>${this.name}
          <button data-id="${this.id}" class="delete-list">
            X
          </button>
        </h2>
        <ul>
          ${this.renderTasks()}
        </ul>
      </div>
  `)}

  renderTasks() {
    if (this.tasks.length > 0) {
      return this.tasks.map(task => task.render()).join("")
    } else {
      return "No tasks added"
    }
  }
}
