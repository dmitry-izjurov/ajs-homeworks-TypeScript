import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

console.log(cart.items);

const a = new Movie(2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фентези', 'приключения'], '137 мин. / 02:17');
console.log(a);

console.log(cart.totalPrice());
console.log(cart.discount(1));
console.log(cart.removeItem(1008));
console.log(cart.items);