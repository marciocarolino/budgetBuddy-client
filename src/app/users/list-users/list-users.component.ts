import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/models/users/users.model';
import { StorageService } from 'src/app/services/storage/storage.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
})
export class ListUsersComponent implements OnInit {
  users?: UsersModel[];
  currentUsers: UsersModel = {};
  currentIndex = -1;

  constructor(
    private userService: UsersService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.retriveUsers();
  }

  retriveUsers(): void {
    const newResult = this.userService.getAll().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.error(e),
    });
  }

  refreshListUser(): void {
    this.retriveUsers();
    this.currentUsers = {};
    this.currentIndex = -1;
  }
}
