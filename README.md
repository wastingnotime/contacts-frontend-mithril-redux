# contacts-frontend-mithril-redux


**contacts-frontend-mithril-redux** is part of "contacts" project that is an initiative where we try to explore frontend and backend implementations in order to better understand it cutting-edge features. This repository presents a mithriljs based frontend application.

## stack
* mithriljs
* redux

## features
* small footprint


## depencencies
* docker 25+
* nvm 0.39+

## get started (linux only)

### execute from source code 

as a prerequisite it is necessary to start the backend application

open another terminal and run the backend for this project
```
docker run -p 8010:8010 wastingnotime/contacts-backend-go-echo
```

set node version (v21+)
```
nvm use
```

install deps
```
npm i
```

start app
```
npm start
```

* just go to your browser on http://localhost:1234


## some tips

### upgrade node packages

verify outdated packages
```
npm outdated
```
install new version of outdated package
```
npm install <package>@latest
```
if npm is older use
```
nvm install-latest-npm
```
