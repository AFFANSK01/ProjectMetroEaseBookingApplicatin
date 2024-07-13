import { Component } from '@angular/core';
import { MetroService } from '../../../service/metro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Metro } from '../../../models/metro';

@Component({
  selector: 'app-searchmetro',
  templateUrl: './searchmetro.component.html',
  styleUrl: './searchmetro.component.css'
})
export class SearchmetroComponent {

  constructor(private service:MetroService, private route:ActivatedRoute, private router:Router){}

  metro:Metro = new Metro();
  id:number=0;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.service.searchMetro(this.id).subscribe((data)=>{
      this.metro=data;
    })
  }

  back() {
    this.router.navigate(['/get'])
    }
}
