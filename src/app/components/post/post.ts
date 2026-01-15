import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post implements OnInit{


  @Input() post!: {title: string, body: string};
  randomPhotoUrl!:string;

  ngOnInit(): void {
  this.generateRandomPhoto();
}

private generateRandomPhoto(): void{
  const randomSeed = this.generateRandomNumber(1000);
  this.randomPhotoUrl = `https://picsum.photos/seed/${randomSeed}/50`
}

private generateRandomNumber(max: number):number{
  return Math.floor(Math.random() * max);
}


}
