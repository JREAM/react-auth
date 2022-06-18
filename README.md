# React Auth

- [React Auth](#react-auth)
  - [Features](#features)
  - [Development Notes](#development-notes)
    - [Environment Variables](#environment-variables)
    - [Vercel Hosting](#vercel-hosting)
    - [Vite Environment Variables](#vite-environment-variables)
    - [React (CRA) Enviroment Variables](#react-cra-enviroment-variables)
    - [Firestore Notes](#firestore-notes)
      - [Database Structure](#database-structure)
      - [Common Methods](#common-methods)

## Features

- Demo: [https://react-auth-six.vercel.app/]
- Google Firebase Authentication
- Google Firestore Database _(User Info)_
- Protected Routes _(react-router-dom)_

## Development Notes

- **Required**: `.env.local` file.
  - Rename the `.env.sample` to `.env.local` and provide credentials. _(.env.local is gitignored)_

### Environment Variables

I am use `vite` so the environment variables are different than a `create-react-app` build. Additionally, `dotenv` is not needed for either of these.

For more information on vite environ variables visit: [https://vitejs.dev/guide/env-and-mode.html](https://vitejs.dev/guide/env-and-mode.html)

### Vercel Hosting

- **IMPORTANT**: When using Vercel the `.env.local` is not included for build time so when under **Configure Project** manually add the `NAME/VALUE` to the **Environment Variables** one by one.

### Vite Environment Variables

```sh
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

In a `.env` file the variables must be prefixed with `VITE_` like this:

```sh
VITE_APP_ID=1234
VITE_PROJECT_NAME=sample
```

To use these in the project you would do so in javascript as so:

```js
import.meta.env.VITE_APP_ID
import.meta.env.VITE_PROJECT_NAME
```

### React (CRA) Enviroment Variables

- See the following for more information: [https://create-react-app.dev/docs/adding-custom-environment-variables/](https://create-react-app.dev/docs/adding-custom-environment-variables/)

These are not being used but this project. This is for a reference incase I swap back to the slower CRA system.

In a `.env` file the variables are suffixed with `REACT_APP_` and the `react-scripts` package is required:

```sh
REACT_APP_SECRET=abc
REACT_APP_KEY=1234561111
```

To use them in javascript you would do:

```js
process.env.REACT_APP_SECRET
process.env.REACT_APP_KEY
```

### Firestore Notes

Visit the Documentation [https://firebase.google.com/docs/firestore/]

#### Database Structure

| Term        | Purpose                                                                                  |
| ----------- | ---------------------------------------------------------------------------------------- |
| Collections | Containers for documents such as a Photo Collection with many Photo Documents within it. |
| Documents   | Record containing fields, identified by a name                                           |
| References  | Location pointing to an object in the database                                           |

#### Common Methods

| Method        | Purpose                                               |
| ------------- | ----------------------------------------------------- |
| `addDoc`      | Create a document and get a unique ID back            |
| `deleteDoc`   | Delete a document (Does not delete sub-collection)    |
| `deleteField` | Delete specific fields of a document                  |
| `getDoc`      | Get a single document back                            |
| `getDocs`     | Get many documents back                               |
| `setDoc`      | Create a document attached to an ID                   |
| `updateDoc`   | Update certain fields rather than the entire document |

---

&copy;2002 JREAM
