import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  name: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
}

interface Provider {
  id: number;
  name: string;
  area: string;
  description: string;
  image: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'SupplirBuy';
  providerImageUrl = 'https://cdn-icons-png.flaticon.com/512/6681/6681204.png';
  providers: Provider[] = [
    { id: 1, name: 'Proveedor 1', area: 'Limpieza', description: 'Pequeña reseña sobre el proveedor 1.', image: this.providerImageUrl, products: [
        { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
        { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
        { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
        { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
        { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
        { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
        { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
        { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },
      ] },
    { id: 2, name: 'Proveedor 2', area: 'Comida', description: 'Pequeña reseña sobre el proveedor 2.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 3, name: 'Proveedor 3', area: 'Golosinas', description: 'Pequeña reseña sobre el proveedor 3.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 4, name: 'Proveedor 4', area: 'Bebidas', description: 'Pequeña reseña sobre el proveedor 4.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 5, name: 'Proveedor 5', area: 'Electrónica', description: 'Pequeña reseña sobre el proveedor 5.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 6, name: 'Proveedor 6', area: 'Juguetes', description: 'Pequeña reseña sobre el proveedor 6.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 7, name: 'Proveedor 7', area: 'Ropa', description: 'Pequeña reseña sobre el proveedor 7.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 8, name: 'Proveedor 8', area: 'Hogar', description: 'Pequeña reseña sobre el proveedor 8.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 9, name: 'Proveedor 9', area: 'Herramientas', description: 'Pequeña reseña sobre el proveedor 9.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
    { id: 10, name: 'Proveedor 10', area: 'Automóviles', description: 'Pequeña reseña sobre el proveedor 10.', image: this.providerImageUrl, products: [
      { name: 'Producto 1.1', brand: 'Marca A', price: 10.99, quantity: 20, image: 'URL_imagen_producto_1_1' },
      { name: 'Producto 1.2', brand: 'Marca B', price: 25.50, quantity: 15, image: 'URL_imagen_producto_1_2' },
      { name: 'Producto 1.3', brand: 'Marca C', price: 15.99, quantity: 25, image: 'URL_imagen_producto_1_3' },
      { name: 'Producto 1.4', brand: 'Marca D', price: 30.50, quantity: 10, image: 'URL_imagen_producto_1_4' },
      { name: 'Producto 1.5', brand: 'Marca E', price: 12.75, quantity: 18, image: 'URL_imagen_producto_1_5' },
      { name: 'Producto 1.6', brand: 'Marca F', price: 18.20, quantity: 30, image: 'URL_imagen_producto_1_6' },
      { name: 'Producto 1.7', brand: 'Marca G', price: 22.99, quantity: 22, image: 'URL_imagen_producto_1_7' },
      { name: 'Producto 1.8', brand: 'Marca H', price: 27.50, quantity: 12, image: 'URL_imagen_producto_1_8' },      ] },
  ];

  expandedProvider: Provider | null = null;
  isPageLocked = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.expandedProvider && !this.isClickInsideProvider(event)) {
      this.expandedProvider = null;
      this.isPageLocked = false;
      this.renderer.removeClass(document.body, 'provider-expanded');
    }
  }

  private isClickInsideProvider(event: Event): boolean {
    const element = event.target as HTMLElement;
    return !!element.closest('.provider') || !!element.closest('.expanded-details');
  }

  onProviderClick(provider: Provider): void {
    this.expandedProvider = this.expandedProvider === provider ? null : provider;
    this.isPageLocked = !!this.expandedProvider;
    this.renderer[this.isPageLocked ? 'addClass' : 'removeClass'](document.body, 'provider-expanded');
  }
  
}