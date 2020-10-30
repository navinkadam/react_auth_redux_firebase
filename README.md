# React with Redux Project with Authentication Boilerplate

## Folder Structure

├── src
│ ├── components
│ │ ├── Button
│ │ │ ├── index.js
│ │ │ ├── button.css
│ │ ├── Logo
│ │ │ ├── index.js
│ │ │ ├── logo.css
│ │ ├── Other Components...
│ │ .
│ │ .
│ ├── config
│ │ └── firebase.js
│ ├── constant
│ │ ├── FormSchema
│ │ │ ├── index.js
│ │ │ ├── Login.js
│ │ │ ├── ProfileUpdate.js
│ │ │ ├── Other Schema...
│ │ │ .
│ │ │ .
│ │ ├── route.js
│ ├── pages
│ │ ├── Auth
│ │ │ ├── Profile
│ │ │ │ ├── index.js
│ │ │ │ ├── profile.css
│ │ │ ├── Other Auth Components...
│ │ │ │ .
│ │ │ │ .
│ │ ├── UnAuth
│ │ │ ├── Home
│ │ │ │ ├── index.js
│ │ │ │ ├── home.css
│ │ │ ├── Login
│ │ │ │ ├── login.js
│ │ │ │ ├── home.css
│ │ │ ├── Other UnAuth Components...
│ │ │ │ .
│ │ │ │ .
│ ├── store
│ │ └── actions
│ │ └── reducers
│ │ └── index.js
├── .babelrc
├── .gitignore
├── .README.md
├── .package.json

```
In case you need to specify the environment then one should pass in the environment variable as follows:
```

REACT_APP_FIREBASE_API_KEY="firebase_api_key"
REACT_APP_FIREBASE_AUTH_DOMAIN="firebase_auth_domain"
REACT_APP_FIREBASE_DATABASE_URL="firebase_database_url"
REACT_APP_FIREBASE_PROJECT_ID="firebase_project_id"
REACT_APP_FIREBASE_STORAGE_BUCKET="firebase_storage_bucket"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="firebase_messaging_sender"
REACT_APP_FIREBASE_APP_ID="firebase_app_id"

#Production:
NODE_ENV=production npm start

```
#Development:
NODE_ENV=development npm start
```
