import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeModel } from '../model/mensaje-model';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private apiUrl = 'http://localhost:8081/mensajes';

  constructor(private http: HttpClient) { }
  
  getMessage(id: number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  getAllMessage(): Observable<MensajeModel[]> {
    return this.http.get<MensajeModel[]>(this.apiUrl);
  }

  saveMensaje(mensaje: MensajeModel): Observable<MensajeModel> {
    return this.http.post<MensajeModel>(`${this.apiUrl}/guardar`, mensaje);
  }
  
  updateMensaje(mensaje: MensajeModel): Observable<MensajeModel> {
    return this.http.put<MensajeModel>(`${this.apiUrl}/editar/${mensaje.id}`, mensaje);
  }
  
  deleteMensaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}` + id);
  }

  downloadPdfMensaje(): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.apiUrl}/download-pdf`, { headers, responseType: 'blob' });
  }
  
}
