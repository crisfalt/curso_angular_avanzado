import { Component, OnInit } from '@angular/core';
declare var tinymce: any;

@Component({
  selector: 'app-admin-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public title = 'Crear';
  public editor: string;

  constructor() { }

  ngOnInit() {
  }

}
