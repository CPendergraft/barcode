var express = require('express');
var router = express.Router();

var Backendless = require('backendless');


const APP_ID = '5CCF3846-D23F-EFD9-FFC3-A3CBA7ACD000';
const API_KEY = 'E76337C6-B0D7-4D11-8014-1079F25AF794';
Backendless.serverURL = 'https://api.backendless.com';

Backendless.initApp(APP_ID, API_KEY);

const initialState = {
    loading: true,
    message: '',
    error  : null
}
/* GET list of barcode read olny  page. */
router.get('/', function (req, res, next) {

    Backendless.Data.of('Barcodes').find()
        .then(obj => {

            console.log(obj);

            var badObject =  {
                    price: 9.99,
                    created: 1600993289000,
                    ___class: 'Barcodes',
                    ownerId: null,
                    product_name: 'M95 Masks 10 count',
                    updated: 1600993307000,
                    objectId: 'A4FF3429-F0F4-424B-B3CE-280274F82193' };

                    obj.push(badObject);


                res.render( 'index', {title:'Welcome to Checkout', result:obj});


        });

});
/* GET a single item from lookup */
router.post('/lookup/(:objectId)', function(req, res, next) {


    objectId = req.params.objectId;

    console.log('objectId', objectId);

        Backendless.Data.of('Barcodes').findById(objectId)
            .then(obj => {

                console.log('results-------', obj);

                res.send({title:'Match Found', results:obj});


            }).catch(function (error) {
            console.log('error getting prod by id', error);
            /* pipe the error back so UI can display not found */
            res.send({title:'No Match Found', results:error});
        });
    });


module.exports = router;

