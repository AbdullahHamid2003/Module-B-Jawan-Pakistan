import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Post() {

    const [listData, setlistData] = useState<any>([]);

    const navigate = useNavigate();

    const cards = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data)
                setlistData([...res.data]);
            }).catch((err) => {
                console.log(err)
            })
    }

    const cardClick = (id: number) => {
        navigate(`/singlePost/${id}`)
    }
    return (
        <>
            {cards()}
            <Box>
                <Typography><h1 className="text-center mt-5 mb-3">Our Products</h1></Typography>
                {/* <Button onClick={getData} variant="contained">GET DATA</Button> */}
                {listData.map((x: any, i: any) => (
                    <Box onClick = {() => {cardClick(x.id)}}>
                        <div className="container mt-5 mb-5 text-center">
                            <div className="row">
                            <div className=" col-md-4 mx-auto text-center cold-sm-12">
                                <div className="card">
                                    <img className='image-fluid my-4 mx-auto' src={x.image} style={{ height: "300px" }}  alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{x.title}</h5>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                        <Button className="mt-3 mb-2" variant="contained">Buy Now</Button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Box>
                ))}
            </Box>
        </>
    )
}