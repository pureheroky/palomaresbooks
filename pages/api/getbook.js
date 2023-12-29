import fs from "fs";
import { RobokassaHelper } from "node-robokassa";

const robokassaHelper = new RobokassaHelper({
  merchantLogin: "admin",
  hashingAlgorithm: "sha256",
  password1: "O72tOpOLCc7mxKfCR1W3",
  password2: "tYGo5g7tys2yI0cPT1RL",

  testMode: true,
  resultUrlRequestMethod: "POST",
});

export default function GetBook(req, res) {
  const { bookname, price, id } = req.body;
  const filePath = `app/books/${bookname}`;

  if (req.method === "POST") {
    const sum = price;
    const desc = "Спасибо за приобритение книги " + bookname;

    const options = {
      invId: 100500,
      email: "email@example.com",
      outSumCurrency: "RUB",
      isTest: true,
      userData: {
        productId: "book id: " + id,
      },
    };

    const paymentUrl = robokassaHelper.generatePaymentUrl(sum, desc, options);

    console.log(paymentUrl, typeof paymentUrl);

    res.send([paymentUrl]);

    // fs.readFile(filePath, (err, data) => {
    //   if (err) {
    //     console.error(err);
    //     res.status(500).end(err);
    //   } else {
    //     res.send(data);
    //   }
    // });
  }
}
