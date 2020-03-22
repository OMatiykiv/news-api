import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  login(postData: {name: string, password: string}) {
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAahHmHjo-CVYCTgn-hVWAPjIJz8saj0tI',
    {
      email: `${postData.name}@mail.com`,
      password: `${postData.password}6`,
      returnSecureToken: true
    }).subscribe(res => {
      this.storageService.saveToken(res);
      this.router.navigate(['/profile']);
    }, error => {
      document.getElementById("warning-alert").style.display = "block";
      setTimeout(() => {
        document.getElementById("warning-alert").style.display = "none";
      },2000);
    })
  }
}
