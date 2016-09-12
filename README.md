# beer-tracker-dash-client
This is a client that will run on a Raspberry Pi and listen for signals from repurposed dash buttons.
This is still under heavily development. Currently the client listens for incoming signals matching a particular pattern and matches them to known dash buttons.

Future development will include methods for registering dash buttons with the client and communication with the beer-tracker server.

## Starting the Dash client
Make sure to properly install the dash client with `npm install`.
To start the server, first declare an environment variable called `BEER_TRACKER_SERVER` that holds the location to the remote inventory tracking server.

## Known MAC Address
`74:75:48:3d:7f:6a` -- gatorade  
`84:d6:d0:3e:53:5f` -- smartwater  
`44:65:0d:d5:ef:23` -- redbull  
