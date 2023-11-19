import fs from "fs";
import mammoth from "mammoth";

export default function GetBookPart(req, res) {
  const { bookname } = req.body;
  const filePath = `app/books/${bookname}`;

  if (req.method === "POST") {
    if (fs.existsSync(filePath)) {
      mammoth.extractRawText({ path: filePath }).then((result) => {
        const text = result.value;
        const lines = text.split("\n");
        const first20lines = lines.slice(0, 50);
        res.send(first20lines);
      });
    }
  }
}
