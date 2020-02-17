const { createWriteStream } = require('fs');
const { lorem, commerce, random, address } = require('faker');

let writeStream = createWriteStream('./listings.csv');

const categories = ['Entire guesthouse', 'Entire house', 'Entire apartment', 'Entire cabin', 'Entire guest suite', 'Entire cottage', 'Entire villa', 'Entire bungalow', 'Private room', 'Entire loft', 'Shared room'];

function writeTenMillionTimes(writer, encoding, callback) {
  let i = 10000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 10000000) {
        let data = 'category,beds,title,price,score,reviews,city,state,country\n';
        writer.write(data, encoding);
      } else if (i === 0) {
        let data = `${categories[Math.floor(Math.random() * 11)]},${Math.floor(Math.random() * 21)},${lorem.words()},${commerce.price()},${Math.floor(Math.random() * 6)},${Math.floor(random.number() / 100)},${address.city()},${address.state()},${address.country()}\n`;
        ok = writer.write(data, encoding, callback);
      } else {
        let data = `${categories[Math.floor(Math.random() * 11)]},${Math.floor(Math.random() * 21)},${lorem.words()},${commerce.price()},${Math.floor(Math.random() * 6)},${Math.floor(random.number() / 100)},${address.city()},${address.state()},${address.country()}\n`;
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

// for (let i = 0; i < 10000001; i++) {
//   if (i === 0) {
//     let data = 'category,beds,title,price,score,reviews,city,state,country\n';
//     writeStream.write(data);
//   } else {
//     let data = `${categories[Math.floor(Math.random() * 11)]},${Math.floor(Math.random() * 21)},${lorem.words()},${commerce.price()},${Math.floor(Math.random() * 6)},${Math.floor(random.number() / 100)},${address.city()},${address.state()},${address.country()}\n`;
//     writeStream.write(data);
//   }
// }

// writeStream.end();

writeTenMillionTimes(writeStream, 'utf8', () => {writeStream.end()})
 