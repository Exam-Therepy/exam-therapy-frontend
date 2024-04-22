import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function MockCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="mock test logo"
          height={40}
          radius="sm"
          src="/neet.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NEET Full Test Series</p>
          <p className="text-small text-default-500">Free</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>Questions Count : 200</p>
        <p>Max Marks : 100</p>
        <p>Time : 3hrs</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          showAnchorIcon
          href="/viewtest/id123"
        >
          View Mock Test
        </Link>
      </CardFooter>
    </Card>
  );
}
