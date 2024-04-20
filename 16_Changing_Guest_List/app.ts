// Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. 
//Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.



let guests= ["Alveena","Kinza","Hoorain"]
guests.forEach(Guest=> {
         console.log(`Dear ${Guest} , would you like to join me for Dinner?`);
         
});
   //Replace the guest
   let unableToAttend= "Hoorain";
   console.log(`${unableToAttend}, can't make the Dinner.`);

   
       let newGuest = "Fatima";
       guests[guests.indexOf(unableToAttend)] = newGuest

   
   //New invitation
      guests.forEach(guests => {
        console.log(`Dear ${guests} would you like to join me for Dinner.`);
        
      });
