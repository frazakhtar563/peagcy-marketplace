
import  React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import './Drawer_style.css'
// import MultiRangeSlider from "multi-range-slider-react";

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet

} from "react-router-dom";
import { WithRouter } from 'react-router-dom'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import MultiRangeSlider from "multi-range-slider-react";
import Search_menu from '../MarketPlace_Header_search/Search_menu';
import Buy_nft from '../Buy_NFT/Buy_nft';

import Auctions_NFT from '../Auction_NFT/Auctions_NFT';
import NFT_Buy from '../Buy_NFT/Buy_nft';
// import Biding_NFT from '../Biding_NFT/';


import SideBar_MP from '../SideBar_MP/SideBar_MP';
import All_NFT from '../All_Nft/All_NFT';



const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const DrawerSiderbar = props => {
    let navigate = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [speedminValue, set_Speed_minValue] = React.useState(0);
    const [speedmaxValue, set_Speed_maxValue] = React.useState(10);
    const [strengthminValue, set_Strength_minValue] = React.useState(0);
    const [strengthmaxValue,set_Strength_maxValue] = React.useState(10);
    const [LightningminValue, set_Lightning_minValue] = React.useState(0);
    const [LightningmaxValue,set_Lightning_maxValue] = React.useState(10);
    const [fireminValue, set_Fire_minValue] = React.useState(0);
    const [firemaxValue,set_Fire_maxValue] = React.useState(10);
    const [waterminValue, set_Water_minValue] = React.useState(0);
    const [watermaxValue,set_Water_maxValue] = React.useState(10);
    const [windminValue, set_Wind_minValue] = React.useState(0);
    const [windmaxValue,set_Wind_maxValue] = React.useState(10);
    const [breedminValue, set_Breed_minValue] = React.useState(0);
    const [breedmaxValue,set_Breed_maxValue] = React.useState(10);
    const [isChecked,setIsChecked] = React.useState(false);
    const [isCheckedAuction,setIsCheckedAuction] = React.useState(false);
  
    const handleSpeed = (e) => {
        set_Speed_minValue(e.minValue);
        set_Speed_maxValue(e.maxValue); 

    };
    const handleStrength = (e) => {
        set_Strength_minValue(e.minValue);
        set_Strength_maxValue(e.maxValue)

    };

    const handleLightning = (e) => {
        set_Lightning_minValue(e.minValue);
        set_Lightning_maxValue(e.maxValue)

    };

    const handleFire = (e) => {
        set_Fire_minValue(e.minValue);
        set_Fire_maxValue(e.maxValue)

    };

    const handleWater = (e) => {
        set_Water_minValue(e.minValue);
        set_Water_maxValue(e.maxValue)

    };
    const handleWind = (e) => {
        set_Wind_minValue(e.minValue);
        set_Wind_maxValue(e.maxValue)

    };

    const handleBreedCount = (e) => {
        set_Breed_minValue(e.minValue);
        set_Breed_maxValue(e.maxValue)

    };


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const auctionnavigation=()=>{
        setIsCheckedAuction(!isCheckedAuction)
        // if(isCheckedAuction==false){
        //     // navigate("/dashboard/Auctions_NFT")
            
        //     navigate("/dashboard/Auctions_NFT")
    
    
        //     }else{
        //     navigate("/")
                
    
        //     }


       
       
    }
    const buynavigation=()=>{
        setIsChecked(!isChecked)

        // if(isChecked==false){
        // // navigate("/dashboard/Auctions_NFT")
        
        // navigate("/dashboard/Buy_nft")


        // }else{
        // navigate("/")
            

        // }
    }



    return (
        <>

            <Box style={{ display: 'flex' }}>
                <CssBaseline />
                {/* <AppBar  >
      <Toolbar style={{float:'left'}}>
          <IconButton
            color="inherit"
        
            
          >
           
          </IconButton>
        </Toolbar>
        



      </AppBar> */}


                <div style={{ height: "78vh", borderRight: '2px solid #454769', marginTop: '11rem' }} className="drawer_main">
                    <ChevronRightIcon open={open} className="Appbar" sx={{ mr: 0, ...(open && { display: 'none' }), cursor: "pointer", }} onClick={handleDrawerOpen} aria-label="open drawer"

                        edge="start" />
                </div>


                <Drawer
                // transitionDuration={1000}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            height: '80vh',
                            marginTop: '10rem',
                            background: 'transparent', borderRight: '2px solid #454769'
                        },
                    }}
                    variant="persistent"
                    role="presentation"
                    
                    anchor="left"
                    open={open}
                    className="drawer_main"
                >
                    <DrawerHeader className='DrawerHeader'>

                        <div className='d-flex align-items-center'>
                            <h6 className='title-name '>Filter</h6>
                            <div className="title-btn">Reset</div>
                        </div>

                        <ChevronLeftIcon onClick={handleDrawerClose} style={{ color: 'white', cursor: "pointer" }} />
                    </DrawerHeader>
                    <Divider />
                    <List>

                        <div className="bxFilter-setting mt-n2">
                            <div role="group" className="btn-group">
                                <button type="button" className="btn-tab active animated-button btn btn-link">Basic</button>
                                <button type="button" className="btn-tab animated-button btn btn-link">Advanced</button>
                            </div>
                        </div>

                        <div className="bxFilter-content" >
                            <div className="accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="accordion-button">
                                            <div className="title">Listing Type</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show mt-2" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    

                                                    <label  className="formCheck">Buy now<input type="checkbox" checked={isChecked}
                                                   onChange={()=>buynavigation()} />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    
                                                    <span>
                                                    </span>
                                                </div>
                                                {/* <form>
                                    <div class="form-check text-white">
                                    <input class="form-check-input " type="checkbox" value="" id="defaultCheck1" checked={isChecked} 
                                     onChange={()=>buynavigation()}/>
                                    <label class="form-check-label" for="defaultCheck1">
                                    Buy_nft
                                    </label>
                                    </div></form> */}
                                               
                                               <div className="item-filter">
                                                    

                                                    <label  className="formCheck">Auction<input type="checkbox" checked={isCheckedAuction}
                                                   onChange={()=>auctionnavigation()} />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Price</div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterForm">
                                                <div className="mb-2">
                                                    <div className="drop-filter dropdown">
                                                        <button type="button" id="dropdown-symbol" aria-expanded="false" className="drop-symbol dropdown-toggle btn btn-link">
                                                            <a aria-selected="false" data-rr-ui-dropdown-item="" className="dropdown-item" role="button" tabindex="0" href="#">
                                                                <span>Select currency...</span>
                                                            </a>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="dropdown-filter dropdown">

                                        <h2 className="accordion-header">
                                            <button type="button" aria-expanded="false" className="accordion-button" data-bs-toggle="dropdown" id="dropdown-basic" >
                                                <div className="title">Bloodlines</div>
                                                <div className="badge">
                                                </div>
                                            </button>
                                        </h2>
                                        <div className="accordion-collapse collapse show">
                                            <div className="accordion-body">
                                                <div className="filterCheck">
                                                    <div className="item-filter">
                                                        <label className="formCheck">Hoz<input type="checkbox" />
                                                            <span className="checkmark"></span></label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <div className="item-filter">
                                                        <label className="formCheck">Campona<input type="checkbox" />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <div className="item-filter">
                                                        <label className="formCheck">
                                                            Klin<input type="checkbox" />
                                                            <span className="checkmark">
                                                            </span>
                                                        </label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                    <div className="item-filter">
                                                        <label className="formCheck">Zan<input type="checkbox" />
                                                            <span className="checkmark">
                                                            </span>
                                                        </label>
                                                        <span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Gender</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">Male<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Female<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Breed Types</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">Founding<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Legendary<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Epic<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Rare<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Pacer<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header"
                                    ><button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Status</div>
                                            <div className="badge">
                                            </div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">Can Race<input name="can_race" type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Can Breed<input name="can_breed" type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Breed Count</div>
                                        </button>
                                    </h2>

                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterSlider">
                                            <MultiRangeSlider
                                            tooltip={true}
                                                    min={0}
                                                    max={10}
                                                    step={1}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={breedminValue}
                                                    maxValue={breedmaxValue}
                                                    onInput={(e) => {
                                                        handleBreedCount(e);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Stats</div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider speed" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/speed.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'> Speed</span>
                                                </div>
                                                <MultiRangeSlider
                                                    min={0}
                                                    max={10}
                                                    // step={5}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={speedminValue}
                                                    maxValue={speedmaxValue}
                                                    onInput={(e) => {
                                                        handleSpeed(e);
                                                    }}
                                                />
                                            </div>
                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider strength" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/strength.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Strength</span>
                                                </div>
                                                <MultiRangeSlider
                                                    min={0}
                                                    max={10}
                                                    // step={5}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={strengthminValue}
                                                    maxValue={strengthmaxValue}
                                                    onInput={(e) => {
                                                        handleStrength(e);
                                                    }}
                                                />
                                            </div>


                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider lightning" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/lightning.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Lightning</span>
                                                </div>
                                                <MultiRangeSlider
                                                    min={0}
                                                    max={10}
                                                    // step={5}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={LightningminValue}
                                                    maxValue={LightningmaxValue}
                                                    onInput={(e) => {
                                                        handleLightning(e);
                                                    }}
                                                />
                                                {/* <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div> */}
                                            </div>

                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider fire" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/fire.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Fire</span>
                                                </div>
                                                <MultiRangeSlider
                                                    min={0}
                                                    max={10}
                                                    // step={5}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={fireminValue}
                                                    maxValue={firemaxValue}
                                                    onInput={(e) => {
                                                        handleFire(e);
                                                    }}
                                                />
                                            </div>

                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider fire" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/water.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Water</span>
                                                </div>
                                                
                                                <MultiRangeSlider
                                                    min={0}
                                                    max={10}
                                                    // step={5}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={waterminValue}
                                                    maxValue={watermaxValue}
                                                    onInput={(e) => {
                                                        handleWater(e);
                                                    }}
                                                />
                                                
                                            </div>

                                            <div className="filterSlider">
                                                <div className="slider-title">
                                                    <span style={{ boxSizing: "border-box", display: "inline-block", overflow: "hidden", width: "16px", height: "16px", background: "none", opacity: "1", border: "0px", margin: "0px", padding: " 0px", position: "relative" }}>
                                                        <img alt="Slider fire" src="https://cdn.pegaxy.io/statics/marketplace/public/v3/images/icon/stat/wind.svg" decoding="async" data-nimg="fixed" style={{ position: "absolute", inset: "0px", boxSizing: "border-box", padding: "0px", border: "none", margin: "auto", display: "block", width: "0px", height: "0px", minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%" }} />
                                                    </span>
                                                    <span className='ml-2'>Wind</span>
                                                </div>
                                                <MultiRangeSlider
                                                    min={0}
                                                    max={10}
                                                    // step={5}
                                                    // ruler={true}
                                                    label={true}
                                                    // preventWheel={false}
                                                    minValue={windminValue}
                                                    maxValue={windmaxValue}
                                                    onInput={(e) => {
                                                        handleWind(e);
                                                    }}
                                                />
                                                {/* <div className="slider-value">
                                                    <div className="value-number">0</div>
                                                    <div className="value-slider">
                                                        <span label="true" className="MuiSlider-colorPrimary MuiSlider-sizeMedium MuiSlider-root MuiSlider-marked css-9cct2k">
                                                            <span className="MuiSlider-rail css-b04pc9">
                                                            </span>
                                                            <span className="MuiSlider-track css-1t2bqnt" style={{ left: "0%", width: "100%" }}></span>
                                                            <span data-index="0" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "0%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="0" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "0%" }}>0</span>
                                                            <span data-index="1" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "11.1111%" }}>
                                                            </span>
                                                            <span aria-hidden="true" data-index="1" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "11.1111%" }}>1</span>
                                                            <span data-index="2" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "22.2222%" }}></span>
                                                            <span aria-hidden="true" data-index="2" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "22.2222%" }}>2</span>
                                                            <span data-index="3" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "33.3333%" }}></span>
                                                            <span aria-hidden="true" data-index="3" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "33.3333%" }}>3</span>
                                                            <span data-index="4" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "44.4444%" }}></span>
                                                            <span aria-hidden="true" data-index="4" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "44.4444%" }}>4</span>
                                                            <span data-index="5" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "55.5556%" }}></span>
                                                            <span aria-hidden="true" data-index="5" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "55.5556%" }}>5</span>
                                                            <span data-index="6" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "66.6667%" }}></span>
                                                            <span aria-hidden="true" data-index="6" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "66.6667%" }}>6</span>
                                                            <span data-index="7" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "77.7778%" }}></span>
                                                            <span aria-hidden="true" data-index="7" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "77.7778%" }}>7</span>
                                                            <span data-index="8" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "88.8889%" }}></span>
                                                            <span aria-hidden="true" data-index="8" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "88.8889%" }}>8</span>
                                                            <span data-index="9" className="MuiSlider-mark MuiSlider-markActive css-17lmo96" style={{ left: "100%" }}></span>
                                                            <span aria-hidden="true" data-index="9" className="MuiSlider-markLabel MuiSlider-markLabelActive css-sxo8tj" style={{ left: "100%" }}>9</span>
                                                            <span data-index="0" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "0%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="0" aria-label="Minimum distance" aria-valuenow="0" aria-valuetext="0" value="0" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">0</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span data-index="1" className="MuiSlider-thumbColorPrimary MuiSlider-thumbSizeMedium MuiSlider-thumb css-7drnjp" style={{ left: "100%", pointerEvents: "none" }}>
                                                                <input aria-orientation="horizontal" aria-valuemax="9" aria-valuemin="0" type="range" min="0" max="9" step="1" data-index="1" aria-label="Minimum distance" aria-valuenow="9" aria-valuetext="9" value="9" style={{ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "100%", margin: "-1px", overflow: "hidden", padding: "0px", position: "absolute", whiteSpace: "nowrap", width: "100%", direction: "ltr" }} />
                                                                <span className="MuiSlider-valueLabel css-1s3sa3n" aria-hidden="true">
                                                                    <span className="MuiSlider-valueLabelCircle">
                                                                        <span className="MuiSlider-valueLabelLabel">9</span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="value-number">9</div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button type="button" aria-expanded="false" className="accordion-button">
                                            <div className="title">Others</div>
                                            <div className="badge">1</div>
                                        </button>
                                    </h2>
                                    <div className="accordion-collapse collapse show">
                                        <div className="accordion-body">
                                            <div className="filterCheck">
                                                <div className="item-filter">
                                                    <label className="formCheck">For sale<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                                <div className="item-filter">
                                                    <label className="formCheck">Not for sale<input type="checkbox" />
                                                        <span className="checkmark">
                                                        </span>
                                                    </label>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </List>
                    {/* <Divider /> */}

                </Drawer>
                <Main open={open} className="main_div_all">
                    <SideBar_MP />
                    {/* <Search_menu /> */}
                    {
                    
                    isChecked==true && isCheckedAuction==true || isChecked==false && isCheckedAuction==false ?(<All_NFT/>):isCheckedAuction==true?(<Auctions_NFT/>): isChecked==true?( <Buy_nft/>):"no dada"
                    }
                    {/* <Routes>

                        <Route exact path="/" element={<Buy_nft isCheckedAuction={isCheckedAuction} isChecked={isChecked} /> } />
                       
                    </Routes>
                    <Outlet /> */}



                </Main>
            </Box>
        </>
    );
}




export default DrawerSiderbar
