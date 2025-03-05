A modern and responsive web application built with React.js to manage customer reservations at a restaurant. This system allows the management of customer details, real-time tracking of available seating, and ensures smooth handling of reservations.

Features
Capacity Tracking: Displays the restaurant’s total seating capacity along with the number of available seats in real-time.
Customer Management: Allows the addition of customer details, including guest count, name, and phone number.
Reservation Overview: Provides a structured list of all reservations with important details such as guest count, customer name, phone number, check-in time, and reservation status.
Dynamic Seat Management: Automatically updates available seating as reservations are made, preventing overbooking.
Tech Stack
Frontend: React.js
Styling: Custom CSS with modern design and responsive features
State Management: React useState hook for managing component state
Installation Guide
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm (comes with Node.js)
Steps to Run the Application Locally
Clone the repository:

bash
Copy
git clone https://github.com/your-username/restaurant-reservation-system.git
Navigate into the project directory:

bash
Copy
cd restaurant-reservation-system
Install dependencies:

bash
Copy
npm install
Run the application:

bash
Copy
npm start
The application will be available at http://localhost:3000 in your browser.

Usage Instructions
Add a Reservation:

Enter the number of guests, the customer’s name, and their phone number into the input fields.
Click Add Customer to add the reservation to the list.
Customer Details:

Once added, the customer's details such as guest count, name, phone, check-in time, and status (e.g., "Checked In") will appear in a table.
Seat Availability:

The remaining available seats will be updated dynamically based on the number of guests in each reservation.
Customization
Adjust Restaurant Capacity: Modify the capacity state in the App.js file to change the restaurant’s total seating capacity.
Styling: The design is controlled via the App.css file, where you can customize colors, fonts, and layout to suit your branding or aesthetic preferences.
Contributing
We welcome contributions! If you have suggestions or improvements for the project, feel free to:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Commit your changes (git commit -m 'Add feature').
Push to your branch (git push origin feature-name).
Open a pull request for review.
