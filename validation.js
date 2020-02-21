// define Email & password velidation function
function validation(Email, Password) {
  // define exist user list 
  const users = [{
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }]

  //velidation
  const result = users.filter(userData => userData.email === Email && userData.password === Password)

  //return velidation result
  return result.length === 0 ? false : result[0].firstName
}

//export generatePassword function for other file to use
module.exports = validation