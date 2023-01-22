
import { Typography} from '@mui/material';
import * as React from 'react';
// import { useState, useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Container, Stack } from "@mui/system";
import { ImageList, ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StarIcon from '@mui/icons-material/Star';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


const Favourite = ({ data, idx }) => {
    console.log(data);
    console.log(data.recipe.img);
    console.log(data.recipe.label)


    return (
        <div key={idx}>

        
            <Stack >
                <Container className="topSeller" maxWidth="false" style={{ padding: 0,margin:0, width: 310, height: 390, }}>
                    <ImageList style={{width:"auto",height:"auto",padding:0,margin:0,border:"1px solid green", borderRadius:20}}   >
                        <ImageListItem style={{ width: "auto", backgroundColor: "white", height: "auto" }}>
                            <img
                                style={{ height: "auto", width: "auto" }}
                                src={`${data.recipe.image}`}
                                // srcSet={`${data.reciepe.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={data.recipe.label}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'white', }}
                                    >
                                        <BookmarkBorderOutlinedIcon style={{ fontSize: 30 }} />
                                    </IconButton>
                                }
                                actionPosition="right"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', color: "black",width:"auto",border:"1px solid black"
                                }}
                                position="below"
                                actionIcon={
                                    <IconButton size="small" disableRipple="false" disableFocusRipple="false" style={{ width:300 }}>
                                        
                                            <Typography style={{ width:"auto",fontSize: 14, alignItems: "baseline" }} color="black">sai asasa sas a sa sas as </Typography>
                                       
                                    </IconButton>

                                }


                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                                        'rgba(0,0,0,0) 70%, rgba(0,0,0,0) 100%)', color: "black",width:300
                                }}
                                position="below"
                                actionIcon={
                                    <Stack direction="row"  justifyContent="space-between" sx={{width:300 }}>


                                        <IconButton
                                            sx={{ color: 'black' }}
                                            size="small" disabled="false"
                                        >

                                            <Typography style={{ fontWeight: 550, fontSize: 17 }} color="black"> &#8377; money</Typography>


                                        </IconButton>

                                        <IconButton  disabled="true">

                                            <LocalMallOutlinedIcon sx={{ color: "black" }} />

                                        </IconButton>
                                    </Stack>

                                }
                                actionPosition="left"
                            />

                        </ImageListItem>

                    </ImageList>

                </Container>
            </Stack>

        </div>

    )
}

export default Favourite;




