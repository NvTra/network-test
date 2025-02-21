import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor() {}

  getConnection(): string {
    console.log('1', (navigator as any).connection);
    console.log('2', (navigator as any).mozConnection);
    console.log('3', (navigator as any).webkitConnection);
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    if (connection) {
      return connection.effectiveType;
    }
    return 'unknown';
  }
}
