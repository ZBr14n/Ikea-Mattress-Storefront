# Ikea-Mattress-Storefront
Ikea e-ecommerce storefront implemented with HTML, CSS, React.js (Context API for global state handling and React-Router for site navigation specifically). Other libraries used include react-bootstrap and styled-components CSS styles and layout structure.

### Live Demo:
https://ikea-mattress-storefront.netlify.app/



# How to run this in localhost for testing:
- Download the zip file for this projoect.
- Extract it to your local desktop/document folder.
- Navigate to the extracted folder's root directory.
- Copy the address of the folder.
- Open command prompt and do 'cd [address_name]'
- Enter 'npm install' and wait until it finishes.
- Enter 'npm start' to start the project in localhost:3000/




### 5/22/2020:
Finally deployed live with many bugs fixed. This is a full featured e-commerce website with complete checkout process.

### Things to add and improve on:
- Make the storefront responsive on mobile device (iPhone 6 at the least).
- Add user authentication (OAuth or JWT perhaps) for user account creation and login.
- Add backend service using nodejs/mysq to hold incoming data.


-----------------------------------------------------

### 5/4/2020
I spent a few days learning and tinkering a bit of how Redux works in React.js. I have looked through documentations and tutorials, but I am still not able to apply it to this project.
I wanted to apply Redux as a global store to keep track of the entire checkout process for this storefront app. Unforunately, Redux has a lot of boilerplate and I got really confuse along the way. Luckily, I found out about useContext API which is a lighter solution of Redux. Since it was easier to set up, this was what I chose as a global store provider for my use case in sharing data across my components. 

I found help when I was stuck on how useContext value can be changed in child components.

https://dev.to/efearas/how-to-usecontext-and-set-value-of-context-in-child-components-in-3-steps-3j9h

-------------------------------------------------

### 5-7/2020-5/9/2020
Today I made some progress with displaying the correct item based on user selection for the cart page. I am still stuck on getting the quantity to reflect on the cart (I hope to revisit this) near the end. I am trying to get every other checkout pages completed and styled. Lastly for today, I was able to add MemoryRouter as part of the react-router library (this will hide the URL links and add nested routing for the checkout pages).

-----------------------------------------------------

### 5/12/2020
Implemented 'Add to Cart' button. This will record user selection to add the item to the cart. If the user goes back to the Product page and pick the same item, the cart page will increment that item's quantity as follows. If user selects the same item, but with a different size mattress, the cart will record it as separate item and update the quantity as well. Therefore, the item's unique id and item size is important in separating items from each if they have the same id but different size. 

-----------------------------------------------------

### 5/14/16 - 5/16/2020
After a couple days of trial and error and troubleshooting an issue where an item's quantity is not displaying correctly, it turns out that I need to set "<tr key={entry.uniqueID}>" when map() is called. Before, the quantity was wrong and it kept on transfering it to the next array element. By giving a unique ID, this will imply that the entire row is distinct from every other when map() is called. So when it comes time to remove an item from the cart, there would be no incorrect data that is passed on to the next item after re-rendering the componenet each time the remove button is pressed. 
  
  
  

