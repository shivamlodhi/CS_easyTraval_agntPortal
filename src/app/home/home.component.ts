import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicers/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showContact = false;
  email: string;
  password: string;
  login: boolean;
  showError: boolean;

  constructor(private userService: UserService,
              private cookieService: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.userService.isLoggedIn().subscribe(res => {
      this.login = res;
    })
  }

  btnContact() {
    if (this.showContact) {
      this.showContact = false;
    } else {
      this.showContact = true;
    }
  }

  signOut() {
    this.userService.signOut().then(() => {
      console.log("this");
      this.router.navigate(['/home']);
      this.login = false;
    });
  }

  usersignIn() {
    console.log(this.email+ this.password);
    this.userService.signIn( this.email, this.password ).then(res => {
      console.log('here' + res);
      this.router.navigate(['/users']);
      this.login = true;
    }).catch(err => {
      this.showError = true;
    });
  }

}
