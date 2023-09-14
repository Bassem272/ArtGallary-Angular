import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


interface Product {
  name: string;
  description: string;
  price: number;
  artist: string;
  type: string;
  date: Date;
}
interface Artwork {
  id: number;
  artist: string;
  title: string;
  description: string;
  image: string;
  elevation: number;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('elevate', [
      state('normal', style({ transform: 'none', boxShadow: 'none' })),
      state('elevated', style({ transform: 'translateY(-5px)', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)' })),
      transition('normal <=> elevated', animate('200ms ease-in-out')),
    ]),
  ],
})


export class ProductsComponent implements OnInit,AfterViewInit {
  productId: string | null = null;

  //   displayedColumns: string[] = ['name', 'description', 'price', 'artist', 'type', 'date'];
  // dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  // @ViewChild(MatPaginator)
  // paginator!: MatPaginator;
  // @ViewChild(MatSort)
  // sort!: MatSort;

  constructor(private router: Router
    ,private route: ActivatedRoute,
    private cartService: CartService) {}
faCartPlus=faCartPlus;

    // Function to view artwork details
    // viewArtworkDetails(artworkId: number) {
    //   // Navigate to the artwork details page with the artwork ID
    //   this.router.navigate(['/user/details', artworkId]);
    // }




  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 100,
      artist: 'Artist 1',
      type: 'Type A',
      date: new Date('2023-01-15'),
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 150,
      artist: 'Artist 2',
      type: 'Type B',
      date: new Date('2023-02-20'),
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 80,
      artist: 'Artist 3',
      type: 'Type A',
      date: new Date('2023-03-25'),
    },
    // Add more products as needed
  ];

  // onCardMouseEnter(product: Product) {
  //   product.isHovered = true;
  // }

  // onCardMouseLeave(product: Product) {
  //   product.isHovered = false;
  // }






  // Function to view artwork details
  viewArtworkDetails(artworkId: number) {
    // Navigate to the artwork details page with the artwork ID
    this.router.navigate(['/user/details', artworkId]);
  }
  // Access the route parameter (id)
  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;
    // this.updateDataSource();
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
    this.dataSource.paginator = this.paginator;

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
    console.log(product);
  }

  featuredArtworks: Artwork[]=[
    {
      "id": 1,
      "artist":"artist reality",
      "title": "betterHalfReality",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/betterHalfReality.png"
      ,"elevation":0
    },
    {
      "id": 2,
      "title": "paradiseVacation",
      "artist":"artist of vacation",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/paradiseVacation.png" ,"elevation":0
    },
    {
      "id": 3,
      "title": "enormousTree",
      "artist":"artist of tree",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/enormousTree.png" ,"elevation":0
    },  {
      "id": 4,
      "artist":"weee artist reality",
      "title": "betterHalfReality",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/betterHalfReality.png" ,"elevation":0
    },
    {
      "id": 5,
      "title": "werwte paradiseVacation",
      "artist":"artist of vacation",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/paradiseVacation.png" ,"elevation":0
    },
    {
      "id": 6,
      "title": "wreew enormousTree",
      "artist":"artist of tree",
      "description": "The Art of the Game is a series of 1000 unique digital artworks created by the community. Each piece is unique and is created by the community.",
      "image": "../../../assets/enormousTree.png" ,"elevation":0
    }]




  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  // dataSource = new MatTableDataSource(this.featuredArtworks);
  dataSource = new MatTableDataSource<Artwork>(this.featuredArtworks);
     ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.dataSource.paginator = this.paginator;
    // this.updateDataSource();
    setTimeout(() => {
this.updateDataSource();
console.log('we are here',this.featuredArtworks.length)
    }, 0);
   }


   pageSizeOptions: number[]  = [3, 6, 9, 12];
   pageSize=3;
   pageIndex=0;


   onPageChange(event: PageEvent) {
    // Handle paginator page change event
    // this.paginator.pageIndex = event.pageIndex; // Update the paginator's pageIndex
    this.updateDataSource();
    // this.updateDataSource();
    // this.dataSource.paginator = this.paginator;
    console.log('onpagechange');
    console.log(event.pageIndex);
    console.log(event);
  }

  updateDataSource() {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;

      // Get data for the current page
      const dataForCurrentPage = this.featuredArtworks.slice(startIndex, endIndex);

      // Update the data source
      this.dataSource.data = dataForCurrentPage;
      console.log('dataForCurrentPage',dataForCurrentPage);
      console.log('this.dataSource.data',this.dataSource.data);
      // this.dataSource = new MatTableDataSource(dataForCurrentPage);
    }
  }



  // getCustomers(){
  //   return this.http.get(this.url+'/customers');
  // }

  // getCustomerById(id){
  //   return this.http.get(this.url+'/customers/'+id);
  // }

  // getCustomerByName(name){
  //   return this.http.get(this.url+'/customers/name/'+name);
  // }

  }



