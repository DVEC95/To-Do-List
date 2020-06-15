import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Buy shopping", highPriority: true},
        {name: "Clean bathroom", highPriority: false},
        {name: "Car's MOT", highPriority: true}
      ],
      newTask: ""
    },
    methods: {
      addNewTask : function(){
        this.tasks.push({
          name: this.newTask,
          highPriority: this.priority
        });
        this.newTask = "";
      }
    }
  });
});
