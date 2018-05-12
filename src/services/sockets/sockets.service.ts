import { Report } from './../Report/report.service';
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

  getReports() {
    io.emit('getAllReports',{});
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('getAllReports', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

  addReports(report) {
    io.emit('addNewReport',report);
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('addNewReport', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  removeReports(reportID) {
    io.emit('removeReport',reportID);
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('removeReport', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  updateReports(reportID,newReport) {
    io.emit('addNewReport',{id: reportID,report: newReport});
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('addNewReport', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }


}