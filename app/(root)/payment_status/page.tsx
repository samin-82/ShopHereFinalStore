// import React from 'react'
"use client";

// import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";

const page =  () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("Status");
  const authority = searchParams.get("Authority");
  console.log(status);
  console.log(authority);
//   const router = useRouter();
//   const { user } = useUser();
//   const handleCheckout = async () => {
//     try {
//       if (!user) {
//         router.push("sign-in");
//       } else {
//         const res = await fetch(
//           // `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
//           `https://sandbox.zarinpal.com/pg/v4/payment/verify.json`,
//           {
//             method: "POST",

//             body: JSON.stringify({ name: "tesssssst" }),
//             // body: JSON.stringify({ cartItems: cart.cartItems, customer }),
//             // body: JSON.stringify({ customer:'samin',cartItems:'banana' }),
//           }
//         );
//         const data = await res.json();
//         // window.location.href = data.url;
//         console.log("tesssssssst for payment");
//         const authority = data.data.data.authority;
//         console.log(authority);
//         // Location: https://www.zarinpal.com/pg/StartPay/ . $result['data']["authority"]

//         router.push(` https://sandbox.zarinpal.com/pg/StartPay/${authority}`);
//       }
//     } catch (err) {
//       console.log("[checkout_POST]", err);
//     }
//   };
  return <div>this is payment test page</div>;
};

export default page;
