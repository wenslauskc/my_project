import React, {useState} from 'react';
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"

const actions =[
    {icon: <ShoppingCartIcon />, name:"Online Shop"},
    {icon: <CardMembershipIcon />, name:"Loyalty Program"},
    {icon: <PhoneIphoneIcon />, name:"Mobile App"},
    {icon: <LocationOnOutlinedIcon />, name:"Store Locator"}
];
const Fab = () => {
const [open, setOpen] = useState(false);

const handleClose = () => {
    setOpen(false);
};

const handleOpen = () => {
    setOpen(true);
};

  return (
    <div>
      <SpeedDial ariaLabel="SpeedDial" 
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      directions="up"
      className="fixed z-90 bottom-10 right-5"
      >
        {actions.map((action) =>(
                <SpeedDialAction 
                key={action.name}
                icon={action.icon} 
                tooltipTitle={action.name}
                onClick={handleClose}
                />
        ))}
      </SpeedDial>
    </div>
  );
}

export default Fab
