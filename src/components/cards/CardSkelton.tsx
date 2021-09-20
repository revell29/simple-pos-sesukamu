import { Card } from "components";
import React from "react";
import { SkeletonCircle, Skeleton, Flex } from "@chakra-ui/react";

const CardSkelton: React.FC = () => {
  return (
    <Card>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <SkeletonCircle size="10" mr={6} />
          <Skeleton height="25px" w="120px" />
        </Flex>
        <Skeleton height="25px" w="120px" />
      </Flex>
    </Card>
  );
};

export default CardSkelton;
