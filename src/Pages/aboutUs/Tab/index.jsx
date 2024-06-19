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
    <Tabs id="custom-animation"  value="oquv_zallari" className="grid grid-cols-6 max-md:grid-rows-6 max-md:grid-flow-col items-start">
      <TabsHeader className="grid grid-cols-1 max-md:grid-cols-3 text-center w-full     justify-between gap-10 col-span-2   ">
        {data.map(({ label, value }) => (
          <Tab className="  max-md:w-80 px-2 text-left  text-xl max-md:text-lg   text-violet-700"  key={value} value={value}>
             {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
      className="col-span-5 w-full max-md:row-span-4"
        animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel className="w-full h-auto" key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}