const { createWriteStream } = require('fs');

let writeStream = createWriteStream('./pictures.csv');

function writeFiftyMillionTimes(writer, encoding, callback) {
  let i = 50000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 50000000) {
        let data = 'id,url,listing\n';
        writer.write(data, encoding);
      } else if (i === 0) {
        let data = `${i + 1},http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${Math.floor(Math.random() * 40)},10000000\n`;
        ok = writer.write(data, encoding, callback);
      } else {
        let data = `${i + 1},http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${Math.floor(Math.random() * 40)},${Math.ceil(i / 5)}\n`;
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

writeFiftyMillionTimes(writeStream, 'utf8', () => {writeStream.end()})
 