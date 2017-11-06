## Minimum Prerequisites Versions:
* Node.js v7.7.2
* MongoDB v3.4.2
* Express v4.14

## Step 1:

### Open the MongoDB server after installing mongoDB.Go to C:/MongoDB/Server/3.4/bin/--in 1st termnal
```
mongod
```
## Step 2:
### Converting CSV data to JSON data using mongoimport.Go to C:/MongoDB/Server/3.4/bin/--in 2nd terminal
```
mongoimport -d 'database_name' -c 'collection_name' --type csv --headerline --file 'filepath/file_name.csv'
```
```
mongo
```
```
use ipl-matches
```
### To view JSON format in COMMAND LINE--in 2nd terminal
```
db.matchesinfo.find().pretty()
```
In my case,the command is:
```
mongoimport -d ipl-matches -c matchesinfo --type csv --headerline --file "C:\Users\Yashwanth Kumar\Desktop\HE\ipl26a822d\matches.csv"
```

## Step 3:With this both database and collections are created and connected--in 3rd terminal

### To run the applcation,inside the project folder run the command after installing the dependencies
```
npm install
```
```
npm start
```
and then navigate to http://localhost:3000/seasons in the browser.

