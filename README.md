# campaigns_rest_nodejs
node js rest service to parse and store data from third-party APIs

# Endpoints:

GET /campaign/logs/:id' return logs stored in database by campaign_id
GET /campaign/logs return all logs srored in database

POST /campaign/log/insert' api for creating new log in database, need to all required info in request's body. Example: 
{"campaign_id": "aaa", "app_id": "bbb", "old_bid": 1, "new_bid": 2, "ratio": 0.1, "created_at": "2018-10-23"}

GET /campaign/run  Runs the process that recieving data from API's parse it, and save to local MySQL database

# Installation:
npm install

# Start Server
npm start

# Run Tests
npm test
