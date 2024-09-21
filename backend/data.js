import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Basliel',
          email: 'basliel@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'aman',
          email: 'aman@gmail.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products: [
        {
            //_id: '1',
            name: 'Samsung ultra',
            slug: 'Samsung-max',
            category: 'cellphone',
            image: '/images/p1.jpg',
            price: 1200,
            countInStock: 0,
            brand: 'Sumsung',
            rating:4.5,
            numReviews:10,
            description: 'high quality Mobile'
        },
        {
            //_id: '2',
            name: 'zte ultra',
            slug: 'zte-max',
            category: 'cellphone',
            image: '/images/p2.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'zte',
            rating:4.5,
            numReviews:4,
            description: 'high quality mobile'
        },
        {
            //_id: '3',
            name: 'Iphone ultra',
            slug: 'Iphone-max',
            category: 'cellphone',
            image: '/images/p3.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'Apple',
            rating:4.5,
            numReviews:9,
            description: 'high quality Mobile camera'
        },
        {
            //_id: '4',
            name: 'Huwawei ultra',
            slug: 'Huwawei-max',
            category: 'cellphone',
            image: '/images/p4.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'Huwawei',
            rating:4.5,
            numReviews:11,
            description: 'high quality Mobile camera'
        },
    ],
};

export default data;