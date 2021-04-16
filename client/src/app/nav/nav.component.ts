import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { User } from './../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  //currentUser$:Observable<User>;
  //loggedIn: boolean;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    //this.currentUser$ = this.accountService.currentUser$;
    //this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (res) => {
        console.log(res);
        //this.loggedIn = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // getCurrentUser() {
  //   this.accountService.currentUser$.subscribe(
  //     (user) => {
  //       this.loggedIn = !!user;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  logout() {
    this.accountService.logout();
  }
}
