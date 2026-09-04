
import React from "react";
import {
  Breadcrumbs,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Breadcrumbsmui(){
    return (
        <><Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    Home
  </Link>

  <Link underline="hover" color="inherit" href="/products">
    Products
  </Link>

  <Typography color="text.primary">
    Details
  </Typography>
</Breadcrumbs>
</>
    )
}
export default Breadcrumbsmui;