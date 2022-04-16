# team_profile_generator


    5. create function to initialize the app
        --divide it up based on employee
            --inquire prompts split up by role
            --some that are universal

                 --all teams need at least one manager, create a nested function to generate a manager with inquire prompts
                      --create a new Manager object using the manager class and the data from the inquier prompts
                      --push that object to the array of employees
            
            --do the same thing for Intern, and engineer 
                --set them up as separate functions within the bigger function
            
            --use a prompt to ask if you'd like to create another employee or finish generating your team--use conditionals for logic
                --switch statement or if else statements

            --create a function that stops the inquirer prompts and generates the html page
                -use fs to write this file to the dist folder
                

6.  create a helper function in your src folder to generate HTML file (smilar to generateMarkdown in your README generator)
    -generate employee ccards for each type of employee, pass in the data from inquier prompts
    -create an array to store the html, and then push html for each employee into the array and return as a string at the end
    -make sure you're exporting this function and importing it to your index file

7.




1. create an index.js that prompts a user to ask questions
2. use inquierer to ask questions and store the information
    --figure out how to use inquier to keep asking questions
3. have the information open up into a new HTML document
    --create an outline in the html document that holds the information for each employee
    --create a seperate folder that holds the HTML
4. have classes with functions for each response
    --create functions that pull the information that we want to use
5. have test for each function
    --create a test for engineer, intern, manager and employee
6. create css for the html so that it looks nice
    --use bootstrap to make it look nice

    if you click on either of the names it will bring you through the questions otherwise it if you click no more it will stop the prompts---look at inquirer documentation