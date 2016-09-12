# beer-tracker-dash-client
This is a client that will run on a Raspberry Pi and listen for signals from repurposed dash buttons.
This is still under heavily development. Currently the client listens for incoming signals matching a particular pattern and matches them to known dash buttons.
Future development will include methods for registering dash buttons with the client and a full featured CLI.

The client uses an instance of the [Beer Tracker API]. (https://github.com/tlwirtz/beer-tracker-api)

## Starting the Dash client
1. Make sure to properly install the dash client with `npm install`.
2. Declare an environment variable called `BEER_TRACKER_SERVER` that points to the remote inventory tracking server. You will need to make sure that there are devices and beers set up in the remote inventory tracking server.
3. Run `npm run start` to start the server.
4. Click your Dash Button!

## Taylor's Known MAC Address
`74:75:48:3d:7f:6a` -- gatorade  
`84:d6:d0:3e:53:5f` -- smartwater  
`44:65:0d:d5:ef:23` -- redbull  
