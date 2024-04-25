#! /usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let condition = true;
console.log("\n \t Welcome To MRC Todo-List Application\n");
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
    }
};
//Function to add task in Todo-List
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:"
        }
    ]);
    todosList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List`);
};
// Function to view all Todo_List Task 
let viewTask = () => {
    console.log("\n Your Todo-List: ");
    todosList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
//Function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: " Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deleteTask = todosList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully from your Todo_List`);
};
//Function to update a task
let updateTask = async () => {
    await viewTask();
    let UpdateTaskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index no of task the task you want to update:",
        },
        {
            name: "newTask",
            type: "input",
            message: "Now enter new task the name:",
        }
    ]);
    todosList[UpdateTaskIndex.index - 1] = UpdateTaskIndex.newTask;
    console.log(`\n Task at index no: ${UpdateTaskIndex.index - 1} updated successfully (Please view your Todo-list)`);
};
main();
