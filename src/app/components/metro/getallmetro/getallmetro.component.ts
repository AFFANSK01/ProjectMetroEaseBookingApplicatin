import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MetroService } from '../../../service/metro.service';
import { Observable, of } from 'rxjs';
import { Metro } from '../../../models/metro';

@Component({
  selector: 'app-getallmetro',
  templateUrl: './getallmetro.component.html',
  styleUrl: './getallmetro.component.css'
})
export class GetallmetroComponent {

  constructor(private service:MetroService, private router:Router){}

  public metros:Observable<Metro []>=of([]);

  ngOnInit(){
    console.log("Inside getAll Method");
    this.getAllMetro();
  }

  getAllMetro()
  {
    console.log("Inside getAll Method");
    this.metros = this.service.getAllMetro();
  }

  deleteMetro(id:number)
    {
      console.log("Inside delete method")
        this.service.deleteMetro(id).subscribe((data)=>{
          console.log(data);
          this.getAllMetro();
        });
    }


  findMetro(id:number)
    {
        this.router.navigate(['search',id]);
    }


    updateMetro(id:number)
    {
      this.router.navigate(['update',id]);
    }

    back() {
      this.router.navigate(['/dashboard'])
      }
}
