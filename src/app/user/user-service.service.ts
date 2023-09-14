import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerInterface } from './customer-interface';
import { ArtWorkInterface } from './art-work-interface';
import { UserInterface } from './user-interface';
import { OrderInterface } from './order-interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient) { }

  // Define headers using HttpHeaders
  token='2|laravel_sanctum_OHHRthNNEsL7zIyff85uhRqH9JTLaOupBrfILAWqc8d34ef3';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 2|laravel_sanctum_OHHRthNNEsL7zIyff85uhRqH9JTLaOupBrfILAWqc8d34ef3',
    'role': 'admin'
  });


  // <!---------------------------- customer section-->
  // <!---------------------------- customer section-->


  getCustomers(): Observable<CustomerInterface[]> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.get<CustomerInterface[]>('http://127.0.0.1:8000/api/customers/', requestOptions);
  }
  getCustomer(id:number): Observable<CustomerInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.get<CustomerInterface>('http://127.0.0.1:8000/api/customers/'+id, requestOptions);
  }
  updateCustomer(id:number,body:any ): Observable<CustomerInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const,body };
    return this.http.put<CustomerInterface>('http://127.0.0.1:8000/api/customers/'+id,
    requestOptions,
);
  }

// <!---------------------------- product section-->
// <!---------------------------- product section-->



  getProducts(): Observable<ArtWorkInterface[]> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.get<ArtWorkInterface[]>('http://127.0.0.1:8000/api/products/', requestOptions);
  }

  getProduct(id:number): Observable<ArtWorkInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.get<ArtWorkInterface>('http://127.0.0.1:8000/api/products/'+id, requestOptions);
  }

 createProduct(body:any): Observable<ArtWorkInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const};
    return this.http.post<ArtWorkInterface>(
      'http://127.0.0.1:8000/api/products',body,
      requestOptions);
  }
  updateProduct(id:number,body:any): Observable<ArtWorkInterface> {   ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const,body };
    return this.http.put<ArtWorkInterface>('http://127.0.0.1:8000/api/products/'+id, requestOptions);
  }
  deleteProduct(id:number): Observable<ArtWorkInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const,};
    return this.http.delete<ArtWorkInterface>('http://127.0.0.1:8000/api/products/'+id, requestOptions);
  }

  searchByName(ji:string): Observable<any> {
    const body={"name":ji}
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.post('http://127.0.0.1:8000/search', body,requestOptions);
  }
  //------get methods can work but the post method are more secure and better for complex queries -------------------------------------------------
  // searchByName(name:string): Observable<ArtWorkInterface> {
  //   // const body={"keyWord":name}
  //   // Pass headers in the request options
  //   const requestOptions = { headers: this.headers, responseType: 'json' as const };
  //   return this.http.get<ArtWorkInterface>('http://127.0.0.1:8000/api/products/search'+name,requestOptions);
  // }
  //----------------------------------------------------------------------------



  // <!---------------------------- users section-->
  // <!---------------------------- users section-->



  getUsers(): Observable<UserInterface[]> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.get<UserInterface[]>('http://127.0.0.1:8000/api/users/', requestOptions);
  }

  getUser(id:number): Observable<UserInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const };
    return this.http.get<UserInterface>('http://127.0.0.1:8000/api/products/'+id, requestOptions);
  }

  createUser(body:any):Observable<UserInterface>{
    const requestOptions= {headers:this.headers,responseType:'json' as const};
    return this.http.post<UserInterface>('http://127.0.0.1:8000/api/users',body,requestOptions);
  }


  updateUser(id:number,body:any): Observable<UserInterface> {   ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const,body };
    return this.http.put<UserInterface>('http://127.0.0.1:8000/api/users/'+id, requestOptions);
  }
  deleteUser(id:number): Observable<UserInterface> {
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const,};
    return this.http.delete<UserInterface>('http://127.0.0.1:8000/api/users/'+id, requestOptions);
  }




  // <!---------------------------- order section-->
  // <!---------------------------- order section-->


  updateOrder(id:number,body:any): Observable<OrderInterface> {   ////>>>>>>>>>>update
    // Pass headers in the request options
    const requestOptions = { headers: this.headers, responseType: 'json' as const,body };
    return this.http.put<ArtWorkInterface>('http://127.0.0.1:8000/api/orders/'+id, requestOptions);
  }
  createOrder(body:any):Observable<OrderInterface>{
    const requestOptions= {headers:this.headers,responseType:'json' as const};
    return this.http.post<OrderInterface>('http://127.0.0.1:8000/api/orders',body,requestOptions);
  }


}
