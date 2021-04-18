import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from './../_services/account.service';
import { User } from './../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  //currentUser$:Observable<User>;
  //loggedIn: boolean;

  constructor(public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    //this.currentUser$ = this.accountService.currentUser$;
    //this.getCurrentUser();
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (res) => {
        this.router.navigateByUrl('/members');
        //this.loggedIn = true;
      },
      (err) => {
        this.toastr.error(err.error);
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
    this.router.navigateByUrl('/');
  }
}
