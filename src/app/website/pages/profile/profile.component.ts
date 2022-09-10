import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  User : User | null = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.userStatus$
      .subscribe(profile => {
        this.User = profile
      });
  }

}
