'use client'
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import TestCard from './TestCard'

export default function App() {
  return (
    <div className="flex flex-wrap gap-4">
    <Tabs aria-label="Options" variant='underlined'>
    <Tab key="photos" title="Photos">
       <Card>
         <TestCard/>
       </Card>
    </Tab>
    <Tab key="music" title="Music">
      <Card>
        <CardBody>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </CardBody>
      </Card>  
    </Tab>
    <Tab key="videos" title="Videos">
      <Card>
        <CardBody>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardBody>
      </Card>  
    </Tab>
  </Tabs>
    </div>
  );
}
