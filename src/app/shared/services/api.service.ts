import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'environments/environment';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserDataService } from './user-data.service';
import { User, UserData } from '../interface/user.interface';
import { ProductData, Products, ProductInfo } from '../interface/products.interface';
import { InventoryData, Inventory, InventoryInfo } from '../interface/inventory.interface';
import { RoomData, Room, RoomInfo } from '../interface/room.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = environment.api;
  private headersOpt = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      authorization: `${localStorage.getItem('token')}`
    })
  };

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private userData: UserDataService
  ) { }

  createCustomer(customer: any): Observable<any>{
    return this.http
      .post(`${this.api}/customer`, customer)
      .pipe(map((data: any) => {
        return data.data;
      }), catchError(this.handleError));
  }

  searchCustomer(detail: any): Observable<any>{
    return this.http
      .get(`${this.api}/searchcustomer/${detail}`)
      .pipe(map((data: any) => {
        return data.data;
      }), catchError(this.handleError));
  }

  registerUser(userReg: User): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/create/user`, userReg)
      .pipe(map(user => {
        this.auth.setUser(user);
        this.getUserById().subscribe();
        return user;
      }), catchError(this.handleError));
  }

  deleteUser(id) {
    return this.http
      .delete(`${this.api}/users/${id}`, this.headersOpt)
      .pipe(map(user => user), catchError(this.handleError));
  }

  updateReq(data, id) {
    return this.http.put(`${this.api}/request/${id}`, data)
      .pipe(map((dat: any) => dat), catchError(this.handleError));
  }


  updateProd(id, data) {
    return this.http.put(`${this.api}/product/${id}`, data)
      .pipe(map((dat: any) => dat), catchError(this.handleError));
  }

  updateMeal(id, data) {
    return this.http.put(`${this.api}/restaurant/${id}`, data)
      .pipe(map((dat: any) => dat), catchError(this.handleError));
  }

  updateLodge(id, data) {
    return this.http.put(`${this.api}/roomlodge/${id}`, data)
      .pipe(map((log: any) => log.data), catchError(this.handleError));
  }

  searchGuest(roomNumber: number) {
    return this.http
      .get(`${this.api}/roomlodge/room/${roomNumber}`)
      .pipe(map((ret) => ret), catchError(this.handleError));
  }

  makeMealSales(data) {
    return this.http
      .post(`${this.api}/restaurantlog`, data)
      .pipe(map((sold: any) => sold.data), catchError(this.handleError));
  }

  makePurchase(data) {
    return this.http
    .post(`${this.api}/sales`, data)
    .pipe(map((log: any) => log.data), catchError(this.handleError));
  }

  createStaff(userReg: User): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/create/user`, userReg)
      .pipe(map(user => {
        return user;
      }), catchError(this.handleError));
  }

  getallRequest() {
    return this.http
      .get(`${this.api}/request`)
      .pipe(map((re: any) => re.data), catchError(this.handleError));
  }

  getRequestByUser(id) {
    return this.http
      .get(`${this.api}/request/${id}`)
      .pipe(map((re: any) => re.data), catchError(this.handleError));
  }

  sendRequest(data) {
    return this.http
      .post(`${this.api}/request`, data)
      .pipe(map(re => re), catchError(this.handleError));
  }

  loginUser(login: object): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/login`, login)
      .pipe(map(user => {
        this.auth.setUser(user);
        this.getUserById().subscribe();
        return user;
      }), catchError(this.handleError));
  }

  // logout() {
  //   // remove user from local storage to log user out
  //   localStorage.removeItem('currentUser');
  //   this.currentUserSubject.next(null);
  // }

  getUserById(): Observable<UserData> {
    const id = localStorage.getItem('currentUser');
    return this.http
      .get<UserData>(`${this.api}/users/${id}`, this.headersOpt)
      .pipe(map(user => {
        this.userData.setUserData(user.data);
        return user;
      }), catchError(this.handleError));
  }

  getAllStaff(): Observable<User> {
    return this.http
      .get<UserData>(`${this.api}/users`, this.headersOpt)
      .pipe(map(user => {
        return user.data;
      }), catchError(this.handleError));
  }

  getGuest(id) {
    return this.http
      .get(`${this.api}/roomlodge/${id}`)
      .pipe(map((guest: any) => {
        return guest.data;
      }), catchError(this.handleError));
  }

  getGuests() {
    return this.http
      .get(`${this.api}/roomlodge`)
      .pipe(map((guest: any) => {
        return guest.data;
      }), catchError(this.handleError));
  }

  createProduct(product: Products): Observable<ProductData> {
    const id = localStorage.getItem('currentUser');
    return this.http
      .post<ProductData>(`${this.api}/product`, product)
      .pipe(map(productData => {
        return productData;
      }), catchError(this.handleError));
  }

  createInventory(product: Inventory): Observable<InventoryData> {
    const id = localStorage.getItem('currentUser');
    return this.http
      .post<InventoryData>(`${this.api}/stock`, product)
      .pipe(map(productData => {
        return productData;
      }), catchError(this.handleError));
  }

  createRoom(room: Room): Observable<RoomData> {
    const id = localStorage.getItem('currentUser');
    return this.http
      .post<RoomData>(`${this.api}/room`, room)
      .pipe(map((rtRoom: RoomData) => rtRoom), catchError(this.handleError));
  }

  createRoomLodge(log): Observable<any> {
    return this.http
      .post(`${this.api}/roomlodge`, log)
      .pipe(map((lodged: any) => {
        return lodged;
      }), catchError(this.handleError));
  }

  getRoomTypes() {
    return this.http
      .get(`${this.api}/roomtype`)
      .pipe(map((roomtype: any) => roomtype.data), catchError(this.handleError));
  }

  createRoomType(room: Room): Observable<RoomData> {
    const id = localStorage.getItem('currentUser');
    return this.http
      .post<RoomData>(`${this.api}/roomtype`, room)
      .pipe(map((log: RoomData) => log), catchError(this.handleError));
  }

  createMeal(meal) {
    const id = localStorage.getItem('currentUser');
    return this.http
      .post(`${this.api}/restaurant`, meal)
      .pipe(map((log) => log), catchError(this.handleError));
  }

  getProduct(id?: string): Observable<ProductInfo[] | ProductInfo> {
    return this.http
      .get(`${this.api}/product/?${id}`)
      .pipe(map((prod: ProductData) => prod.data), catchError(this.handleError));
  }

  getInventory(id?: string): Observable<InventoryInfo[] | InventoryInfo> {
    return this.http
      .get(`${this.api}/stock/?${id}`)
      .pipe(map((inventory: InventoryData) => inventory.data), catchError(this.handleError));
  }

  getRooms(id?: string): Observable<RoomInfo[] | RoomInfo> {
    return this.http
      .get(`${this.api}/room/?${id}`)
      .pipe(map((room: RoomData) => room.data), catchError(this.handleError));
  }

  getMeals(id?: string): Observable<RoomInfo[] | RoomInfo> {
    return this.http
      .get(`${this.api}/restaurant/?${id}`)
      .pipe(map((meals: any) => meals.data), catchError(this.handleError));
  }

  getBills(id) {
    return this.http
      .get(`${this.api}/roomlodge/bill/${id}`)
      .pipe(map((bills) => bills), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.error.message}`;
    }
    return throwError(err);
  }
}
