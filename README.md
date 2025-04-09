# Car Finder App

Live link of the project-
# https://car-finder-app-alpha.vercel.app/ (deployed on verel)
# git repo- https://github.com/amank-27/car-finder-app

A car search and wishlist web application built using React.js and Vite, featuring light and dark mode functionality. Users can search for cars based on various filters, view detailed information about each car, and add cars to their wishlist. The wishlist is stored in localStorage, and the app persists the theme between page reloads.

# to make api i used render -
this is the git repo containing code of how i made api-
## https://github.com/amank-27/carapi
i used nodejs and expreejs


## Features

- **Search for cars**: Filter by brand, price range, fuel type, and seating capacity.
- **View car details**: Click on any car in the search results to view more detailed information.
- **Add cars to wishlist**: Users can add cars to their wishlist, which is stored in the browser's `localStorage`.
- **Light/Dark Mode**: Users can toggle between light and dark themes with persistence across sessions.
- **Responsive UI**: Built with Tailwind CSS for a responsive and user-friendly interface.

## Technologies Used

- **React.js**: For building the UI and managing the state.
- **Vite**: A fast and modern build tool for React applications.
- **React Router DOM**: For routing between different pages (Home, Car Details, Wishlist).
- **Tailwind CSS**: For utility-first CSS styling.
- **localStorage**: To persist the wishlist and theme preferences.
- **React Context API**: For managing global theme state (light/dark mode).

## Installation

 **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/car-finder-app.git
   cd car-finder-app
   npm install
   npm run dev
