import React from 'react'
import './index.scss'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

const SignupSchema = Yup.object().shape({
    image: Yup.string()
    .min(2, 'at least 2 elements')
    .max(100, 'at most 100 elements!')
    .required('please fill the image inputs'),
    name: Yup.string()
    .min(2, 'at least 2 elements')
    .max(50, 'at most 50 elements!!')
    .required('please fill the  name inputs'),
  price: Yup.number()
  .min(1, 'at least 1 element!')
    .max(1000, 'at most 1000 elements!!').required('please fill the price inputs'),
});

const AddProducts = () => {
    const navigate = useNavigate('/')
  return (
    <div className='addproducts'>
 <Helmet>
                <meta charSet="utf-8" />
                <title>Add Products</title>

            </Helmet>
<Formik
       initialValues={{
         image: '',
         name: '',
         price: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
        axios.post(`http://localhost:8000/cosmetics/`, values)
        navigate('/')
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="image"  placeholder="image url"/>
           {errors.image && touched.image ? (
             <div  className='error'>{errors.image}</div>
           ) : null}
           <Field name="name" placeholder="product name"/>
           {errors.name && touched.name ? (
             <div  className='error'>{errors.name}</div>
           ) : null}
           <Field name="price" type="number" placeholder="price" />
           {errors.price && touched.price ? <div className='error'>{errors.price}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>


    </div>
  )
}

export default AddProducts