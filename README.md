# Cactus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.
 # Objective ---
## Assignment 1.
Create an application which accomplishes following tasks -
1) It should have an editable field where the user can paste a formatted JSON (Input).
2) Ith should show a non-editable field displaying the updated JSON (Output).
3) You're free to design the UI you want, we only expect an input text area where a user can paste a non-formatted J
SON and an area displaying the formatted version.
4) (Bonus) Show off your CSS skills by making it look good.
Input -
{
"0":
[{"id": 10,
"title": "House",
"level": 0,
"children": [],
"parent_id": null}],
"1":
[{"id": 12,
"title": "Red Roof",
"level": 1,
"children": [],
"parent_id": 10},
{"id": 18,
"title": "Blue Roof",
"level": 1,
"children": [],
"parent_id": 10},
{"id": 13,
"title": "Wall",
"level": 1,
"children": [],
"parent_id": 10}],
"2":
[{"id": 17,
"title": "Blue Window",
"level": 2,
"children": [],
"parent_id": 12},
{"id": 16,
"title": "Door",
"level": 2,
"children": [],
"parent_id": 13},
{"id": 15,
"title": "Red Window",
"level": 2,
"children": [],
"parent_id": 12}]
}
Output -
[

{
"id": 10,
"title": "House",
"level": 0,
"children": [
{
"id": 12,
"title": "Red Roof",
"level": 1,
"children": [
{
"id": 17,
"title": "Blue Window",
"level": 2,
"children": [],
"parent_id": 12
},
{
"id": 15,
"title": "Red Window",
"level": 2,
"children": [],
"parent_id": 12
}],
"parent_id": 10
},
{
"id": 18,
"title": "Blue Roof",
"level": 1,
"children": [],
"parent_id": 10
},
{
"id": 13,
"title": "Wall",
"level": 1,
"children": [
{
"id": 16,
"title": "Door",
"level": 2,
"children": [],
"parent_id": 13
}],
"parent_id": 10
}],
"parent_id": null
}
]

## Assignment 2 -
Create an application using APIs from https://gorest.co.in/
Below is the expected behavior of the application -
1) Application should list out 10 posts at a time (and remaining as paginated) with title and it's respective author na
me (user). (Infinite pagination would be preferable).
2) It should display 120 characters of its body and show read more link.
3) On clicking the link read more, it should show full artilcle and also the comment section (get comments from /co
mments API) of respective post.
4) Provide a button to add comment.
- On click of button ask user to provide email and name.
- Check if user exists else create one with that name and email.
- Keep that user in your cookie and use for all further comments or any user authentication required.
5) Use your imagination and designing skills.
6) Show off your HTML, CSS skills.


## Please follow the below instructions:

1) clone the from git repo or download the project from mail
2) Once downloaded, run `npm install` to install dependencies related to this project.
3) Run `ng serve`

# Working functionalities of this App
Consist of two links on top as Assignment1 and Assignment 2
Assignment 1- As specified on the objective, works the same
Assignment 2- As specified on the objective



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


