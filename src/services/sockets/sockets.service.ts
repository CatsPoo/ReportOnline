import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import * as io from 'socket.io-client';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class SocketService {
  private url: string = 'localhost:3000';
  private socket;


  constructor() {
    this.socket = io(this.url);
  }

  testConnection() {

    this.socket.emit('test', 'hello ron');
  }

  getData() {
    this.socket.on('getData', (data) => {
      console.log(data);
      return data

    });

    this.socket.emit('getData', 'hello server');
  }

  getReports() {
    this.socket.on('getAllReports', (data) => {
      return data;
    });
    this.socket.emit('getReports', 'hello server');
  }

  addNewReport(report){
    this.socket.on('addNewReport', (data) => {
      return data;
    });
    this.socket.emit('addNewReport', report);
  }
}