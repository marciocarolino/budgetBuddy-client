import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../models/users/users.model';
import { UsersService } from '../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  users: UsersModel = {
    name: '',
    email: '',
    actived: true,
    password: '',
    login: '',
    role: '',
  };
  submitted = false;

  ngOnInit(): void {}

  newUser(): void {
    this.submitted = false;
    this.users = {
      name: '',
      email: '',
      actived: true,
      password: '',
      login: '',
      role: '',
    };
  }

  saveUser(): void {
    const data = {
      name: this.users.name,
      email: this.users.email,
      password: this.users.password,
      login: this.users.login,
      actived: true,
      role: this.users.role,
    };

    this.userService.createUser(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (e) => console.error(e),
    });
  }

  deleteUser(): void {
    this.userService.delete(this.users.id).subscribe({
      next: (res) => {
        this.router.navigate(['/list']);
      },
      error: (e) => console.error(e),
    });
  }
}
