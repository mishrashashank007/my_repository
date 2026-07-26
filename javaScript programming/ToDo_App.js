let todo = ["Buy groceries", "Clean the house", "Finish homework"];

while (true)
{
    let choice = prompt("Tell your choice");
    console.log(choice);

    
    if (choice == "list")
        {
            console.log("Here is your list of tasks:");
            console.log("=================================");
            
            for(let i = 0; i < todo.length; i++)
                {
                    console.log(`${i+1}. ${todo[i]}`);
                }
                console.log("=================================");
        }
            
            else if (choice == "delete") 
                {
                    let task = prompt("Tell the task no. you want to delete");
                    console.log(task);
                    if (task > 0 && task <= todo.length)
                        {
                            console.log(`Deleting task number ${task}`);
                            todo.splice(task - 1, 1);
                            console.log("Task deleted successfully.");
                            console.log("Here is your updated list of tasks:");
                            for(let i = 0; i < todo.length; i++)
                                {
                                    console.log(`${i+1}. ${todo[i]}`);
                                }   
                        }
                            else
                                {
                                    console.log("Invalid task number. Please enter a valid task number.");
                                }
                }
                            
                            else if (choice == "add")
                                {
                                    let task = prompt("Please enter the task you want to add.");
                                    todo.unshift(task);
                                    console.log("Task added successfully.");
                                }

                            else if (choice == "quit") 
                                {
                                    console.log("Thank you for using the To Do App!");
                                    break;
                                }
}