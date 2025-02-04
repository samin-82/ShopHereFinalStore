import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    // const { userId } = await auth();

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    // await connectToDB();

    // const user = await User.findOne({ clerkId: userId });

    // if (!user) {
    //   return new NextResponse("User not found", { status: 404 });
    // }

    const { name } = await req.json();
    const res = await fetch(
      // `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      "https://sandbox.zarinpal.com/pg/v4/payment/request.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          merchant_id: "1344b5d4-0048-11e8-94db-005056a205be",
          amount: 200000,
          description: "this is simply just test",
          callback_url: "http://localhost:3001/payment_status",
        }),
      }
    );
    const data = await res.json();

    // if (!productId) {
    //   return new NextResponse("Product Id required", { status: 400 });
    // }

    // const isLiked = user.wishlist.includes(productId);

    // if (isLiked) {
    //   // Dislike
    //   user.wishlist = user.wishlist.filter((id: string) => id !== productId);
    // } else {
    //   // Like
    //   user.wishlist.push(productId);
    // }

    // await user.save();

    return NextResponse.json({ data }, { status: 200 });
  } catch (err) {
    console.log("[wishlist_POST]", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
