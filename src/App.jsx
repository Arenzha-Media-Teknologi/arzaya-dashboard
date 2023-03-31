import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Progress,
  SimpleGrid,
  Spacer,
  Square,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import JobListCard from "./components/job-lists/JobListCard";
import PersonalJobList from "./components/job-lists/PersonalJobList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import arzayaLogo from "./assets/arzaya-logo.png";
import { BsCalendar, BsThreeDotsVertical } from "react-icons/bs";
import Chart from "react-apexcharts";
import React from "react";

function App() {
  const [chartOption, setChartOption] = React.useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
            // background: "#293450",
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15,
            },
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -10,
              show: true,
              color: "#fff",
              fontSize: "13px",
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          gradientToColors: ["#FC466B"],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Progres"],
      colors: ["#3F5EFB"],
    },
    series: [67],
  });

  return (
    <Box minHeight="100vh" color="white">
      <Box
        position="absolute"
        left={0}
        right={0}
        height="100vh"
        backgroundColor="#010E1E"
        opacity={1}
        background="linear-gradient(135deg, #00132a55 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(225deg, #00132a 25%, transparent 25%) -40px 0/ 80px 80px, linear-gradient(315deg, #00132a55 25%, transparent 25%) 0px 0/ 80px 80px, linear-gradient(45deg, #00132a 25%, #010E1E 25%) 0px 0/ 80px 80px"
        zIndex={-99}
      />
      <Flex flexDirection="column" minHeight="100vh">
        <Box padding={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <HStack>
              <Image height={50} src={arzayaLogo} alt="Arzaya Logo" />
              <Heading color="#ffffff" size="lg">
                Status Job List - Maret 2023
              </Heading>
            </HStack>
            <HStack>
              <BsCalendar color="#FFF" size={22} />
              <Text color="#FFFFFF" fontSize="2xl">
                Jumat, 10 Januari 2023
              </Text>
            </HStack>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center" mt={10}>
            <Box>
              <Heading color="#ffffff">Monthly Des-2022 - AJS</Heading>
              <Heading color="#A8BCD4" size="md" mt={1}>
                Periode Maret 2023
              </Heading>
            </Box>
            <Text
              color="#FFFFFF"
              fontSize="2xl"
              borderWidth={2}
              borderColor="#FFF"
              paddingX={10}
              paddingY={2}
              borderRadius="full"
            >
              PT. Arsalan Jaya Swara
            </Text>
          </Flex>
        </Box>
        <Grid
          flex={1}
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          p={4}
        >
          {/* .div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.div5 { grid-area: 1 / 4 / 3 / 5; }

.div6 { grid-area: 2 / 1 / 3 / 2; }

.div7 { grid-area: 2 / 2 / 3 / 3; }

.div8 { grid-area: 2 / 3 / 3 / 4; }

.div9 { grid-area: 3 / 4 / 4 / 5; }
.div10 { grid-area: 3 / 4 / 5 / 5; }
.div11 { grid-area: 3 / 1 / 5 / 4; } */}
          <GridItem
            gridArea="1 / 1 / 2 / 2"
            bg="#222f3e"
            borderRadius={5}
            paddingY={3}
            paddingX={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text fontSize="2xl">Permintaan Data</Text>
              <Spacer />
              <Text fontSize="4xl">
                <strong>2</strong>/20
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            gridArea="1 / 2 / 2 / 3"
            bg="#222f3e"
            borderRadius={5}
            padding={3}
            paddingX={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text fontSize="2xl">Pengiriman Data</Text>
              <Spacer />
              <Text fontSize="4xl">
                <strong>2</strong>/20
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            gridArea="1 / 3 / 2 / 4"
            bg="#222f3e"
            borderRadius={5}
            padding={3}
            paddingX={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text fontSize="2xl">Proses Data</Text>
              <Spacer />
              <Text fontSize="4xl">
                <strong>2</strong>/20
              </Text>
            </Flex>
          </GridItem>
          {/* <GridItem bg="red" gridArea="1 / 4 / 2 / 5" /> */}
          <GridItem
            gridArea="1 / 4 / 3 / 5"
            bg="#222f3e"
            borderRadius={5}
            padding={3}
            paddingX={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text fontSize="2xl">Progres</Text>
              <Chart
                options={chartOption.options}
                series={chartOption.series}
                type="radialBar"
                // width="200"
                height="220"
              />
            </Flex>
          </GridItem>
          <GridItem
            gridArea="2 / 1 / 3 / 2"
            bg="#222f3e"
            borderRadius={5}
            padding={3}
            paddingX={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text fontSize="2xl">Konfirmasi Proses</Text>
              <Spacer />
              <Text fontSize="4xl">
                <strong>2</strong>/20
              </Text>
            </Flex>
          </GridItem>
          <GridItem
            gridArea="2 / 2 / 3 / 3"
            bg="#222f3e"
            borderRadius={5}
            padding={3}
            paddingX={5}
          >
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <Text fontSize="2xl">Konfirmasi Proses</Text>
              <Spacer />
              <Text fontSize="4xl">
                <strong>2</strong>/20
              </Text>
            </Flex>
          </GridItem>
          <GridItem bg="tomato" gridArea="2 / 3 / 3 / 4">
            EMPTY
          </GridItem>
          {/* <GridItem bg="tomato" gridArea="3 / 4 / 4 / 5" /> */}
          <GridItem
            gridArea="3 / 4 / 5 / 5"
            bg="#222f3e"
            borderRadius={5}
            padding={4}
            paddingX={6}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              height="80px"
              background="linear-gradient(to right, #4A00E0, #8E2DE2)"
            />
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
            >
              <VStack>
                <Avatar
                  name="Segun Adebayo"
                  src="https://arzaya-hrd.s3.ap-southeast-1.amazonaws.com/photos/1650344674-05.%20Aditya.jpeg"
                  size="xl"
                />

                <Box textAlign="center">
                  <Heading size="md">Aditya</Heading>
                  <Text fontSize="sm">aditya@gmail.com</Text>
                </Box>
              </VStack>
              <Spacer />
              <HStack justifyContent="space-between">
                <Box textAlign="center">
                  <Text>Total</Text>
                  <Text fontSize="3xl">20</Text>
                </Box>
                <Box textAlign="center">
                  <Text>On Progress</Text>
                  <Text fontSize="3xl">3</Text>
                </Box>
                <Box textAlign="center">
                  <Text>Completed</Text>
                  <Text fontSize="3xl">17</Text>
                </Box>
              </HStack>
            </Flex>
          </GridItem>
          <GridItem
            gridArea="3 / 1 / 5 / 4"
            bg="#222f3e"
            borderRadius={5}
            padding={3}
          >
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td textAlign="right">
                      <Badge colorScheme="green">Completed</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td textAlign="right">
                      <Badge colorScheme="yellow">On Progress</Badge>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td textAlign="right">
                      <Badge colorScheme="yellow">On Progress</Badge>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default App;
