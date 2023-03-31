import {
  Avatar,
  Badge,
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

function PersonalJobList() {
  return (
    <Box maxHeight="100%" overflow="hidden">
      <Box p={4}>
        <Center>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://arzaya-hrd.s3.ap-southeast-1.amazonaws.com/photos/1663562626-WhatsApp%20Image%202022-09-17%20at%2015.41.56.jpeg"
          />
        </Center>
        <Text fontSize="2xl" align="center" mt={2}>
          CINTYA TRIANA
        </Text>
        <Text align="center" color="GrayText">
          cintyatriana@gmail.com
        </Text>
        <SimpleGrid columns={3} mt={3}>
          <Box>
            <Text fontSize="md" align="center">
              Total
            </Text>
            <Text fontSize="2xl" align="center">
              20
            </Text>
          </Box>
          <Box>
            <Text fontSize="md" align="center">
              Completed
            </Text>
            <Text fontSize="2xl" align="center">
              20
            </Text>
          </Box>
          <Box>
            <Text fontSize="md" align="center">
              In Progress
            </Text>
            <Text fontSize="2xl" align="center">
              20
            </Text>
          </Box>
        </SimpleGrid>
        {/* <Progress
          colorScheme="green"
          size="lg"
          value={20}
          mt={5}
          borderRadius={10}
        /> */}
      </Box>
      <Box p={4}>
        <Heading size="sm">Daftar Projek</Heading>
        {/* <Box mt={4}>
          {[...Array(10)].map((x, i) => (
            <Card key={x} variant="outline" mb={4}>
              <CardBody p={3}>
                <Text fontSize="sm">
                  {x % 2 == 0 ? (
                    <Badge colorScheme="green" me={2}>
                      Completed
                    </Badge>
                  ) : (
                    <Badge colorScheme="yellow" me={2}>
                      In Progress
                    </Badge>
                  )}
                  Monthly Mar-2023 INDOTAMA PT ( LK FEBRUARI )
                </Text>
              </CardBody>
            </Card>
          ))}
        </Box> */}
      </Box>
    </Box>
  );
}

export default PersonalJobList;
