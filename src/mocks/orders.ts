import { Order } from '../types/Order';

export const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668814775590-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '6372e48cbcd195b0d3d0f7f4'
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668819891337-coca-cola.png',
          price: 7,
        },
        quantity: 2,
        _id: '6372e48cbcd195b0d3d0f7f5'
      }
    ],
  }
];
