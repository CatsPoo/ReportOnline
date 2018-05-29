import { Component, OnInit, Input } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.css']
})
export class InfoSectionComponent implements OnInit {
  @Input() reportInfo: {};

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.route.params.subscribe(data => {
      console.log(+data['reportTitle']);
    })
  }

  finish()
  {
    console.log("click");
  }
}
