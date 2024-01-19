class Task {
    constructor(name, status = 'in Progre') {
       this.name = name;
       this.status = status;
    }
   }
   
   class TodoList {
    constructor() {
       this.tasks = [];
    }
   
    addTask(task) {
       this.tasks.push(task);
    }
   
    removeTask(taskName) {
       this.tasks = this.tasks.filter(task => task.name !== taskName);
    }
   
    updateTaskStatus(taskName, newStatus) {
       this.tasks.forEach(task => {
         if (task.name === taskName) {
           task.status = newStatus;
         }
       });
    }
   
    printTasks() {
       console.log('Task Name'.padEnd(20) + 'Status'.padEnd(20));
       this.tasks.forEach(task => {
         console.log(task.name.padEnd(20) + task.status.padEnd(20));
       });
    }
   }
   