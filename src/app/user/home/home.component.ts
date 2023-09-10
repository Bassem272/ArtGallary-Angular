import { CartService } from './../cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
// import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faCartPlus = faCartPlus;

  featuredArtworks: any=[
    {
      "id": 1,
      "artist":"artist reality",
      "title": "betterHalfReality",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/betterHalfReality.png"
    },
    {
      "id": 2,
      "title": "paradiseVacation",
      "artist":"artist of vacation",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/paradiseVacation.png"
    },
    {
      "id": 3,
      "title": "enormousTree",
      "artist":"artist of tree",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/enormousTree.png"
    }]


  testimonials: any=[
    {
      "author": "Jane Doe",
      "title": "CEO",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } , {
      "author": "Jane Doe",
      "title": "CEO",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } , {
      "author": "Jane Doe",
      "title": "CEO",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } , {
      "author": "Jane Doe",
      "title": "CEO",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } , {
      "author": "Jane Doe",
      "title": "CEO",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } , {
      "author": "Jane Doe",
      "title": "CEO",
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    } ,]
    featuredArtists: any=[{
      "name": "wrath",
      "title": "CEO",
      "image":"../../../assets/authorWrath.png",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    },{
      "name": "Roboto",
      "image":"../../../assets/authorRoboto.png",
      "title": "CEO",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    },{
      "name": "Relational ",
      "image":"../../../assets/autherRational.png",
      "title": "CEO",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius  "
    },]
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
  productId: any;










    constructor(private router: Router
      ,private route: ActivatedRoute,
      private cartService: CartService) {}

    // Function to view artwork details
    viewArtworkDetails(artworkId: number) {
      // Navigate to the artwork details page with the artwork ID
      this.router.navigate(['/user/details', artworkId]);
    }
    // Access the route parameter (id)
    ngOnInit(): void {
      // Use the paramMap observable to handle changes in route parameters
      this.route.paramMap.subscribe((params: ParamMap) => {
        // Check if the 'id' parameter exists before accessing it
        if (params.has('id')) {
          this.productId = params.get('id');
          // Now you can safely use this.productId
        } else {
          // Handle the case where 'id' parameter is not present
          this.productId = null;
        }
      });
    }


    hoveredArtwork: any | null = null; // Initialize hoveredArtwork as null

    // ... Rest of your HomeComponent code ...

    // Function to handle mouseenter event
    onArtworkMouseEnter(artwork: any) {
      this.hoveredArtwork = artwork;
    }

    // Function to handle mouseleave event
    onArtworkMouseLeave() {
      this.hoveredArtwork = null;
    }
    addToCart(product: any){
      this.cartService.addToCart(product);
    }

}
