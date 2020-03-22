import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!this.storageService.getToken()) {
      this.router.navigate(['/login']);
    }
  }

}
