import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation.model';

const BASE_URL = ['http://localhost:8080/api/']

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(
    private http: HttpClient,
  ) { }


  createReservtion(reservationData: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(BASE_URL + "reservation", reservationData, {headers});
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(BASE_URL + "reservations");
  }

  getReservation(id: any): Observable<Reservation> {
    return this.http.get<Reservation>(`${BASE_URL}/reservation/${id}`);
  }

  updateReservation(id: any, reservationData: any): Observable<any> {
    return this.http.put(`${BASE_URL}/reservation/${id}`, reservationData);
  }

  deleteReservation(id: any): Observable<any> {
    return this.http.delete(`${BASE_URL}/reservation/${id}`)
  }

  deleteAllReservation(): Observable<any> {
    return this.http.delete(`${BASE_URL}/reservations`)
  }

  private createAuthorizationHeader() {
    const jwtToken = localStorage.getItem('JWT');
    if (jwtToken) {
      console.log("JWT token found in the Local Storage");
      return new HttpHeaders().set(
        'Authorization', 'Bearer ' + jwtToken
      )
    } else {
      console.log("JWT token not found in the Local Storage");
      return new HttpHeaders();
    }
  }

}
