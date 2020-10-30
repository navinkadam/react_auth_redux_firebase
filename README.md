# React with Redux Project with Authentication Boilerplate

## Folder Structure

├── src<br/>
│ ├── components<br/>
│ │ ├── Button<br/>
│ │ │ ├── index.js<br/>
│ │ │ ├── button.css<br/>
│ │ ├── Logo<br/>
│ │ │ ├── index.js<br/>
│ │ │ ├── logo.css<br/>
│ │ ├── Other Components...<br/>
│ │ .<br/>
│ │ .<br/>
│ ├── config<br/>
│ │ └── firebase.js<br/>
│ ├── constant<br/>
│ │ ├── FormSchema<br/>
│ │ │ ├── index.js<br/>
│ │ │ ├── Login.js<br/>
│ │ │ ├── ProfileUpdate.js<br/>
│ │ │ ├── Other Schema...<br/>
│ │ │ .<br/>
│ │ │ .<br/>
│ │ ├── route.js<br/>
│ ├── pages<br/>
│ │ ├── Auth<br/>
│ │ │ ├── Profile<br/>
│ │ │ │ ├── index.js<br/>
│ │ │ │ ├── profile.css<br/>
│ │ │ ├── Other Auth Components...<br/>
│ │ │ │ .<br/>
│ │ │ │ .<br/>
│ │ ├── UnAuth<br/>
│ │ │ ├── Home<br/>
│ │ │ │ ├── index.js<br/>
│ │ │ │ ├── home.css<br/>
│ │ │ ├── Login<br/>
│ │ │ │ ├── login.js<br/>
│ │ │ │ ├── home.css<br/>
│ │ │ ├── Other UnAuth Components...<br/>
│ │ │ │ .<br/>
│ │ │ │ .<br/>
│ ├── store<br/>
│ │ └── actions<br/>
│ │ └── reducers<br/>
│ │ └── index.js<br/>
├── .babelrc<br/>
├── .gitignore<br/>
├── .README.md<br/>
├── .package.json<br/>


In case you need to specify the environment then one should pass in the environment variable as follows:
---
REACT_APP_FIREBASE_API_KEY="firebase_api_key"
REACT_APP_FIREBASE_AUTH_DOMAIN="firebase_auth_domain"
REACT_APP_FIREBASE_DATABASE_URL="firebase_database_url"
REACT_APP_FIREBASE_PROJECT_ID="firebase_project_id"
REACT_APP_FIREBASE_STORAGE_BUCKET="firebase_storage_bucket"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID="firebase_messaging_sender"
REACT_APP_FIREBASE_APP_ID="firebase_app_id"

---
## Production<br/>
NODE_ENV=production npm start

## Development:<br/>
NODE_ENV=development npm start
