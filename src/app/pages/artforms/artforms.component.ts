import { Component } from '@angular/core';
import {data} from '../../../assets/data'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-artforms',
  templateUrl: './artforms.component.html',
  styleUrls: ['./artforms.component.css']
})
export class ArtformsComponent {
artforms=data
ngOninit():void{
  this.artforms=data
}
constructor(private router:Router)
{}
gotohere(id:any)
{
  localStorage.setItem('id',id);
  this.router.navigate(['/single']);
}
}
