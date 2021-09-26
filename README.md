# Codelitt-Backend
## Instructions

The goal of this exercise is to create a backend using Node using a GraphQL arquitecture.

### The Task

In this task, we are building backend of an application that helps us managing our team using GraphQL.

### Features and Requirements
- A member has a name and a type the late one can be an employee or a contractor.
- - If it's a contractor, we want to store the the duration of the contract as an integer.
- - If it's an employee, we need to store their role, for instance: Software Engineer, Project Manager and so on.
- A member can be tagged, for instance: C#, Angular, General Frontend, Seasoned Leader and so on. (Tags will likely be used as filters later, so keep that in mind)
- We need to offer GraphQL CRUD for all the information above.

### Notes:

1. You can use any Node framework
2. Make sure to provide a tutorial on how to run your application
3. Feel free to use any database

## Evaluation
| Functionality     |                                                                | Possible Points |
|-------------------|----------------------------------------------------------------|-----------------|
|                   | Matches the proposed requirements                              |              20 |
|                   | Implements GraphQL correctly                                   |              15 |
|                   | Separation of business logic and persistence layers            |              15 |
|                   | Input validations                                              |               5 |
|                   | Standard HTTP error codes                                      |               5 |
| **Code Quality**  |                                                                |                 |
|                   | Code formatting, readability, maintainability, etc             |               5 |
|                   | Folders and packages structure                                 |               5 |
| **DevOps**        |                                                                |                 |
|                   | Docker image to build/run the project                          |              10 |
|                   | DB migrations                                                  |               5 |
| **Documentation** |                                                                |                 |
|                   | Documentation about the work done, how to run the project, etc |               5 |
| **Testing**       |                                                                |                 |
|                   | Has tests                                                      |              10 |
| **Total**         |                                                                |             100 |


### Bonus Points:
1. If you deploy the application in any server and share the link with us
2. If provide thoughts on what you could improve on your code given more time and incentives
