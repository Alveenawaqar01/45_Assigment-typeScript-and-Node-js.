// Checking Usernames: Do the following to create a program 
// that simulates how websites ensure that everyone has a unique username.

let current_users:string []= ["user1","admin","user3","user4","user5"];

let new_users:string []= ["user1","user6","user7","admin","user9"];
 new_users.forEach (new_users => {
    if (current_users.some(current_users =>
        current_users.toLocaleLowerCase() ===new_users.toLowerCase())) {
            console.log(`${new_users} will need to enter a new username.`);
        }  else {
            console.log(`${new_users} is available.`);
        }
 });