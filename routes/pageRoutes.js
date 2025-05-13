const express = require('express');
const router = express.Router();

// events array
const events = [
  {
    title: "Community Cleanup",
    date: "2025-06-01",
    location: "Local Park",
    image: "/images/cleanup.jpg"
  },
  {
    title: "Tech Talk: Node.js Basics",
    date: "2025-06-10",
    location: "Community Center",
    image: "/images/techtalk.jpg"
  },
  {
    title: "Community BBQ",
    date: "2025-06-15",
    location: "Block B Courtyard",
    image: "/images/bbq.jpg"
  }
];

// team array
const team = [
  { name: "Arno", role: "Team Lead" },
  { name: "Nokwanda", role: "Frontend Developer" },
  { name: "Thiko", role: "Backend Developer" },
  { name: "Tshiamo", role: "Data Manager" }
];

const contacts = []; // Will hold submitted contact form data

router.get('/', (req, res) => {
    res.render('pages/home');
});

router.get('/about', (req, res) => {
    res.render('pages/about', { team });
});

router.get('/events', (req, res) => {
    res.render('pages/events', { events }); // passing the array to the view
});

router.get('/contact', (req, res) => {
    res.render('pages/contact');
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log("Contact form submitted:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // For now, we just redirect to thank you
  res.redirect('/thankyou');
});

router.get('/thankyou', (req, res) => {
    res.render('pages/thankyou');
});

module.exports = router;
