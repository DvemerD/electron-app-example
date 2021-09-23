const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./news.sqlite3');

db.serialize(() => {
  db.each('SELECT id, description FROM info;', (err, row) => {
    if (err) {
      console.error(err);
    }
    
    const descr = document.querySelector('.descr');
    descr.innerHTML = row.description;
  });
});