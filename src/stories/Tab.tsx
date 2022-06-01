import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FC, useState } from 'react';
import { TabComponent } from "./Tab.styles";

export interface TabProps {
    centered?: boolean;
}

export const Tabs: FC<TabProps> = ({ centered = false }) => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabComponent>
            <TabContext value={value}>
                <Box>
                    <TabList centered={centered} onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{ style: { backgroundColor: "red" } }}>
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <h1 style={{ fontWeight: 900 }}>Page One</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam magni beatae quisquam quos nisi inventore doloremque nemo quaerat deserunt.
                </TabPanel>
                <TabPanel value="2">
                    <h1 style={{ fontWeight: 900 }}>Page Two</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam magni beatae quisquam quos nisi inventore doloremque nemo quaerat deserunt.
                </TabPanel>
                <TabPanel value="3">
                    <h1 style={{ fontWeight: 900 }}>Page Three</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam magni beatae quisquam quos nisi inventore doloremque nemo quaerat deserunt.
                </TabPanel>
            </TabContext>
        </TabComponent >
    );
}