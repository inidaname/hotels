import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserData, User, ProductData, Products, ProductInfo, Inventory, InventoryData, InventoryInfo, Room, RoomData, RoomInfo } from '@shared/interface';
import { environment } from '@environments/environment';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserDataService } from './user-data.service';


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

  registerUser(userReg: User): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/create/user`, userReg)
      .pipe(map(user => {
        this.auth.setUser(user);
        this.getUserById().subscribe();
        return user;
      }), catchError(this.handleError));
  }

  searchGuest(roomNumber: number) {
    return this.http
      .get(`${this.api}/roomlodge/room/${roomNumber}`)
      .pipe(map((ret) => ret), catchError(this.handleError));
  }

  makePurchase(data) {
    return this.http
    .post(`${this.api}/sales`, data)
    .pipe(map((data: any) => data.data), catchError(this.handleError));
  }

  createStaff(userReg: User): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/create/user`, userReg)
      .pipe(map(user => {
        return user;
      }), catchError(this.handleError));
  }

  loginUser(login: object): Observable<UserData> {
    return this.http
      .post<UserData>(`${this.api}/login`, login)
      .pipe(map(user => {
        console.log(user)
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
        console.log(user)
        return user.data;
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
    console.log('it came')
    return this.http
      .post(`${this.api}/roomlodge`, log)
      .pipe(map((lodged: any) => {
        console.log(lodged)
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
      .pipe(map((room: RoomData) => room), catchError(this.handleError));
  }

  createMeal(meal) {
    const id = localStorage.getItem('currentUser');
    return this.http
      .post(`${this.api}/restaurant`, meal)
      .pipe(map((meal) => meal), catchError(this.handleError));
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
