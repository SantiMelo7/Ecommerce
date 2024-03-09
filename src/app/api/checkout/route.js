import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { Order } from "../../../models/Order";
import { ProductsItem } from "../../../models/ProductsItem";
import { connectMongoDB } from "../../../util/connectMongoDB";
const stripe = require('stripe')(process.env.SK);

export async function POST(req) {
    await connectMongoDB()
    const { cartProducts, address } = await req.json();
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;

    const orderDoc = await Order.create({
        userEmail,
        ...address,
        cartProducts,
        paid: false,
    });

    const stripeLineItems = [];
    for (const cartProduct of cartProducts) {
        const productInfo = await ProductsItem.findById(cartProduct._id);
        let productPrice = productInfo.price;
        const productName = cartProduct.name;
        stripeLineItems.push({
            quantity: 1,
            price_data: {
                currency: 'USD',
                product_data: {
                    name: productName,
                },
                unit_amount: productPrice * 100,
            },
        });
    }

    const stripeSession = await stripe.checkout.sessions.create({
        line_items: stripeLineItems,
        mode: 'payment',
        customer_email: userEmail,
        success_url: process.env.NEXTAUTH_URL + 'orders/' + orderDoc._id.toString() + '?clear-cart=1',
        cancel_url: process.env.NEXTAUTH_URL + 'cart?canceled=1',
        metadata: { orderId: orderDoc._id.toString() },
        payment_intent_data: {
            metadata: { orderId: orderDoc._id.toString() },
        },
        shipping_options: [
            {
                shipping_rate_data: {
                    display_name: 'Delivery fee',
                    type: 'fixed_amount',
                    fixed_amount: { amount: 500, currency: 'USD' },
                },
            }
        ],
    });

    return Response.json(stripeSession.url);
}