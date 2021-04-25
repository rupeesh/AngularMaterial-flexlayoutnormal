import {  Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceService } from '../service.service';
import {  take } from 'rxjs/operators';

@Component({
  selector: 'app-owlslider',
  templateUrl: './owlslider.component.html',
  styleUrls: ['./owlslider.component.scss']
})
export class OwlsliderComponent implements OnInit {

  //slidesStore:[];

  slidesStore = [
    {
      id:1,
      src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdw8Z-dOgc9IXrW7zX12rkL0ZrcjhMdhIRUw&usqp=CAU',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:2,
      src:'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:3,
      src:'https://cdn.pixabay.com/photo/2018/09/23/18/30/drop-3698073__340.jpg',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:4,
      src:'https://www.pbs.org/wnet/nature/files/2019/07/Super-Hummingbirds-2-1280x675.jpg',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:5,
      src:'https://thumbs.dreamstime.com/b/autumn-landscape-nature-background-dried-flowers-water-drops-rain-field-banner-selective-focus-75038244.jpg',
      alt:'Image_5',
      title:'Image_5'
    }
  ]


  constructor(private service:ServiceService ) { }

  ngOnInit() {
    //this.onFetchSlider();
  }

  
  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  } 


  onFetchSlider(){
    this.service.fetchImages().pipe(take(5)).subscribe((res:any) => {
      //console.log(JSON.stringify(res));
      console.log(res);
      //res = JSON.stringify(this.slidesStore)
    })
  }


}
