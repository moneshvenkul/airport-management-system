# Airport Management System

## Flow for User Registration and User Login
we’re gonna call 2 endpoints:
- POST `api/auth/signup` for User Registration
- POST `api/auth/signin` for User Login

You can take a look at following flow to have an overview of Requests and Responses that Angular 10 Client will make or receive.


...
```

Run `ng serve --port 8081` for a dev server. Navigate to `http://localhost:8081/`.

Do Run `ng serve --open` to run the client and open in browser automatically.`

Airport Management System
 
The Airport Management System system is a system to add the plane information along with pilot details, add the Hangar and add the allotting Hangars to the planes, scheduling of the Hangars availability. 
 
The following are the important modules in the system 
 
•Adding Planes 
•Adding Pilots 
•Adding Hangars Details 
•Allotting the planes into Hangars. 
•Get Hangar Status 
 
Below is the overall functional flow of the project including the components of interaction 
1.	Create Admin Registration page & Authentication. 
•	When the Admin clicks on the registration link, it should re-direct to registration form. 
•	Admin needs to fill some of the basic attributes/fields as mentioned below in requirement: First Name, Last Name, Age, Gender, Contact Number, Vendor-Id, Password. 
•	Clicking ‘Submit’ should validate the datatype constraints for each field 
•	Admin failing to provide information on the mandatory fields be provided with an alert message – ‘Please update the highlighted mandatory field(s).’ Also, highlight the missed-out field in red 
•	Post-successful field level validation, save the information in the database 
•	Upon saving the information in the database, display the message ‘Your details are submitted successfully’. 
•	A registered user – is able click ‘Login’ link, after keying in ‘Admin ID’ & ‘Password’ field and get his credentials authenticated with the existing database entry. 
 
2.	Create Manager Registration page & Authentication. 
•	Screen should display the option for Admin login / Registration and Manager login /Registration. 
•	When the Manager clicks on the registration link, it should re-direct to registration form. 
•	Manager needs to fill some of the basic attributes/fields as mentioned below in requirement: First Name, Last Name, Age, Gender, Contact Number, Manager Id, Password 
•	Clicking ‘Submit’ should validate the datatype constraints for each field. 
•	Manager failing to provide information on the mandatory fields be provided with an alert message – ‘Please update the highlighted mandatory field(s).’ Also, highlight the missed-out field in red. 
•	Post-successful field level validation, save the information in the database. 
•	Upon saving the information in the database, display the message ‘Your details are submitted successfully’. 
•	Admin should be able to view the New Managers for registration. 
•	Admin should approve / reject the Manager Request. 
•	If rejected, the Manager should not be allowed to login with the registered credentials. 
•	A registered Manager – is able click ‘Login’ link, after keying in ‘Manager ID’ & ‘Password’ field and get his credentials authenticated with the existing database entry. 
 
3.	Add plane details. 
•	On clicking “Add Planes”, it should redirect to the page to add Plane. 
•	Admin should be able to update the mandatory fields of the Planes 
•	Clicking ‘Submit’ should validate the datatype constraints for each field 
•	Admin failing to provide information on the mandatory fields be provided with an alert message – ‘Please update the highlighted mandatory field(s).’Also, highlight the missed-out field in red 
•	Post-successful field level validation, save the information in the database 
•	Upon saving the information in the database, display the message ‘Your details are submitted successfully’. 
•	Admin should be able to view the list of planes by clicking “View Planes” link. 
•	On clicking the Plane ID, the system should display the details of the planes. 
•	Admin should be able to update the details of the plan on clicking “Update details” button. 
•	On clicking “Save” button, the updated details should be saved to the database. Upon saving the information in the database, display the message ‘Your details are submitted successfully’ 
 
4.	Add pilot details. 
•	On clicking “Add Pilots”, it should redirect to the page to add Plane. 
•	Admin should be able to update the mandatory fields of the Pilots. 
•	Clicking ‘Submit’ should validate the datatype constraints for each field. 
•	Admin failing to provide information on the mandatory fields be provided with an alert message – ‘Please update the highlighted mandatory field(s).’Also, highlight the missed-out field in red. 
•	Post-successful field level validation, save the information in the database. 
•	Upon saving the information in the database, display the message ‘Your details are submitted successfully’. 
•	Admin should be able to view the list of Pilots by clicking “View Pilots” link. 
•	On clicking the Plane ID, the system should display the details of the Pilots. 
•	Admin should be able to update the details of the plan on clicking “Update details” button. 
•	On clicking “Save” button, the updated details should be saved to the database. Upon saving the information in the database, display the message ‘Your   details are submitted successfully’. 
 
5.	Add Hangar details. 
•	On clicking “Add Hangars”, it should redirect to the page to add Plane. 
•	Admin should be able to update the mandatory fields of the Hangars. 
•	Clicking ‘Submit’ should validate the datatype constraints for each field. 
•	Admin failing to provide information on the mandatory fields be provided with an alert message – ‘Please update the highlighted mandatory field(s).’Also, highlight the missed-out field in red. 
•	Post-successful field level validation, save the information in the database. 
•	Upon saving the information in the database, display the message ‘Your details are submitted successfully’. 
•	Admin should be able to view the list of Hangars by clicking “View Hangars” link. 
•	On clicking the Plane ID, the system should display the details of the Hangars. 
•	Admin should be able to update the details of the plan on clicking “Update details” button. 
•	On clicking “Save” button, the updated details should be saved to the database. Upon saving the information in the database, display the message ‘Your   details are submitted successfully’. 
 
 
 
6.	Allot planes to the Hangars. 
•	When Manager clicks Allot Hangar, the system should display the list of Hangars available and the list of planes waiting for hanger. 
•	Manager should have the option to select the available hangar and allot it for a plane. 
7.	Update Hangar status. 
•	After allotting Manager should update the status as Available / Allotted. 
8.	View Hangar status. 
•	Manager on clicking “View Hangar Status”, the page should display the list of all   Hangars   with status. 

