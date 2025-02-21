import { Component, OnInit } from '@angular/core';
import { NetworkService } from './service/network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  network: string = '';
  constructor(private networkService: NetworkService) {}
  ngOnInit(): void {
    this.network = this.networkService.getConnection();
  }
}
