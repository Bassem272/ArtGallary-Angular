import { DecimalPipe } from "@angular/common";

export interface ArtWorkInterface {
  
  name:string;
  description:string;
  price:number;
  stock:number;
  image:string;
  category_id:number;
  status:string;


}
// Schema::create('products', function (Blueprint $table) {
//   $table->id();
//   $table->string('name');
//   $table->text('description');
//   $table->decimal('price', 10, 2);
//   $table->integer('stock');
//   $table->string('image');
//   $table->unsignedBigInteger('category_id');
//   $table->enum('status', ['active', 'inactive'])->default('active');
//   $table->timestamps();

//   $table->foreign('category_id')->references('id')->on('categories');
// });
