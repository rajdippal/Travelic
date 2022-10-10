import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Packages } from 'src/app/common/packages';
import { BookingsService } from 'src/app/services/bookings.service';
import { PackageService } from 'src/app/services/package.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages : Packages[] = [];
  isAddActive : boolean = false;
  location !: string;
  price !: number;
  description !: string;

  constructor(private packageService: PackageService, private router: Router, private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages(){
    this.packageService.getAllPackages().subscribe(data =>{
      this.packages = data;
    });
  }

  activeAdd(){
    this.isAddActive = true;
  }

  addPackage(){
    let pack = new Packages(10000,this.location,this.price,this.description);
    this.isAddActive = false;
    this.packageService.addPackage(pack).subscribe(data =>{
      console.log(data);
    });
    window.location.reload();
  }

  book(pack: Packages) {
    this.bookingService.currentPackage = pack;
    this.router.navigate(['/bookings']);
  }

}
