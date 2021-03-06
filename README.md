## League-Project
---
#### League-Watcher

[League-Site](https://league-watcher.herokuapp.com/)

This is an application to access League of Legends API using React.

#### Layout
The main page has a NavBar (collapsable) that lead to different parts of the site.
Mobile Friendly Version

![navbar](/src/assets/images/champs.png)

Clicking the champion link will give a list of champions.
Champions are parsed data from Riot's API.

Clicking the detail of the champion brings up a modal. In the modal
the user can learn more about the champion by collapsing data in the body.

![navbar](/src/assets/images/skills.png)

##### Searching for Champs:

Inputing the name of the champion or item leaves on the relevant objects.
The search is instant.

![searching](/src/assets/images/search-champs.png)


##### Searching for Summoner using Riot's API
Riot's API keys last for 24 hours before requiring a new one.
I have hidden and set up an env variable to hide the api key.

Searching Summoners can be done and it shows the summoner's level and
mastery level with their profile icon.

![summoner](/src/assets/images/search-summoner.png)

When the summoner is not found it will display an error. This
error is cleared once it finds a match.

![not found](/src/assets/images/not-found.png)

##### D3 Library and Graphs

Used react-vis-force to make D3's Forced Graphs
![bar](/src/assets/images/forced-graph.png)

Used react-vis to make charts using Bar Graphs
![forced](/src/assets/images/bar-graph.png)

Created a fun visual with Particles-JS
![visual](/src/assets/images/fun-visual.png)

#### Technologies
1. React.js
2. Webpack
3. League API
4. Node.js
5. JavaScript
6. AJAX
7. Bootstrap
8. Express.js server (hosted on Heroku)
9. Loading Screen for links
10. Searchable Champs and Items
11. Added Collapsing NavBar
12. 4 Bar Graphs, 1 particle graph, and 1 force graph
13. D3 Library
14. Added Summoner Searching 3rd Party Api

#### Features to be added

## Status = Completed
