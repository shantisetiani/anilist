# Anilist

Anilist is a website where you can see any information about all of the Anime and Manga.

## Available Scripts

To install and run the project in your local computer, you need to do:<br />

1. Open terminal<br />
2. In your terminal, run command:<br /><br />
   `git clone git@github.com:shantisetiani/anilist.git`<br />
   to clone this project.<br /><br />
   `cd anilist`<br />
   to go to the project directory. And then:<br /><br />
   `npm install`<br /><br />
3. In the project folder, copy and paste `.env.example` file and rename it into `.env`<br />
4. Input the GraphQl url in REACT_APP_API_URL variable

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
<br /><br />

---

## Folder Structure

    .
    ├── ...
    ├── src                                     # Source Files
    │   ├── components                          # Reusable components
    │   │   └── ErrorAlert                      # ErrorAlert Component
    │   ├── context                             # Contains React Context
    │   │   └── alert.ts                        # Context for error alert
    │   ├── generated
    │   │   └── graphql.tsx                     # Generated graphql variables and functions
    │   ├── pages
    │   │   ├── Home                            # Contains components of the Homepage
    │   │   │   ├── Home.tsx                    # Main component
    │   │   │   ├── HomeSkeleton.tsx            # Skeleton of Homepage
    │   │   │   ├── index.tsx                   # Container component
    │   │   │   └── style.css                   # Contains CSS used in Homepage
    │   │   ├── MediaDetail                     # Contains components of the Media Detail page
    │   │   │   ├── MediaDetail.tsx             # Main component
    │   │   │   ├── MediaDetailSkeleton.tsx     # Skeleton of Media Detail page
    │   │   │   ├── index.tsx                   # Container component
    │   │   │   └── style.css                   # Contains CSS used in Media Detail page
    │   │   └── MediaList                       # Contains components of the Media List page
    │   │   │   ├── __tests__                   # Contains files for testing purpose
    │   │   │   ├── column.tsx                  # Column for AntDesign's table
    │   │   │   ├── index.tsx                   # Container component
    │   │   │   └── MediaList.tsx               # Main component
    │   ├── query                               # Contains files of GrapgQl queries
    │   ├── routes                              # Contains routing of this web, render the router
    │   ├── utilities                           # Contains reusable functions
    │   ├── App.css                             # General CSS
    │   ├── App.tsx                             # Main component of React App, contains main layout
    │   ├── index.css                           # Main CSS
    │   ├── index.tsx                           # Rendering ReactDOM and Apollo provider
    │   ├── setupTests.js                       # Setup for testing purpose
    │   └── ...
    └── ...
