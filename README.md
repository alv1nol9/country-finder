# 🌍 Country Info Finder

Country Info Finder is a simple React application that allows users to search for any country and view basic information about it. It fetches data from a public REST API and displays the results in an organized layout. The app is built with modular components to keep the code clean and maintainable.

## 🔧 Features

- 🔎 Search for countries by name
- 🌐 Fetches real-time data from the [REST Countries API](https://restcountries.com/)
- 📋 Displays key country info: name, capital, population, region, and flag
- ⚛️ Built with React and structured using functional components

 Components

 1. `SearchBar`
- Accepts user input for the country name.
- Triggers the search when the user types or clicks search.

 2. `Fetch`
- Handles API calls to the REST Countries API.
- Manages loading and error states.
- Passes fetched data to the `Display` component.

 3. `Display`
- Renders country information in a visually clean format.
- Shows country flag, name, capital, region, and population.

