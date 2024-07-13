import { Component } from '@angular/core';
import { MetroService } from '../../../service/metro.service';
import { Router } from '@angular/router';
import { Metro } from '../../../models/metro';

@Component({
  selector: 'app-createmetro',
  templateUrl: './createmetro.component.html',
  styleUrl: './createmetro.component.css'
})
export class CreatemetroComponent {

  constructor(private service:MetroService,private router:Router) { }

  m=new Metro();

  onSubmit(){
    console.log("Save");
    this.save();
  }

  save(){
    console.log("inside the save method");
    this.service.add(this.m).subscribe();
    alert("Metro Created!")

  }

  back() {
    this.router.navigate(['/dashboard'])
    }
  
}
