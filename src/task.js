let taskId = 0

class Task {
  // your code here
  constructor(list, description, priority) {
    this.description = description
    this.priority = priority
    this.list = list
    this.id = taskId++
  }

  render() {
    return (`
      <li>
        Task: ${this.description}
        <button data-listid="${this.list.id}" data-id="${this.id}" data-task-name="mocha" class="delete-task">
            X
        </button>
        <br>
        Priority: ${this.priority}
      </li>
    `)
  }
}
