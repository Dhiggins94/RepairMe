


# PROJECT 4 README


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview
 RepairMe is a full-stack application that allows a user to post repair guides for products that may be broken or need replacing. 
 authorized users have the ability to create update and delete repair guides. non users can still view the site as intended.

<br>

## MVP

The website's should be able to allow the user (when signed in) to make repair guides for electronics,edit their guide, and delete their guide. those guides should be stored in categories for those products, and those products should be in categories as well.

<br>

### Goals

- Build a Ruby On Rails server with RESTful JSON endpoints
- Building a database that will consist of multiple tables
- Complete full CRUD funtionality
- User authorization and authentication will be avalible
- Implement CSS flexbox with 2 media queries

<br>

### Libraries and Dependencies



|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |  i would need a react app|
|   React Router   |  i need react router dom for things like routes|
|      Ruby        | the coding language we'll use for backend |
|   Ruby on rails  | a gem package we'll be using with ruby for the backend|
|       Axios      | assist in making api calls i can also test in postman |

<br>

### Client (Front End)

#### Wireframes



![Wireframes Desktop](https://i.imgur.com/RvC8jwx.png) 


![Wireframes Mobile](https://i.imgur.com/HpMLt0k.png "Wireframes Mobile")


#### Component Tree

![Component Tree](https://i.imgur.com/CEmTjaW.png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__App.js
|__index.js
|__assets/
|__ components/   
     |__Layout/
      |__Layout.jsx
      |__Layout.css
     |__Navbar/
        |__Navbar.jsx
        |__Navbar.css
     |__Header/
     |__Header.jsx
     |__Header.css
     |__ screens/
         |__Products.jsx
          |__ProductDetails.jsx
           |__RepairGuide.jsx
            |__CreateGuide.jsx
             |__EditGuide.jsx
      |__containers/
       |__MainContainer.jsx
     |__ services/
      |__api-config.js
       |__electronicItem.js
       |__repairGuide.js
       |__auth.js

```

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|   Create rails app  |    L     |     3 hrs      |      0 hrs    |    0 hrs    |
|   Make controllers  |    M     |     3 hrs      |    0 hrs      |    0 hrs    |
|    Make Models      |    M     |     3 hrs      |    0 hrs      |    0 hrs    |
|  Generate tables    |    M     |     3 hrs      |    0 hrs      |    0 hrs    |
|    Add Seed Files   |    L     |     3 hrs      |    0 hrs      |    0 hrs    |
|      Add Form       |    M     |     3 hrs      |     0  hrs    |    0 hrs    |
|   Create react app  |    L     |     3 hrs      |     0  hrs    |    0 hrs    |
|      Create Auth    |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
|Create CRUD for Guide|    H     |     3 hrs      |     0 hrs     |    0 hrs    |
|product              |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
|Electronic items     |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
|media queries.       |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
| repair guides       |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
|      API testing    |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
|Flexbox/css          |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
|Basic css            |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
|      Debug          |    H     |     3 hrs      |     0 hrs     |    0 hrs    |
|      Deployment     |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
|  Deployment debug   |    M     |     3 hrs      |     0 hrs     |    0 hrs    |
| TOTAL               |    N/A   |     54 hrs      |    N/A hrs    |     TBD     |



<br>

### Server (Back End)

#### ERD Model



![ERD](https://i.imgur.com/jT9IWp6.png)
<br>

***

## Post-MVP

> post-mvp's would be adding a comment section, instructional video repair guides.

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.


