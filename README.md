# TECHShop

This is a project for e-commerce.

[Open App](https://fantastic4-commerce.herokuapp.com/)

[Open API](https://fantastic4-commerce-api.herokuapp.com/)

## Tech used

- API: `Django`
- Frontend: `React`, `Redux`
- Database: `sqlite3`
- Web Server & Deploy: `Heroku`

## Contributors

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

## Folders for main Apps

- `/api` : this is api App created by Django
- `/frontend` : This is frontend App created by React & Redux

## Installation

1. Git Clone

- `git clone git@github.com:techis-fantastic-4/e-commerce.git`

2. Access

- Frontend: <http://localhost:3000>
- API:<http://localhost:8000>

## Branch Rules

There are three branches :<br>

|---- main -- `Auto Deploy to Production`<br>
|<br>
|<br>
|---- development -- `Auto Deploy to Staging`<br>
|<br>
|<br>
|---- feature branches(Design,Database,User Test etc.) <br>

#### Flow to develop

1. Developer: Create a feature branch.
2. Developer: Merge from `feature` to `develop` to test.
3. Developer: Make a pull request from `feature` to `master` in Github.
4. Tech Lead: Review pull requests and merge them.

#### Branch Naming Scheme

- feature/"trello topic name"

<b>EXAMPLE :</b> feature/base-design-customize

## Coding Style Guide

[Coding Style Guide for Django](https://github.com/Tech-i-s/techis-crm/wiki/Coding-Style-Guide-for-TECH-I.S.-CRM)
