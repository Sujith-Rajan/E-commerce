// import express from "express";
// import stripe from "stripe";
// import dotenv from "dotenv";

// dotenv.config();

// const router = express.Router();
// const stripeInstance = stripe(process.env.STRIPE_SECRET);

// router.post("/create-checkout-session", async (req, res) => {
//     const { productDetails, price, qnty, cart } = req.body.products;
//     // const {products} = req.body
//     const lineItems = [
//         {
//             price_data: {
//                 currency: "inr",
//                 product_data: {
//                     name: productDetails,
//                 },
//                 unit_amount: price * 100,
//             },
//             quantity: qnty,
//         },
//     ];

//     const session = await stripeInstance.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: lineItems,

//         mode: "payment",
//         success_url: `http://localhost:5173/success`,
//         cancel_url: `http://localhost:5173/cancel`,
//     });

//     res.json({ id: session.id, data: session });
// });

// export default router;

import express from 'express';
import stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const stripeInstance = stripe(process.env.STRIPE_SECRET);

router.post("/create-checkout-session", async (req, res) => {
    try {
        const { productDetails, price, qnty } = req.body.products;

        const lineItems = [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: productDetails,
                    },
                    unit_amount: price * 100,
                },
                quantity: qnty,
            },
        ];

        const session = await stripeInstance.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `http://localhost:5000/order/success`,
            cancel_url: `http://localhost:5000/order/cancel`,
        });

        res.json({ id: session.id, data: session });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: "Error creating checkout session" });
    }
});

router.get('/order/success', async (req, res) => {
    try {
        const session = await stripeInstance.checkout.sessions.retrieve(req.query.session_id);
        const customer = await stripeInstance.customers.retrieve(session.customer);

        res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
    } catch (error) {
        console.error("Error retrieving session details:", error);
        res.status(500).send("<html><body><h1>Order processing failed. Please contact support.</h1></body></html>");
    }
});

router.get('/order/cancel', (req, res) => {
    res.send("<html><body><h1>Order cancelled. Please try again.</h1></body></html>");
});

export default router;
