# Getir Assignment


RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

Requested Payload:
HTTP POST: URI - http://localhost:9000/records

Sample Payload:
{
    "startDate": "2015-11-28",
    "endDate": "2015-12-01",
    "minCount": 2000,
    "maxCount": 3000
}

Sample Response:

{
    "_id": "6223af4b3ca95560d1cee3f8",
    "code": 0,
    "msg": "Success",
    "records": [
        {
        "_id": "6223af4b3ca95560d1cee3f9",
        "key": "vwctGvZe",
        "createdAt": "2015-11-28T17:17:38.640Z",
        "totalCount": 2517
        },
        {
        "_id": "6223af4b3ca95560d1cee3fb",
        "key": "hCXxyuAu",
        "createdAt": "2015-11-28T11:47:29.706Z",
        "totalCount": 2085
        }
    ]
}


##To run the project

npm start

## To run tests

npm run test