import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

interface Product {
  name: string;
  description: string;
  price: number;
  artist: string;
  type: string;
  date: Date;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'artist', 'type', 'date'];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

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

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.products;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: any): void {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onInputChange(event: any) {
    // Access the value from the event target
    const inputValue = event.target.value;
    // Handle the input value as needed
  }

}
