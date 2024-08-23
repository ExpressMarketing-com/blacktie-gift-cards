import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request, response) {
  const data = await request.json();
  console.log(data);
  try {    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "blacktiecarpetcare18@gmail.com",
        pass: "rhbvqbdxncycdmay",
      },
    });
    const info = await transporter.sendMail({
      from: "blacktiecarpetcare18@gmail.com", 
      to: `${data.recemail}`, 
      subject: `Hi! ${data?.recemail} | Professional carpet cleaning services`, 
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Professional carpet cleaning services</title>
      </head>
      <body>
          <table style="max-width: 600px; height: auto; padding: 15px;  max-height: 1000px; margin-left: auto; margin-right: auto; background: #000000;">
              <!-- Header Section -->
              <tr>
                  <td style=" text-align: center; font-size: 30px; color: white; font-family: sans-serif; font-weight: bold;">
                      
                      <p style="font-size: 30px; color: white; font-family: sans-serif; font-weight: bold">
                      <span style="color: #E05016;">${data?.name}</span> Purchased<br>
                      An <span style="color: #E05016;">ultimate e-bonus gift</span> for you to brighten your day!</p>
                  </td>
              </tr>
              <!-- Image and Price Section -->
              ${data?.data.map((pro)=>{
                return`
                  <div 
                  style="padding-top: 10px; border-bottom:10px solid #e05016;display:flex;width:100%;height:100%;background: linear-gradient(157deg, #1D1D1D 0%, #000 100%);border-radius:15px; ">
                  <div style=" font-size: 28px; font-family: sans-serif; width: 23.33%; font-weight: bolder; color: #E05016; padding-left:10px;">
                  $${pro.price}
                  </div>
                  <div style="width: 35.33%; margin: 0 auto;">
                  <img src="https://cdn.sanity.io/images/h7clcdeo/production/eedba85e7c649e29e55dde105079756842342f9a-212x265.png" alt="image" 
                  style="margin: 0px auto; height: auto; display: block;" />
                  </div>
                  <div style="width: 35.33%;text-align: start; ">
                  <img src="https://cdn.sanity.io/images/h7clcdeo/production/5b84d6a6d51e79ee7ba4f7911109bb864d9b328f-114x53.png" alt="image" 
                  style="margin: 0px auto; height: auto; display: block;" />
                  </div>
                  </div>
              `
              })}
              <!-- Gift Card Details Section -->
              <tr>
                  <td style="padding: 0 30px;">
                      <p style="text-align: center; margin-top: 40px; color: white; font-family: sans-serif; font-size: medium;">
                          As a token of appreciation for being in their lives, ${data?.name} has sent you a gift card from Black Tie Carpet Care so you can treat yourself to a stress-free cleaning session. This $${data?.data?.reduce((amount, item) => amount + item.price,0)}
                           Gift Card is only redeemable
                           for services that are offered through our website. Depending on services booked, this Gift Card could provide you a completely free service or a substantial discount.
                          </p>
                            <p style="color: white; font-family: sans-serif; font-size: medium; text-decoration: none;">Sender E-mail: ${data.email}</p>
                          <p style="text-align: center; font: bold; font-size: large; color: #E05016; max-width: 580px; margin-top: 30px; font-family: sans-serif">
                          For further details, check out the website and Embrace The Clean!</p>
                  </td>
              </tr>
      
              <!-- Buttons Section -->
              <tr>
                  <td style="text-align: center; padding: 0 2px; margin-bottom: 15px;">
                      <a href="https://www.blacktiecarpetcare.com/">
                      <button style="padding: 12px 50px; font-size: 18px; background-color: #E05016; color: white; border: none; border-radius: 20px; cursor: pointer; transition: background-color 0.3s ease; margin-right: 10px;">
                      Visit Website
                      </button>
                      </a>
                      <a href="https://www.blacktiecarpetcare.com/special-offers-deals">
                          <button style="padding: 12px 50px; font-size: 18px; background-color: #E05016; color: white; border: none; border-radius: 20px; cursor: pointer; transition: background-color 0.3s ease;">
                          Free Quote Request
                          </button>
                      </a>
                  </td>
              </tr>
          </table>
      </body>
      </html>
     `, 
    });
    const sender = await transporter.sendMail({
      from: "blacktiecarpetcare18@gmail.com", 
      to: `${data?.email}`, 
      subject: `Hi! ${data?.name} | Professional carpet cleaning services`, 
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Professional carpet cleaning services</title>
      </head>
      <body>
          <table style="max-width: 600px; height: auto; padding: 15px;  max-height: 1000px; margin-left: auto; margin-right: auto; background: #000000;">
              <!-- Header Section -->
              <tr>
                  <td style=" text-align: center; font-size: 30px; color: white; font-family: sans-serif; font-weight: bold;">
                      
                      <p style="font-size: 30px; color: white; font-family: sans-serif; font-weight: bold"><span style="color: #E05016;">
                      Hi!,<span style="color: #E05016;"> ${data?.name}</span> <br></br>
                      Here is the  gift card of $${data?.data?.reduce((amount, item) => amount + item.price,0)}
                      </span>you bought for ${data.recname}</p>
                  </td>
              </tr>
              <!-- Image and Price Section -->
              ${data?.data.map((pro)=>{
                return`
                  <div 
                  style="padding-top: 10px; border-bottom:10px solid #e05016;display:flex;width:100%;height:100%;background: linear-gradient(157deg, #1D1D1D 0%, #000 100%);border-radius:15px; ">
                  <div style=" font-size: 28px; font-family: sans-serif; width: 23.33%; font-weight: bolder; color: #E05016; padding-left:10px;">
                  $${pro.price}
                  </div>
                  <div style="width: 35.33%; margin: 0 auto;">
                  <img src="https://cdn.sanity.io/images/h7clcdeo/production/eedba85e7c649e29e55dde105079756842342f9a-212x265.png" alt="image" 
                  style="margin: 0px auto; height: auto; display: block;" />
                  </div>
                  <div style="width: 35.33%;text-align: start; ">
                  <img src="https://cdn.sanity.io/images/h7clcdeo/production/5b84d6a6d51e79ee7ba4f7911109bb864d9b328f-114x53.png" alt="image" 
                  style="margin: 0px auto; height: auto; display: block;" />
                  </div>
                  </div>
              `
              })}
              <!-- Gift Card Details Section -->
              <tr>
                  <td style="padding: 0 30px;">
                      <p style="text-align: center; margin-top: 40px; color: white; font-family: sans-serif; font-size: medium;">
                      You can find more gift cards on our website that can be used towards any service at Black Tie Carpet Care, making them the ideal gift for clean freaks!
                          </p>
                            
                          <p style="text-align: center; font: bold; font-size: large; color: #E05016; max-width: 580px; margin-top: 30px; font-family: sans-serif">
                          Thank you for this purchase by all of us at Black Tie Carpet Care!</p>
                  </td>
              </tr>
      
              <!-- Buttons Section -->
              <tr>
                  <td style="text-align: center; padding: 0 2px; margin-bottom: 15px;">
                      <a href="https://www.blacktiecarpetcare.com/">
                          <button style="padding: 12px 50px; font-size: 18px; background-color: #E05016; color: white; border: none; border-radius: 20px; cursor: pointer; transition: background-color 0.3s ease; margin-right: 10px;">Visit Us</button>
                      </a>
                      <a href="https://book.housecallpro.com/book/Black-Tie-Carpet-Care/001f382909684d7bb1c53c58c6f6d6c2">
                          <button style="padding: 12px 50px; font-size: 18px; background-color: #E05016; color: white; border: none; border-radius: 20px; cursor: pointer; transition: background-color 0.3s ease;">Book Online</button>
                      </a>
                  </td>
              </tr>
          </table>
      
      </body>
      
      </html>
      
      
                    `, 
    });
    const client = await transporter.sendMail({
      from: "blacktiecarpetcare18@gmail.com", 
      to: "farismith.internativelabs@gmail.com", 
      subject: `E-mail for Client | Professional carpet cleaning services`, 
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Professional carpet cleaning services</title>
      </head>
      <body>
          <table style="max-width: 600px; height: auto; padding: 15px;  max-height: 1000px; margin-left: auto; margin-right: auto; background: #000000;">
              <!-- Header Section -->
              <tr>
                  <td style=" text-align: center; font-size: 30px; color: white; font-family: sans-serif; font-weight: bold;">
                      
                      <p style="font-size: 30px; color: white; font-family: sans-serif; font-weight: bold">
                      <span style="color: #E05016;"> ${data?.name}</span>
                      has purchased <br></br> a gift card of $${data?.data?.reduce((amount, item) => amount + item.price,0)} for 
                      <span style="color: #E05016;"> 
                      ${data.recname}
                      </span> </p>
                  </td>
              </tr>
              <!-- Image and Price Section -->
              ${data?.data.map((pro)=>{
                return`
                  <div 
                  style="padding-top: 10px; border-bottom:10px solid #e05016;display:flex;width:100%;height:100%;background: linear-gradient(157deg, #1D1D1D 0%, #000 100%);border-radius:15px; ">
                  <div style=" font-size: 28px; font-family: sans-serif; width: 23.33%; font-weight: bolder; color: #E05016; padding-left:10px;">
                  $${pro.price}
                  </div>
                  <div style="width: 35.33%; margin: 0 auto;">
                  <img src="https://cdn.sanity.io/images/h7clcdeo/production/eedba85e7c649e29e55dde105079756842342f9a-212x265.png" alt="image" 
                  style="margin: 0px auto; height: auto; display: block;" />
                  </div>
                  <div style="width: 35.33%;text-align: start; ">
                  <img src="https://cdn.sanity.io/images/h7clcdeo/production/5b84d6a6d51e79ee7ba4f7911109bb864d9b328f-114x53.png" alt="image" 
                  style="margin: 0px auto; height: auto; display: block;" />
                  </div>
                  </div>
              `
              })}
              <!-- Gift Card Details Section -->
              <tr>
                  <td style="padding: 0 30px;">

                          <p style="text-align: center; font: bold; text-decoration: none; font-size: large; color: #E05016; max-width: 580px; margin-top: 30px; font-family: sans-serif">
                          Sender E-mail: ${data?.email} <br></br>
                          Recipient E-mail: ${data?.recemail}</p>
                  </td>
              </tr>
          </table>
      </body>
      </html>
                    `, 
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Message sent: %s", sender.messageId);
    console.log("Message sent: %s", client.messageId);
    return NextResponse.json([{
      message: "Email sent successfully!",
      ReceipentEmailStatus: info.messageId
    }, 
    {
      message: "Email sent successfully!",
      SenderStatus: sender.messageId
    },
    {
      message: "Email sent successfully!",
      ClientStatus: client.messageId
    }
  ]);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Eamil failed to sent!",
      Error: error.stack,
    });
  }

  
}
