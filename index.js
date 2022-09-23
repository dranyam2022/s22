/*
    Create functions which can manipulate our arrays.
*/

let registeredUsers = [

    "James Jeffries",
    "Gunther Smith",
    "Macie West",
    "Michelle Queen",
    "Shane Miguelito",
    "Fernando Dela Cruz",
    "Akiko Yukihime"
];

let friendsList = [];

/*
    
   1. Create a function which will allow us to register into the registeredUsers list.
        - this function should be able to receive a string.
        - determine if the input username already exists in our registeredUsers array.
            -if it is, show an alert window with the following message:
                "Registration failed. Username already exists!"
            -if it is not, add the new username into the registeredUsers array and show an alert:
                "Thank you for registering!"
        - invoke and register a new user.
        - outside the function log the registeredUsers array.

*/
function register(newUser) {
    if (registeredUsers.includes(newUser)) {
        alert("Registration failed. Username already exists!");
    } else {
        registeredUsers.push(newUser);
        alert("Thank you for registering!");
    }
}

register("Maynard");

console.log(registeredUsers);



/*
    2. Create a function which will allow us to add a registered user into our friends list.
        - this function should be able to receive a string.
        - determine if the input username exists in our registeredUsers array.
            - if it is, add the foundUser in our friendList array.
                    -Then show an alert with the following message:
                        - "You have added <registeredUser> as a friend!"
            - if it is not, show an alert window with the following message:
                - "User not found."
        - invoke the function and add a registered user in your friendsList.
        - Outside the function log the friendsList array in the console.

*/
function addFriend(newFriend) {
    if (registeredUsers.includes(newFriend)) {
        friendsList.push(newFriend);
        alert(`You have added ${newFriend} as a friend!`);
    } else {
        alert("User not found.")
    }
}

addFriend("Macie West");
console.log(friendsList)

/*
    3. Create a function which will allow us to show/display the items in the friendList one by one on our console.
        - If the friendsList is empty show an alert: 
            - "You currently have 0 friends. Add one first."
        - Invoke the function.

*/
function listFriends() {
    if (!friendsList.length) {
        alert("You currently have 0 friends. Add one first.");
    } else {
        friendsList.map((friend) => console.log(friend));
    }
}

listFriends();

/*
    4. Create a function which will display the amount of registered users in your friendsList.
        - If the friendsList is empty show an alert:
            - "You currently have 0 friends. Add one first."
        - If the friendsList is not empty show an alert:
            - "You currently have <numberOfFriends> friends."
        - Invoke the function

*/

function numberOfFriends() {
    if (!friendsList.length) {
        alert("You currently have 0 friends. Add one first.");
    } else {
        alert(`You currently have ${friendsList.length} friends.`)
    }
}

numberOfFriends();

/*
    5. Create a function which will delete the last registeredUser you have added in the friendsList.
        - If the friendsList is empty show an alert:
            - "You currently have 0 friends. Add one first."
        - Invoke the function.
        - Outside the function log the friendsList array.

*/

function deleteLastFriend() {
    if (!friendsList.length) {
        alert("You currently have 0 friends. Add one first.")
    } else {
        friendsList.pop();
    }
}

deleteLastFriend();
console.log(friendsList);

/*
    Stretch Goal:

    Instead of only deleting the last registered user in the friendsList delete a specific user instead.
        -You may get the user's index.
        -Then delete the specific user with splice().

*/

function deleteFriend(index) {
    if (!friendsList.length) {
        alert("You currently have 0 friends. Add one first.")
    } else {
        friendsList.splice(index, 1);
    }
}





