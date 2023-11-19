import fs from "fs";

export default function GetBook(req, res) {
  const { bookname } = req.body;
  const filePath = `app/books/${bookname}`;

  if (req.method === "POST") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).end(err);
      } else {
        res.send(data);
      }
    });
  }
}
