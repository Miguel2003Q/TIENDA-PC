import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos =[
    {id: 1, procesador: 'AMD Ryzen 9 7950X' , grafica:'NVIDIA RTX 4090 24GB', ram:'64GB RAM DDR5', Almacenamiento:'2TB NVMe SSD', price: 3499.99 },
    {id: 2, procesador: 'Intel i9-13900K' , grafica:'NVIDIA RTX 4080 16GB', ram:'32GB RAM DDR5', Almacenamiento:'1TB NVMe SSD', price: 2899.99 },
    {id: 3, procesador: 'AMD Ryzen 7 7800X3D' , grafica:'NVIDIA RTX 4070 Ti 12GB', ram:'32GB RAM DDR5', Almacenamiento:'1TB NVMe SSD', price: 2299.99 },
    {id: 4, procesador: 'Intel i7-13700K' , grafica:'NVIDIA RTX 4070 12GB', ram:'32GB RAM DDR5', Almacenamiento:'1TB NVMe SSD', price: 1899.99},
    {id: 5, procesador: 'Intel i5-12450h' , grafica:'NVIDIA RTX 4050 6GB', ram:'16GB RAM DDR5', Almacenamiento:'1TB NVMe SSD', price: 1499.00 },
    {id: 6, procesador: 'Intel i5-13600K' , grafica:'NVIDIA RTX 3070 8GB', ram:'16GB RAM DDR45', Almacenamiento:'1TB NVMe SSD', price: 1200.00 },
    {id: 7, procesador: 'AMD Ryzen 5 5600X' , grafica:'>NVIDIA RTX 3060 Ti 8GB', ram:'16GB RAM DDR4', Almacenamiento:'500GB NVMe SSD', price: 999.99 },
    {id: 8, procesador: 'INTEL I5 12500H' , grafica:'NVIDIA RTX 3050 6GB', ram:'8GB RAM DDR5', Almacenamiento:'512GB NVMe SSD', price: 1099.99 },

  ]

    constructor(private router: Router) {}

    verDetalleDoctor(Id: string): void {
      this.router.navigate(['/detalle', Id]);
    }
  
    selectedProducto: any;
}