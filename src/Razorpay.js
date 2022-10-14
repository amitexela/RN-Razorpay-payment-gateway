import RazorpayCheckout from 'react-native-razorpay';
import axios from 'axios';

const Razorpay = async () => {

  var data = JSON.stringify({
    "amount": 1000,
    "currency": "INR",
    "receipt": "Biller XY",
    "notes": {
      "notes_key_1": "Tea, Earl Grey, Hot",
      "notes_key_2": "Tea, Earl Grey… decaf."
    }
  });

  var config = {
    method: 'post',
    url: 'https://api.razorpay.com/v1/orders',
    headers: {
      'Content-Type': 'application/json',
      // Basic auth 'keyId','keySecret
      'Authorization': 'Basic cnpwX3Rlc3RfbW9TZXVKTGEyY2pxeHg6clhhWFBtMnhKU0F3blpJZkhnYkx1cmY5'
    },
    data: data
  };

  const resonse = await axios(config);


  var options = {
    description: 'consultation',
    image: 'https://i.imgur.com/3g7nmJC.jpg',
    currency: 'INR',
    key: 'rzp_test_moSeuJLa2cjqxx',
    amount: '1000',
    name: 'Biller XYZ',         // Payee Name
    order_id: resonse.data.id,//Replace this with an order_id created using Orders API.
    prefill: {
      email: 'payer@gmail.com',  // payer email
      contact: '9915734504',             // payer phone number
      name: 'Payer A',               // payer name
      method: 'upi'  // netbanking, card, upi, wallet
    },
    theme: {
      color: '#53a20e',
      hide_topbar: true  // to hide the back button else user can use any method and update his email phone number
    }
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    // {
    //   "razorpay_order_id": "order_KTbeuqgYRtKqNl", 
    //   "razorpay_payment_id": "pay_KTbf2HZJNWOVKY", 
    //   "razorpay_signature": "8f8b9591c38a7747708f0cc3328d6ec872db29f37af4fa7f8a1eca8cca46d7d7", 
    //   "status_code": 200
    // }
    console.log(data)
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    console.log(error)
    alert(`Error: ${error.code} | ${JSON.stringify(JSON.parse(error.description).error.reason)}`);
  });
}


export default Razorpay;