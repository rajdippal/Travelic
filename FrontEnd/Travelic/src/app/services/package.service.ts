import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Packages } from '../common/packages';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  baseUrl = 'http://localhost:8080/packages';

  constructor(private httpClient: HttpClient) { }

  getAllPackages() : Observable<Packages[]>{
    const allPackagesUrl = `${this.baseUrl}/all`;
    return this.httpClient.get<Packages[]>(allPackagesUrl);
  }

  addPackage(pack: Packages) : Observable<Object>{
    const addPackageUrl = `${this.baseUrl}/add`;
    return this.httpClient.post(addPackageUrl,pack);
  }  

}
