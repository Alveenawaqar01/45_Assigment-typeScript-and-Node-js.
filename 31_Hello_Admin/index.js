// Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//  Loop through the array, and print a greeting to each user:
let usernames = ["Admin", "user1", "user2", "user3", "user4"];
usernames.forEach(usernames => {
    if (usernames === "Admin") {
        console.log("Hello Admin, would you like to you status report?");
    }
    else {
        console.log(`Hello ${usernames},thank you for logging in again.`);
    }
});
export {};
