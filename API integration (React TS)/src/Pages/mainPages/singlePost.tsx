import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Box, Paper, Typography } from "@mui/material";

export default function SinglePost(){
    const [SingleProduct, setSingleProduct] = useState<any>({});
    
    const params = useParams();

    axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => {
                console.log(res.data)
                setSingleProduct({...res.data});
            }).catch((err) => {
                console.log(err)
            })
    return(
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img className='image-fluid my-4 mx-auto' src={SingleProduct.image} alt="" style={{height: "500px"}} />
                </div>
                <div className="col-md-6 mt-5 p-5">
                    <div className="my-3 text-center">
                    <h1 style={{ color: "#000033", textDecoration: 'underLine' }}>Product Details</h1>
                    </div>
                    <Box>
                    <Paper>
                        <Typography><span className="fs-4">Title:</span> {SingleProduct.title}</Typography>
                        <Typography><span className="fs-4">Category:</span> {SingleProduct.category}</Typography>
                        <Typography><span className="fs-4">Description:</span> {SingleProduct.description}</Typography>
                        <Typography><span className="fs-4">Price:</span> {SingleProduct.price}</Typography>
                    </Paper>
                    </Box>
                </div>
            </div>
            </div>     
        </>
    )
}