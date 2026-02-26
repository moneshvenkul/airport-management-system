import { Component, OnInit } from '@angular/core';
import { DashboardStats, UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content: string;
  stats: DashboardStats;
  loading = true;
  loadingError = '';

  readonly statsCards: Array<{ key: keyof DashboardStats; label: string; color: string }> = [
    { key: 'managers', label: 'Managers', color: '#0d6efd' },
    { key: 'planes', label: 'Planes', color: '#198754' },
    { key: 'pilots', label: 'Pilots', color: '#6610f2' },
    { key: 'hangars', label: 'Hangars', color: '#fd7e14' },
    { key: 'allocatedPlanes', label: 'Allocated Planes', color: '#20c997' },
    { key: 'unallocatedPlanes', label: 'Unallocated Planes', color: '#dc3545' }
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = err?.error?.message || 'Unable to load public content.';
      }
    );

    this.fetchDashboardStats();
  }

  fetchDashboardStats(): void {
    this.loading = true;
    this.loadingError = '';

    this.userService.getDashboardStats().subscribe(
      data => {
        this.stats = data;
        this.loading = false;
      },
      () => {
        this.loadingError = 'Dashboard statistics are available after login.';
        this.loading = false;
      }
    );
  }
}
