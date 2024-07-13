import { Component } from '@angular/core';
import { MetroService } from '../../../service/metro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Metro } from '../../../models/metro';

@Component({
  selector: 'app-updatemetro',
  templateUrl: './updatemetro.component.html',
  styleUrl: './updatemetro.component.css'
})
export class UpdatemetroComponent {

  constructor(private service:MetroService, private route:ActivatedRoute, private router:Router ){}

  metro = new Metro();
  id:number=0;

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.service.searchMetro(this.id).subscribe((data)=>{
      this.metro=data;
    });
  }
  onSubmit()
  {
    this.updateMetro();
  }

  updateMetro()
  {
    
    
    this.service.add(this.metro).subscribe((data)=>{
      console.log(data);
      this.goToList();
    });
  }

  goToList()
  {
    this.router.navigate(['get']);
  }
  back() {
    this.router.navigate(['/get'])
    }
}
