import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API } from '../global';
import { useFormik } from 'formik';
import *as yup from 'yup'

const produtvalidationSchema = yup.object({
  name: yup.string()
    .required("why not fill the name?"),
  poster: yup.string()
    .min(20, "Need a longer poster")
    .required("why not fill the poster?"),
  price: yup.number()
    .required("why not fill the price?"),
  summary: yup.string()
    .min(20, "Need a longer summary")
    .required("why not fill the summary?"),
  ratings: yup.number()
    .min(1, "ratings should be above one")
    .max(5, "ratings should be below five")
    .required("why not fill the rating?")
})

export function AddProduct() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      price: "",
      summary: "",
      ratings: ""
    },
    validationSchema: produtvalidationSchema,
    onSubmit: (newProduct) => {
      console.log("onSubmit", newProduct)
      CreateProduct(newProduct)
    }
  })

  function CreateProduct(newProduct) {
    console.log("createProduct", newProduct)
    fetch(`${API}/products`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "content-Type": "application/json"
      }
    })
      .then((res) => res.json())
      .then(() => navigate("/products"))
  }

  return (

    <form onSubmit={formik.handleSubmit} >

      <div className='add-product-form' >
        <h1>Add Product</h1>

        <TextField id="name" label="Name" variant="outlined" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <br />
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}


        <TextField id="poster" label="Poster" variant="outlined" name="poster" value={formik.values.poster} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <br />
        {formik.touched.poster && formik.errors.poster ? formik.errors.poster : ""}

        <TextField id="price" label="Price" variant="outlined" name="price" value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <br />
        {formik.touched.price && formik.errors.price ? formik.errors.price : ""}


        <TextField id="summary" label="Summary" variant="outlined" name="summary" value={formik.values.summary} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <br />
        {formik.touched.summary && formik.errors.summary ? formik.errors.summary : ""}

        <TextField id="ratings" label="Ratings" variant="outlined" name="ratings" value={formik.values.ratings} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        <br />
        {formik.touched.ratings && formik.errors.ratings ? formik.errors.ratings : ""}

        <Button variant="contained" type="submit" onClick={CreateProduct} >Add Product</Button>
      </div>
    </form>
  );
}
