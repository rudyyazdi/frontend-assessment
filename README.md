# Frontend-assessment - Searchable Select List

## Overview
We'd like you to create a searchable select list that retrieves characters from the [Marvel api](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0).

The style and behaviour of the select list should match the images shown below.

## Prerequisites
1. Node.js and NPM installed on your local machine
2. Register for an api key with [Marvel](https://marvel.com/register) and note your public and private key

## API set-up

Within this repo is an api folder that contains contains a proxy server to the marvel api. This has been created to simplify authenticating with the api. The server can be started by navigating to the api folder and running: 

```npm install```

```npm start <private key> <public key> ```

### Request

To retrieve a list of characters:

```GET http://localhost:1111/characters ```

To query for characters by their name:

```GET http://localhost:1111/characters?nameStartsWith=iron```

### Response

A simplified response can be seen below. The name, description and thumbnail properties are required for this assessment.

```json
{
  "results": [
    {
      "id": "1",
      "name": "Iron Man",
      "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
      "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
        "extension": "jpg"
      }     
    }
  ]
}
```

## Mandatory Requirements
- Must be completed in react (redux is optional)
- Cannot use third party search select library
- Behaviour and style should be the same as shown in the images below
- Items in the list should be selectable via a mouse click. On select, the character name should be written to the console.
- A loader should be shown when the results are being queried from the API

## Submission
The submission should be committed to Github and a link provided to the submission along with a readme on how to setup and run the solution. The solution is expected to incorporate good software development practices such as comments and tests.

**If you have any problems with this assessment, you can create a GitHub issue that will be answered shortly by one of the Hireup development team or email us directly at andrew@hireup.com.au**

## Examples

Example 1 - Closed Select
![Screenshot1](https://i.imgur.com/9ooq75J.jpg)

Example 2 - Opened Select
![Screenshot2](https://i.imgur.com/LIlF1Bd.jpg)

Example 3 - No Results Select
![Screenshot3](https://i.imgur.com/SmLh1sZ.jpg)

Mobile Example 1 - Closed Select
![ScreenShot4](https://i.imgur.com/KUaenjW.jpg)

Mobile Example 2 - Opened Select
![ScreenShot5](https://i.imgur.com/KAJvi1s.jpg)

Mobile Example 3 - No Results Select
![ScreenShot6](https://i.imgur.com/0938RCR.jpg)

