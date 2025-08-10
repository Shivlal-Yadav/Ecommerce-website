export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
};

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Tee',
    price: 40,
    imageUrl: '/placeholder.svg',
    description: 'A comfortable, classic t-shirt made from 100% cotton.'
  },
  {
    id: '2',
    name: 'Black Hoodie',
    price: 70,
    imageUrl: '/placeholder.svg',
    description: 'A warm and stylish hoodie, perfect for cooler weather.'
  },
  {
    id: '3',
    name: 'ACME Sticker Pack',
    price: 15,
    imageUrl: '/placeholder.svg',
    description: 'A pack of 10 high-quality vinyl stickers with the ACME logo.'
  },
  {
    id: '4',
    name: 'ACME Beanie',
    price: 30,
    imageUrl: '/placeholder.png',
    description: 'A soft, warm beanie to keep your head warm in style.'
  },
];
