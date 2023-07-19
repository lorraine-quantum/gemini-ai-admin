import { useMediaQuery } from "@mui/material";
import {
    List,
    Edit,
    SimpleForm,
    SimpleList,
    BooleanInput,
    TextInput,
    SelectInput,
    useGetOne,
    RecordContextProvider,
    Datagrid,
    TextField,
    SaveButton,
    Toolbar,
    EmailField,
    NumberInput,
    useRecordContext,
    Show,
    SimpleShowLayout
} from "react-admin";

import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";
import { useEffect, useState } from "react";
import MyNameField from "./MyNameField";
export const UserList = () => {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth
    })
    const [isSmall, setIsSmall] = React.useState(false)
    React.useEffect(() => {
        function handleResize() {
            setDimensions({ width: window.innerWidth })
            if (window.innerWidth < 400) {
                setIsSmall(true)
            }
        }
        window.addEventListener('resize', handleResize)
    })
    return (
        <List >
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.email}
                    tertiaryText={(record) => record.verified == false ? "Unverified" : "Verified"}
                />
            ) : (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.email}
                    tertiaryText={(record) => record.verified == false ? "Unverified" : "Verified"}
                />
                //     <Datagrid bulkActionButtons={false} rowClick="edit">
                //         {/* <TextField source="id" /> */}
                //         {/* <TextField source="name" /> */}
                //         <MyNameField source="name" />
                //         <TextField source="email" />
                //         <TextField source="address" />
                //         <TextField source="tradeProfit" />
                //     </Datagrid>
                // null
            )}
        </List>
    );
};

export const UserEdit = () => {
    const toChoices = items => items.map(item => ({ id: item, name: item }))
    // const TradeProfit = () => {
    //     const record = useRecordContext();
    //     if (!record) return null;
    //     return <p className="profit-parent">Current Trade profit is <span className="green profit"> {record.tradeProfit}</span> Change the value below to add to it. </p>;
    // };
    // const TradeProfitShow = () => (
    //     <Show>
    //         <SimpleShowLayout>
    //             <TradeProfit />
    //         </SimpleShowLayout>
    //     </Show>
    // )
    // const ReferralBonus = () => {
    //     const record = useRecordContext();
    //     if (!record) return null;
    //     return <p className="profit-parent">Current Referral bonus is <span className="green profit"> {record.referralBonus}</span> Change the value below to add to it. </p>;
    // };
    // const ReferralBonusShow = () => (
    //     <Show>
    //         <SimpleShowLayout>
    //             <ReferralBonus />
    //         </SimpleShowLayout>
    //     </Show>
    // )
    return (
        <>
            <Edit>
                <SimpleForm>
                    <BooleanInput source="verified" />
                    <BooleanInput source="userCanWithdraw" />
                    {/* <TradeProfitShow /> */}
                    <NumberInput source="tradeProfit" />
                    {/* <ReferralBonusShow /> */}
                    <NumberInput source="referralBonus" />
                    <NumberInput source="tradingProgress" />
                    <NumberInput source="withdrawalCharges" />
                    <TextInput multiline source="notification" />
                    <TextInput multiline source="investmentGoal" />
                    <SelectInput className="warning" source="plan" choices={toChoices(['basic', 'starter', 'pro', 'master', 'premium'])} />
                    <TextInput source="email" />
                    <TextInput source="usdtAddress" />
                    <TextInput source="bitcoinAddress" />
                    <TextInput source="ethereumAddress" />
                    <TextInput source="name" />
                    <TextInput source="gender" />
                    <NumberInput source="phoneNumber" />
                    <TextInput source="address" />
                    <NumberInput source="totalEquity" />
                    <TextInput source="pendBalance" />
                    <TextInput source="totalDeposit" />
                    <TextInput disabled multiline source="seedPhrase" />
                </SimpleForm>
            </Edit>
        </>
    );
}