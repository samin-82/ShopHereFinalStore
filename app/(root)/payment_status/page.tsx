// // import React from 'react'
// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { z } from "zod";
// // import { useUser } from "@clerk/nextjs";
// import Image from "next/image";
// import { useSearchParams } from "next/navigation";
// // import { useRouter } from "next/navigation";

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// });
// const page =  () => {
//   const searchParams = useSearchParams();
//   const status = searchParams.get("Status");
//   const authority = searchParams.get("Authority");
//   console.log(status);
//   console.log(authority);
// //   const router = useRouter();
// //   const { user } = useUser();
// //   const handleCheckout = async () => {
// //     try {
// //       if (!user) {
// //         router.push("sign-in");
// //       } else {
// //         const res = await fetch(
// //           // `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
// //           `https://sandbox.zarinpal.com/pg/v4/payment/verify.json`,
// //           {
// //             method: "POST",

// //             body: JSON.stringify({ name: "tesssssst" }),
// //             // body: JSON.stringify({ cartItems: cart.cartItems, customer }),
// //             // body: JSON.stringify({ customer:'samin',cartItems:'banana' }),
// //           }
// //         );
// //         const data = await res.json();
// //         // window.location.href = data.url;
// //         console.log("tesssssssst for payment");
// //         const authority = data.data.data.authority;
// //         console.log(authority);
// //         // Location: https://www.zarinpal.com/pg/StartPay/ . $result['data']["authority"]

// //         router.push(` https://sandbox.zarinpal.com/pg/StartPay/${authority}`);
// //       }
// //     } catch (err) {
// //       console.log("[checkout_POST]", err);
// //     }
// //   };

// return (
//     <div>

//     </div>
//   );
// };

// export default page;
///////////////////////////////////////////////////////////////////
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  // username: z.string().min(2, {
  //   message: "Username must be at least 2 characters.",
  // }),

  street: z.string().nonempty(),
  city: z.string().nonempty(),
  state: z.string().nonempty(),
  postalCode: z.string().nonempty(),
  country: z.string().nonempty(),
});

export default function ProfileForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // username: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // <Check size={16} absoluteStrokeWidth />;
{/* <Check size={16} strokeWidth={2.75} absoluteStrokeWidth />; */}
  return (
    <div className="flex flex-col  gap-10  p-12">
      <div className="flex flex-col items-center bg-slate-100 p-10 rounded-3xl">
        <Check className="text-green-600" size={100} strokeWidth={2.75} />
        <p className="text-green-900">payment was successful enter shipping address below</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8   ">
          <div className=" md:grid md:grid-cols-3 gap-8  ">
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>street</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>city</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>state</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>postalCode</FormLabel>
                  <FormControl>
                    <Input
                      // placeholder="348739847"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>country</FormLabel>
                  <FormControl>
                    <Input placeholder="Iran" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
