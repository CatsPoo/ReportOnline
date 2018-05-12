import { Injectable } from '@angular/core';

@Injectable()
export class ReportService {

  constructor() { }

}


export class Report{
  private _endTime:String;
  constructor(
    private _date:Date,
    private _startTime:String,
    private _staffMember:String,
    private _system:String,
    private _type:String,
    private _isReport:Boolean,
  ){

  }

  get date():Date{return this._date;}
  get startDate():String{return this._startTime;}
  get staffMember():String{return this.staffMember;}
  get type():String{return this._type;}
  get isReport():Boolean{return this._isReport;}
  get endTime():String{return this.endTime;}
  get system():String {return this._system;}

}