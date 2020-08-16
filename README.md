# Car-dekho-challenge
## Requirement
Back End: NodeJS
Database: MongoDB
Front End: React or Angular
 
## Server-side
- We've provided some .csv files, please use them to store some details into MongoDB.
- Make a route `/user/login` for user login
- Make a route `/user/register` for user registration 
- Make a route `/car/details` for fetching the details for the car based of selected make, model, and trim.
- It should have some query parameters too:  For eg if I'd like to fetch a list of make: `/car/details?cmd='getMakes'` 
For eg if I'd like to fetch model for make='audi': `/car/details?cmd='getModels'&make="audi"` 
For egif  I'd like to fetch trims for make='audi' and model='A3': `/car/details?cmd='getTrims'&make="audi"&model="A3"` 
Show all these details of trims in the page which is defined in `trim.csv` file.  
## Client-side 
We need a website where the user can search for car details of his desired filter selection.
- We need a login page asking for username and password. 
- Redirect the users to `/cars` page after login:
  - This page should have 3 dropdowns to show all the details of the filtered cars, and a button `Show Data` 
    - make 
    - model
    - trim 
  - By default the page will show only the dropdowns (mentioned above), and only make dropdown will be populated. 
  - After selecting 1 item from the make dropdown, the model dropdown should get populated (list will come from an api call). 
  - Then after selecting 1 item from the model dropdown, then the trim dropdown should get populated (list will come from an api call) 
And so on…..
  - At last, clicking on the “Show Data” button, should show the details (defined in the provided `trim.csv` file)
  - We also want a toggle to show the list into grid view or list view. 

##### VERY IMPORTANT (DO NOT MISS THIS)
  - There should be a button to navigate it to `/admin` route. From admin page only admin user could add new car details; it should be done in a way when we add a new car detail first validate the user authentication whether its an  admin or non-admin user. **(Use JWT token for auth)** 

  - When admin user is adding a new car detail, then it should be **real-time (Preferably GraphQL, socket.io).** To do that, add a new detail in a browser and check in another browser without reloading the page whether you can see the newly added car details or not. 

## Deliverables:
1. Checkout a branch of your name from the master branch. 
2. Complete this challenge in that branch with proper commits. 
3. Code should be very clean and understandable. 
4. Project should be run error free. 
5. Make a file where you tell us about the challenges you came across and how you solved it. 
6. How much time taken to complete this challenge?
