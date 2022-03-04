import express from "express";

const router = express.Router();

// POST { name }
//When the user wants to add a new expense, the app will invoke the /expense endpoint with the POST method, with some parameters that describe the expense
//POST /expense { 
    // trip(id),
    //  date,
    //   amount,
    //    category( provide list of static categories),
    //     description
    //  }
    router.post('/trip', (req, res) => {
        res.send("Post Trip")
    })

// GET/expenses {trip}
    router.get('/trip', (req, res) => {
        res.send('Get Trip')
    })

    router.get('/expense', (req, res) => {
        res.send('Get Expense')
    })

    router.post('/expense', (req, res) => {
        res.send('Post Expense')
    })

// PUT trips

// DELETE trips

export default router;
