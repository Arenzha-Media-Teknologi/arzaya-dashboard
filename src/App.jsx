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
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import JobListCard from "./components/job-lists/JobListCard";
import PersonalJobList from "./components/job-lists/PersonalJobList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper";
import "swiper/css";
import arzayaLogo from "./assets/arzaya-logo.png";
import { BsCalendar, BsThreeDotsVertical } from "react-icons/bs";
import Chart from "react-apexcharts";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

const LargeJobItem = ({
  styles = {},
  title = "",
  completedItem = 0,
  totalItem = 0,
  status = "",
  users = [],
}) => {
  const colors = {
    "On Progress": "yellow",
    Completed: "green",
    default: "grey",
  };
  return (
    <GridItem
      // gridArea="1 / 1 / 5 / 2"
      bg="#222f3e"
      borderRadius={5}
      paddingY={3}
      paddingX={5}
      overflowY="hidden"
      {...styles}
    >
      <Flex
        flexDirection="column"
        // justifyContent="space-between"
        height="100%"
      >
        <Text fontSize="2xl">{title}</Text>
        {/* <Spacer /> */}
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="4xl">
            <strong>{completedItem}</strong>/{totalItem}
          </Text>
          <Badge colorScheme={colors[status || "default"]}>{status}</Badge>
        </Flex>
        {Array.isArray(users)
          ? users.map((user) => (
              <Box mt={4} rounded={4} bgColor="#535c68" p={3} key={user.id}>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar name={user?.name || "alt"} src="" />
                  <Box>
                    <Heading size="sm">{user?.name || "NAMA_USER"}</Heading>
                    <Text>{user?.email}</Text>
                  </Box>
                </Flex>
                <Text textAlign="end">
                  {user?.completed_item || 0}/{user?.total_item || 0}
                </Text>
                <Progress
                  value={user?.progress || 0}
                  mt={3}
                  rounded={3}
                  colorScheme={colors[status || "default"]}
                />
              </Box>
            ))
          : null}
      </Flex>
    </GridItem>
  );
};

const SmallJobItem = ({
  styles = {},
  title = "",
  completedItem = 0,
  totalItem = 0,
  status = "",
  users = [],
}) => {
  return (
    <GridItem
      // gridArea="2 / 4 / 3 / 5"
      bg="#222f3e"
      borderRadius={5}
      padding={3}
      paddingX={5}
      {...styles}
    >
      <Flex flexDirection="column" justifyContent="space-between" height="100%">
        <Text fontSize="2xl">{title}</Text>
        <Spacer />
        <Text fontSize="4xl">
          <strong>{completedItem}</strong>/{totalItem}
        </Text>
      </Flex>
    </GridItem>
  );
};

const LoadingScreen = () => {
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
      <Flex justifyContent="center" alignItems="center" minHeight="100vh">
        <Flex direction="column" alignItems="center">
          <Image height={100} src={arzayaLogo} alt="Arzaya Logo" />
          <Text>Memuat Data...</Text>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            mt={4}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

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
  });

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        "http://127.0.0.1:8000/api/projects?" +
          new URLSearchParams({
            period: dayjs().format("YYYY-MM"),
          })
      ).then((res) => res.json()),
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return "An error has occurred: " + error.message;

  // return <pre>{JSON.stringify(data)}</pre>;

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
        <Box paddingX={4} paddingY={2}>
          <Flex justifyContent="space-between" alignItems="center">
            <HStack>
              <Image height={50} src={arzayaLogo} alt="Arzaya Logo" />
              <Heading color="#ffffff" size="lg">
                Status Job List - {dayjs().format("MMMM YYYY")}
              </Heading>
            </HStack>
            <HStack>
              <BsCalendar color="#FFF" size={22} />
              <Text color="#FFFFFF" fontSize="2xl">
                {dayjs().format("dddd, DD MMMM YYYY")}
              </Text>
            </HStack>
          </Flex>
        </Box>
        <Swiper
          style={{ width: "100%", height: "100%" }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Virtual]}
          virtual
          onReachEnd={() => {
            console.log("end reached");
            refetch();
          }}
        >
          {data.data && Array.isArray(data.data) ? (
            data.data.map((project, index) => (
              <SwiperSlide key={project?.id} virtualIndex={index}>
                <Box>
                  <Box paddingX={4} paddingY={2}>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      mt={10}
                    >
                      <Box>
                        <Heading color="#ffffff">{project?.name || ""}</Heading>
                        <Heading color="#A8BCD4" size="md" mt={1}>
                          Periode{" "}
                          {dayjs(project?.period1 || null).format("MMMM YYYY")}
                        </Heading>
                      </Box>
                      {/* <Text
                        color="#FFFFFF"
                        fontSize="2xl"
                        borderWidth={2}
                        borderColor="#FFF"
                        paddingX={10}
                        paddingY={2}
                        borderRadius="full"
                      >
                        PT. Arsalan Jaya Swara
                      </Text> */}
                    </Flex>
                  </Box>
                  <Grid
                    flex={1}
                    templateRows="repeat(4, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={4}
                    p={4}
                  >
                    <LargeJobItem
                      key={1}
                      styles={{ gridArea: "1 / 1 / 5 / 2" }}
                      title="Permintaan Data"
                      completedItem={project?.permintaan_data?.completed_item}
                      totalItem={project?.permintaan_data?.total_item}
                      status={project?.permintaan_data?.status}
                      users={project?.permintaan_data?.users}
                    />
                    <LargeJobItem
                      key={2}
                      styles={{ gridArea: "1 / 2 / 5 / 3" }}
                      title="Proses Data"
                      completedItem={project?.proses_data?.completed_item}
                      totalItem={project?.proses_data?.total_item}
                      status={project?.proses_data?.status}
                      users={project?.proses_data?.users}
                    />
                    <LargeJobItem
                      key={3}
                      styles={{ gridArea: "1 / 3 / 5 / 4" }}
                      title="Konfirmasi Laporan"
                      completedItem={
                        project?.konfirmasi_laporan?.completed_item
                      }
                      totalItem={project?.konfirmasi_laporan?.total_item}
                      status={project?.konfirmasi_laporan?.status}
                      users={project?.konfirmasi_laporan?.users}
                    />
                    <SmallJobItem
                      styles={{ gridArea: "1 / 4 / 2 / 5" }}
                      title="Pengiriman Data"
                      completedItem={project?.pengiriman_data?.completed_item}
                      totalItem={project?.pengiriman_data?.total_item}
                    />
                    <SmallJobItem
                      styles={{ gridArea: "2 / 4 / 3 / 5" }}
                      title="Konfirmasi Proses"
                      completedItem={project?.konfirmasi_proses?.completed_item}
                      totalItem={project?.konfirmasi_proses?.total_item}
                    />

                    {/* <GridItem bg="red" gridArea="1 / 4 / 2 / 5" /> */}
                    <GridItem
                      gridArea="3 / 4 / 5 / 5"
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
                          series={[project?.progress || 0]}
                          type="radialBar"
                          // width="200"
                          height="220"
                        />
                      </Flex>
                    </GridItem>
                  </Grid>
                </Box>
              </SwiperSlide>
            ))
          ) : (
            <Text>No Data</Text>
          )}
        </Swiper>
      </Flex>
    </Box>
  );
}

export default App;
