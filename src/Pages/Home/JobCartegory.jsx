import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const JobCartegory = () => {
  return (
    <div>
      <Tabs>
        <TabList className="flex gap-5">
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCartegory;
