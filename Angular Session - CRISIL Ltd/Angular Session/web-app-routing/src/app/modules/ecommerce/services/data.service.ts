import { Injectable } from '@angular/core';
import { Product } from '../../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService
{
    DataProductList : Product[];
    ProductsRestEndpoint : string;

    constructor(
        private _HttpClient : HttpClient
    )
    {
        this.DataProductList =
        [
            new Product("Mobiles", "Apple", 50000),
            new Product("Laptops", "HP", 75000),
            new Product("Desktops", "Dell", 37000)
        ];
        this.ProductsRestEndpoint = "http://localhost:90/products"
    }

    getProducts()
    {
        //return [ ...this.DataProductList];
        /**
         * Any async service need to give promise to components
         * 
         */
        var self = this;
        
        var dataServicePromise = new Promise(
            function onThen(resolve, reject)
            {
                // var data = 
                // [
                //     ...self.DataProductList
                // ];
                // resolve(data);

                // FETCH DATA FROM SERVER
                var httpObservable = self._HttpClient.get(
                    self.ProductsRestEndpoint
                );

                httpObservable.subscribe
                (
                    function next(data: Object[])
                    {
                        console.dir(data);
                        
                        // Mapping Object Array to Product Array
                        self.DataProductList = data.map(
                            function forEveryItem(item)
                            {
                                var product = new Product(item["Name"], item["Brand"], item["Price"])
                                return product;
                            }
                        );
                    },
                    function error(errorDetails)
                    {
                        console.dir(errorDetails);
                    },
                    function complete()  //httpObservable is not dead
                    {
                        console.log("http complete");
                        resolve([ ...self.DataProductList]);
                    }
                );
            }
        );
        return dataServicePromise;
    }

    addProduct(newProduct: Product)
    {
        var self = this;
        return new Promise(
            function onThen(resolve, reject){
                // self.DataProductList.push(newProduct);
                // var data = 
                // [
                //     ...self.DataProductList
                // ]
                // resolve(data);

                //SEND DATA TO THE SERVER

                var requestHeaders = new HttpHeaders();
                requestHeaders.append("content-type", "application/json")
                requestHeaders.append("Access-Control-Allow-Origin", "*")
                
                var httpObservable = self._HttpClient.post(
                    self.ProductsRestEndpoint, //URL
                    newProduct,  //BODY OF POST REQUEST
                    {   
                        //request options
                        headers : requestHeaders
                    }
                );

                httpObservable.subscribe(
                    function next()
                    {
                        self.DataProductList.push(newProduct);
                        resolve( 
                            [ ...self.DataProductList ] 
                        );
                    },
                    function error(errorDetails)
                    {
                        console.dir(errorDetails);
                        reject("Server Operation Failed");
                    }
                )
            }
        );

        //this.DataProductList.push(newProduct);
        //return [ ...this.DataProductList];
    }
}