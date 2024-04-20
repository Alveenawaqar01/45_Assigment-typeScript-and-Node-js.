// Unchanged Magicians: Start with your work from Exercise 40.
//  Call the function make_great() with a copy of the array of magicians’ names. 
//  Because the original array will be unchanged, return the new array and store it in a separate array. 
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great 
//  added to each magician’s name.


let magician:string[]=["Alice","Texla","charlie" ];
function 
show_magicians(magician:string[]) {
     magician.forEach(magician=>{
         console.log(magician);
     });
}
  show_magicians(magician);

  function make_great(magician:string[]): string[] {
     let greatmagicians: string[] =[];
     magician.forEach(magician => {
        greatmagicians.push(`${magician} the great`)
     });
     return greatmagicians;
  }  
  let greatmagicians = make_great(magician.slice())
  console.log("Orginals magicians");
  show_magicians(magician);
  console.log("Great magicians:");
   show_magicians(greatmagicians)
  