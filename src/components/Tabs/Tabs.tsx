import React, { ReactNode, useState } from "react";
import { Box, Tab, Tabs as MuiTabs } from "@mui/material";
import TabContent from "./TabContent";

const getA11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`,
});

interface TabsProps {
  tabs: { tabTitle: string; tabContent: ReactNode }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs
          value={currentTab}
          onChange={(_, value) => setCurrentTab(value)}
          aria-label="basic tabs example"
        >
          {tabs.map(({ tabTitle }, index) => (
            <Tab key={tabTitle} label={tabTitle} {...getA11yProps(index)} />
          ))}
        </MuiTabs>
      </Box>
      {tabs.map(({ tabContent }, index) => (
        <TabContent value={currentTab} index={index} key={index}>
          {tabContent}
        </TabContent>
      ))}
    </>
  );
};

export default Tabs;
