# Task Board App
To run locally you need the database

```
docker-compose up -d
```

* -d means __detached__

* MongoDB URL:
```
mongodb://localhost:27017/entriesdb
```

## Configure env variables
Rename file __.env.template__ to __.env__

## Fill database with mock data
Use
```
GET | http://localhost/api/seed
```
