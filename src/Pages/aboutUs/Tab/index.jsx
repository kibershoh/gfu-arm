import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Carousel3d from "../../../UI/CarouseThree";
import AboutLibrary from "../aboutLibrary";
import OurTeamList from "../../../UI/OurTeamList";
 
 
export function TabsCustomAnimation() {
  const data = [
    {
      label: "O'quv zallari",
      value: "oquv_zallari",
      desc: <Carousel3d/>,
    },
    {
      label: "Kutubxona haqida",
      value: "kutubxona_haqida",
      desc:<AboutLibrary/>,
    },
 
    {
      label: "Bizning Jamoa",
      value: "Bizning_Jamoa",
      desc:<OurTeamList/>,
    },
 
   
  ];
 
  return (
    <Tabs id="custom-animation"  value="oquv_zallari">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab className=" text-xl shadow-2xl text-violet-700"  key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
      className=""
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}