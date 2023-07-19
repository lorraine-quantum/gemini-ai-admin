// import { useRecordContext } from "react-admin";
import './App.css'
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import Check from "@mui/icons-material/Check";
import Pending from "@mui/icons-material/PendingActions";
import Failed from "@mui/icons-material/DoNotDisturb";

const MyStatusField = ({ source }) => {

    const record = useRecordContext();
    console.log(record[source])
    return record[source] == 'pending' ? (
        <h3 className='yellow'>
            {record[source]}
            {record[source] == 'approved' ? < Check sx={{ fontSize: 15, ml: 1 }} /> : < Pending sx={{ fontSize: 15, ml: 1 }} />}

        </h3 >
    ) : <h3 className={` ${record[source] == 'approved' ? 'green' : 'red'} `}>
        {record[source]}
        {record[source] == 'approved' ? < Check sx={{ fontSize: 15, ml: 1 }} /> : < Failed sx={{ fontSize: 15, ml: 1 }} />}

    </h3 >;
};

export default MyStatusField;