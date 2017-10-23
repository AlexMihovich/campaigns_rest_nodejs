
Endpoints 
    GET  /campaigns/logs/:id' return logs stored in database by campaign_id
    GET /campaigns/logs return all logs srored in database

    POST /campaigns/log/insert' api for creating new log in database, need to all required info in request's body. Example: 
    {"campaign_id": "aaa", "app_id": "bbb", "old_bid": 1, "new_bid": 2, "ratio": 0.1, "created_at": "2018-10-23"}

    GET /run  Runs the process that recieving data from API's parse it, and save to local MySQL database
