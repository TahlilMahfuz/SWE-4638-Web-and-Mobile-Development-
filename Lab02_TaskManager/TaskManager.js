"use strict";

class TaskManager {
  constructor(tasksInfo, id, callback) {
    this.id = id;
    this.callback = callback;
    this.tasks = tasksInfo;
  }

  render(date) {
    const container = document.getElementById(this.id);
    const table = document.createElement("table");
    table.setAttribute("border", "1");

    const navigationRow = document.createElement("tr");
    const tdLeftArrow = document.createElement("td");
    const tdMerged = document.createElement("td");
    const tdRightArrow = document.createElement("td");

    const leftArrow = document.createElement("span");
    leftArrow.innerHTML = "&larr;";
    leftArrow.style.cursor = "pointer";
    leftArrow.addEventListener("click", () => this.updateWeek(date, -8));
    tdLeftArrow.appendChild(leftArrow);

    const startDate = new Date(date);
    startDate.setDate(date.getDate() - date.getDay() + 1);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    tdMerged.setAttribute("colspan", "2");
    tdMerged.appendChild(
      document.createTextNode(
        startDate.toLocaleDateString() + " - " + endDate.toLocaleDateString()
      )
    );

    const rightArrow = document.createElement("span");
    rightArrow.innerHTML = "&rarr;";
    rightArrow.style.cursor = "pointer";
    rightArrow.addEventListener("click", () => this.updateWeek(date, 8));
    tdRightArrow.appendChild(rightArrow);

    navigationRow.appendChild(tdLeftArrow);
    navigationRow.appendChild(tdMerged);
    navigationRow.appendChild(tdRightArrow);
    table.appendChild(navigationRow);

    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1);

    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(startOfWeek);
      currentDay.setDate(startOfWeek.getDate() + i);

      const tr = document.createElement("tr");
      const tdDay = document.createElement("td");
      const tdTaskContainer = document.createElement("td");
      tdDay.appendChild(
        document.createTextNode(
          currentDay.toLocaleDateString("en-US", { weekday: "short" })
        )
      );
      tr.appendChild(tdDay);

      const tasksForDay = this.tasks.filter((task) => {
        return task.dueDate.toDateString() === currentDay.toDateString();
      });

      tasksForDay.sort((a, b) => a.priority - b.priority);

      tasksForDay.forEach((task) => {
        const taskRow = document.createElement("div");
        taskRow.appendChild(document.createTextNode(task.name));
        taskRow.style.cursor = "pointer";
        taskRow.addEventListener("click", () => this.handleTaskClick(task));
        tdTaskContainer.appendChild(taskRow);
      });

      tr.appendChild(tdTaskContainer);
      table.appendChild(tr);
    }

    container.innerHTML = "";
    container.appendChild(table);
  }

  handleTaskClick(task) {
    this.callback([task]);
    console.log(`Task Info: ${task.name}/${task.dueDate} Priority:${task.priority}`);
  }

  updateWeek(date, daysToAdd) {
    // Update the week by adding or subtracting days
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + daysToAdd);
    this.render(newDate);
  }
}