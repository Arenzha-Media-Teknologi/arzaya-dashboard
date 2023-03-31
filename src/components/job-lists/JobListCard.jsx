import {
  Alert,
  AlertIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsCalendar } from "react-icons/bs";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import Chart from "react-apexcharts";
import React from "react";

function JobListCard() {
  const [chartOption, setChartOption] = React.useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            total: {
              show: true,
              label: "TOTAL",
            },
          },
        },
      },
      labels: ["TEAM A", "TEAM B", "TEAM C", "TEAM D", "TEAM D"],
    },
    series: [67, 84, 97, 61, 19],
  });

  return (
    <Card minHeight="100%" overflow="hidden">
      <CardHeader pb={0}>
        <Text as="b" fontSize="2xl" mb={3} display="block">
          Monthly Sep-Oct 2022 ARZ
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <HStack>
              <BsCalendar />
              <Text fontSize="lg" color="gray.600">
                Periode 01 Mar 2023
              </Text>
            </HStack>
          </Box>
          <Box>
            <Badge colorScheme="green">Completed</Badge>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        {/* <Box mb={4}>
          <Flex justifyContent="space-between" mb={2}>
            <Text fontSize={"lg"}>Permintaan Data</Text>
            <Text as="b">(9/12)</Text>
          </Flex>
          <Progress
            value={20}
            size="lg"
            colorScheme="orange"
            borderRadius={5}
          />
        </Box> */}
        <Chart
          options={chartOption.options}
          series={chartOption.series}
          type="radialBar"
          // width="500"
          height="200"
        />
      </CardBody>

      <CardFooter pt={1}>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Segun Adebayo"
              src="https://arzaya-hrd.s3.ap-southeast-1.amazonaws.com/photos/1650344674-05.%20Aditya.jpeg"
            />
            <Box>
              <Heading size="sm">ADITYA HADYANA SOMANTRI</Heading>
              <Text color="gray.500">Penanggung Jawab</Text>
            </Box>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default JobListCard;
