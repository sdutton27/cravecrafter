import React from "react";
import { Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Switch } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "140px",
    height: "28px",
    padding: "0px"
  },
  switchBase: {
    color: "#F0EEED",
    padding: "1px",
    "&$checked": {
      "& + $track": {
        backgroundColor: "#F0EEED"
      }
    }
  },
  thumb: {
    color: "white",
    width: "65px",
    height: "24px",
    margin: "1px",
    borderRadius:"20px"
  },
  track: {
    borderRadius: "20px",
    backgroundColor: "#F0EEED",
    opacity: "1 !important",
    "&:after, &:before": {
      color: "#3C3C3C",
      fontSize: "14px",
      position: "absolute",
      top: "6px"
    },
    "&:after": {
      content: "'Delivery'",
      top: "4px",
      left: "12px"
    },
    "&:before": {
      content: "'Pickup'",
      right: "16px",
      top:"4px"
    }
  },
  checked: {
    color: "#FF4700 !important",
    transform: "translateX(70px) !important"
  }
});

export default function OrderTypeSwitch({deliveryOrder, setDeliveryOrder}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setDeliveryOrder(prev => !prev);
    console.log(deliveryOrder);
  };

  return (
    <div style={{marginLeft: "auto"}}>
      <Switch
      disabled // currently disabled because we have not added pickup option yet
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
}
