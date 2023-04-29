``` 
created with create-next-app 
```
``` 
simulated a rest api to come up with data for testing the project 
```
```
used firebase 
```
```
initial testing was done with json and later to public api and finally to private api with database
```

```
PRODUCTION
```
Please visit the [TESTING PHASE LINK](https://product-pilot.vercel.app/)



## PRODUCT PILOT

First, run the development server:

### Running locally

```bash
// run this to clone the repo

git clone https://github.com/Simon-157/product-pilot.git
```

```bash
// enter the directory
cd product-pilot
```



```bash
// run this to install dependencies

npm install
```


```bash
// run this to  start the local server

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## APP STATE MANAGEMENT
- Redux : generaly used together with local storage to maintain the app's state when the page refreshes
    - for example; when you choose a category and you visit the product page for the first time, state of the app is maintianed such that when the page refreshes, you dont have to go back to the categories page to choose .
- Context : for sharing props among components
- Zustand : to maintian state of piloted products for comparison (active products) and table state.

## TESTING

- There are currently four categories of product in the database,
- Due to time constraint I could not curate enough data in my database so, only the phone category has products with different brand groups
- Prefer to use this category to test the application ``` choose that category in the categories page ```
- On the category specific page, browse the products py using the previous and next icons.
- Hover on each product to see the actions to be taken; choose ```pilot```to pin the product to compare
- This turns the cade to greenish transparent color with the button changing to remove
- Hover on a pinned product to choose remove to unpin it for compare
- The products for the given category can be filtered on brand
- Select the brand to browse from the drop down
- All pinned products for comparison are shown on the table below the products
- Hover on each product image in the images column to see a full details of that product

#### Sorting the table
- The table canbe sorted according to each column
- Click on each column head to sort the table according to that column
- Text based columns are sorted with collation in aphabetical order
- Number based columns are sorted in descending order


## CUSTOM HOOKS 

- ### usePagination
This is a custom hook in TypeScript that enables pagination of data by taking in an array of data and the number of items to display per page. It returns an object with the current page number, functions to navigate to the previous and next pages, boolean values that indicate whether the user can navigate to the previous and next pages, and the data to display on the current page based on the specified items per page configuration.


- ### CategoryContext
This creates a context for a category name and provides a way to set and access it.

Properties:

categoryName - A string that represents the current category name in the context.
setCategoryName - A function that takes a string argument and updates the categoryName state with the new value. It is used in the CategoryContextProvider component to provide the categoryName and setCategoryName values to the context.
useCategoryName
This is a custom hook that returns the current category name and a function to update it, using the CategoryNameContext.

Returns:

An object with two properties: categoryName and setCategoryName.
- ### useSnackbar
This is a custom hook that provides a function to show a snackbar with a message and a variant (optional).

Returns:

An object containing the showSnackbar function.

- ### useCategoryQuery and useProductQuery
These hooks are used for fetching and caching categories data and fetching and caching product data based on a given category name.

Returns:

Two query hooks: useCategoryQuery and useProductQuery.

## MAIN APP COMPONENTS
- Details included in all components files (found in the Pages folder)

## GENERAL COMPONENTS

The application's user interface is modular and reusable, and it is constructed using React components. Here are descriptions of some of the components:

- ### CategoryCard
This component renders a card for a category, with an image, name, description, and a link to view products in that category.

Props:

category (of type CategoryType): a single prop that represents the category to be displayed in the card.
Arrow Icons
These components are React functional components that render arrow icons for next and previous actions.

Props:

props (of type IconProp): an object that contains any properties passed down to the component from its parent component.
Components:

- ### NextIcon
- ### PreviousIcon

- ### CustomSnackbar
This is a TypeScript React component for a custom snackbar with a message, variant, and onClose function that automatically closes after 2 seconds.

Props:

message: the message to be displayed in the snackbar.
Loader
This is a React component that renders a loading animation with 8 cards, each containing an image and a title.

- ### ProductCard
This component takes in two props:

product (of type ProductType)
compare (of type boolean)

- ### Table
This component takes in three props:

headers
body
sortProducts
It renders a table with the headers and body data passed in as props. It also has state variables for col, key, hoveredProductId, and uses the useState hook to manage them. It uses the useCallback hook to define memoized functions for handling click and mouse events.


## Learn More


## Deploy on Vercel

