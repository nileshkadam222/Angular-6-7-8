import { Injectable } from '@angular/core';
import { Product } from '../../../models/product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { resolve } from 'q';
@Injectable()
export class DataService{
    dataProductList :Product[]
    productsRestEndPoint : string
    constructor(private _HttpClient : HttpClient){
        this.dataProductList = [  ];
        this.productsRestEndPoint = "http://127.0.0.1:90/products"
        
    }

    getProducts(){
        var self = this;
              // return this.dataProductList;
               var dataPromise = new Promise(
                   function onThen(resolve,reject){
                    var observable = self._HttpClient.get(
                        self.productsRestEndPoint
                    );

                    observable.subscribe(
                        function next(data : object[]){
                            debugger
                            self.dataProductList = data.map(
                                function forEveryItem(item){
                                   var product = new Product( 
                                    item["Name"],
                                    item["Brand"],
                                    item["Price"]
                                )
                                return product;
                                }

                            );

                            //resolve([...self.dataProductList]);
                        },
                        function error(errorDetails :Object){
                            //console.dir(errorDetails);
                        },function complete(){
                            resolve(
                                [
                                    ...self.dataProductList
                                ]
                              );
                        }
                    )
                }
            );
               return dataPromise;
    }

    addProduct(product :Product){
        this.dataProductList.push(product);
    }
}
