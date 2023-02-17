import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-artforms',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformsComponent {

  constructor(private router:Router,private hero:HeroService){}
  artforms=this.hero.giveData



  
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/single']);
}
}
