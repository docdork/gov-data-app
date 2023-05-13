# Government Data App

3 Pages - Floods, Police Forces, and MPs.

Shows 3 slightly different ways to change the API call to show info based on the user input or selection.

Floods - Fetches and displays a list of current flood warnings. Use the range selector to change the number which changes the API call based on the user inputed severity  - results in a new list.  Click on the details and it displays a different form of the info fetched.

Police - Fetches a list of forces.  This list can then be filtered to the desired Force based on a text input.  When clicked, the ID of the force in the list is used to fetch the details of that force from a seperate API call.


MPs - I prefer the way this API is presented.  2 diferent ways of sending an additional request to the API and fetching MP details.  Option selector, polulated by the initial returned MP list, and clicking on the details button.  Both ways return details from a seperate API using ID from from the first MP list.