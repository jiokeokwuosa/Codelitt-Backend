# GraphQl && NodeJs
## Instructions
Backend using Node and GraphQL arquitecture -->Codelitt

### The Task

In this task, we are building backend of an application that helps us in managing our team using GraphQL.

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

## Requirements and Installation

To install and run this project you would need to have installed:
- Node Js
- Git

To run:
```
$ git clone https://github.com/jiokeokwuosa/Codelitt-Backend or use the local copy
$ cd Codelitt-Backend
$ npm install
$ npm run 
```

## Testing
```
mocha and chai
$ npm test
```

## Pivotal Tracker stories

None

## Docker

Look for the docker image in the src/ folder

## API

The API is currently in version 1 (v1) and can be accessed locally via [http://localhost:5000/graphql](http://localhost:5000/graphql)


## API Documentation Link

None

## Author

Okwuosa Chijioke (Okwuosachijioke@gmail.com)

## License

This is licensed for your use, modification and distribution under the [MIT license.](https://opensource.org/licenses/MIT)

## My Env Variables
NODE_ENV=development
PORT=5000
ATLAS_URL=mongodb+srv://jiokeokwuosa:jiokeokwuosa@chijiokedb-hepo3.mongodb.net/test?retryWrites=true&w=majority

