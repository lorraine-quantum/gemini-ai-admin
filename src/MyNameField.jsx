// import { useRecordContext } from "react-admin";

import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import "./App.css"
const MyNameField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <h3 href={record[source]} className="grey" sx={{ textDecoration: "none" }}>
            {record[source]}
            {/* <LaunchIcon sx={{ fontSize: 15, ml: 1 }} /> */}
        </h3>
    ) : null;
};

export default MyNameField;