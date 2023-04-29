const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(express.json());  


// Route handler for creating a new category
app.post('/api/categories', async (req, res) => {
  try {
    const category = req.body;
    const docRef = await db.collection('categories').add(category);
    const newCategory = await docRef.get();
    res.json({
      id: newCategory.id,
      data: newCategory.data()
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding category');
  }
});


app.post('/api/products', async (req, res) => {
  try {
    const product = req.body;
    const docRef = await db.collection('products').add(product);
    const newProduct = await docRef.get();
    res.json({
      id: newProduct.id,
      data: newProduct.data()
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding product');
  }
});

app.listen(7000, () => {
  console.log('Server running on port 7000');
});
