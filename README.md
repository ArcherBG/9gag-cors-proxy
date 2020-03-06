## Description:

Because of CORS we can not make requests to 9gag.com directly. This simple server acts as a proxy, makes the request you send it and then returns the response or throws an erroor.

### Method:
`POST /`

`body: { url: "your_desired_url"}`

## Start server:

### `node app.js`
