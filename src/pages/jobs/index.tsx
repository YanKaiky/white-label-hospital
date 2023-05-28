import { IPFBody } from "../../layouts/IPFBody";
import { Typography } from "@mui/material";
import headerImage from "../../assets/jobs.jpg";

export const Jobs = () => {
  return (
    <IPFBody image={headerImage}>
      <Typography>Jobs</Typography>
    </IPFBody>
  );
};
