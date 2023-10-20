import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../models/users/users.model';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: UsersModel = {
    name: '',
    email: '',
    actived: true,
    password: '',
  };
  submitted = false;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {}

  saveUser(): void {
    const data = {
      name: this.users.name,
      email: this.users.email,
      password: this.users.password,
    };

    this.userService.createUser(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  newUser(): void {
    this.submitted = false;
    this.users = {
      name: '',
      email: '',
      actived: true,
      password: '',
    };
  }
}
