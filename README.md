This project uses NodeJS  and Pug

## Barcode Point of sale example

## NodeJS/Express Backendless, Pug(Jade)
Generated in Webstorm.

## NPM
run npm install to get dependencies
run npm start to initialize, after installing all the dependencies. Project will run on localhost:3000/


## Challenge

1. Create a UI that scans barcodes.
2. Displayes the product name and price in the LCD single line display
3. If a product is not found, the display shows a message and the item is marked red.
4. If user clicks Exit and Print, the receipt is printed to the white div to simulate a printer, and the LCD display is updated with the total.
5. If a user contiues to double add items, the button label changes to update receipt

The Database in on backendless a SQL type cloud solution. The node layer contacts the DB and gets a list of objects, upon retrival I add a bad record to test the fail logic. The view is a pug template that loops through the pre-processed data and adds product items to a list that use JSBarcode to make UPC items that resemble the UI you would have at point of sale. On each click the item is Async looked up and if a match is found the display is updated as well as a collection that is used to produce the receipt when the user clicks the big button. My service will return a 404 for  miss, so I fork on that status code and update the UI accordingly. I trid to stay within the time frame and scope of the challenge, but I did a first version that printed the items to the printer view as the items were added, but that was not in the challenge, so I removed it to stick to the request.
