import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  featuredArtworks: any=[
    {
      "id": 1,
      "title": "The Art of the Game",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "https://ipfs.io/ipfs/QmQZ2v3J5YxVk6V6"
    }]


  testimonials: any=[
    {
      "name": "Jane Doe",
      "title": "CEO",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } ]
    featuredArtists: any=[{
      "name": "Jane Doe",
      "title": "CEO",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    }]
    upcomingExhibitions: any=[{
      "name": "Jane Doe",
      "title": "CEO",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    }]
    latestNews: any=[{
      "name": "Jane Doe",
      "title": "CEO",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    }]










  constructor() { }
}
