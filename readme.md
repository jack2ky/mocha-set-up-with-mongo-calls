#make a test that creates a review and a user. associate them. Then populate the review with the user info

You can add to test property in package.json to get mocha working `nodemon --exec mocha --recursive -R min`

and if you want set environment variable you can do : `"test": "set NODE_ENV=test&& nodemon --exec mocha --recursive -R min"`

*I'm just going to a do a simple : `"nodemon --exec mocha"` so I could see results from previous tests.*

Shows 4 passing test


Don't forget you can do `it.only` to check out a specific test.
![alt text](https://github.com/jack2ky/mocha-set-up-with-mongo-calls/blob/master/testsInCmd.png "Result in command promp")

### Run by doing `npm test`
