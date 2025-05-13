const express = require('express');
const data = require('../data/data.js');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/home', { events: data.events });
});

router.get('/about', (req, res) => {
    res.render('pages/about', { team: data.team });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events: data.events }); // passing the array to the view
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  data.contacts.push({ name, email, message });
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;
