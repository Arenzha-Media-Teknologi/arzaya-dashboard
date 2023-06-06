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
import "swiper/css";
import arzayaLogo from "../assets/arzaya-logo.png";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { BsCalendar, BsThreeDotsVertical } from "react-icons/bs";
import "dayjs/locale/id";
dayjs.locale("id");

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

function Grade({ grade }) {
  const lowerGrade = grade.toLowerCase();

  switch (lowerGrade) {
    case "gold":
      return <Badge bgColor="#FFD700">Gold</Badge>;
    case "silver":
      return <Badge bgColor="#C0C0C0">Silver</Badge>;
    case "bronze":
      return <Badge bgColor="#CD7F32">Bronze</Badge>;
    case "copper":
      return <Badge bgColor="#B87333">Copper</Badge>;
    default:
      null;
  }
}

function Scoring() {
  const goldGradient = "linear-gradient(to right, #f7971e, #ffd200)";
  const silverGradient = "linear-gradient(to right, #c9d6ff, #e2e2e2)";
  const bronzeGradient = "linear-gradient(to right, #d1913c, #ffd194)";

  const navigate = useNavigate();

  // React.useEffect(() => {
  //   const DURATION = 1000 * 60; // 1 Minute
  //   let timer = setTimeout(() => {
  //     navigate("/");
  //   }, DURATION);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["rankings"],
    queryFn: () =>
      fetch(
        "https://sjl.arzaya.net/api/projects/rankings?" +
          new URLSearchParams({
            start_date: dayjs().format("YYYY-MM-01"),
            end_date: dayjs().format(
              "YYYY-MM-" + dayjs().endOf("month").format("DD")
            ),
            // end_date: "2023-05-31",
          })
      ).then((res) => res.json()),
  });

  if (isLoading) return <LoadingScreen />;

  if (error) return "An error has occurred: " + error.message;
  // return <pre>{JSON.stringify(data)}</pre>;
  const firstPlace = data?.data[0] || null;
  const secondPlace = data?.data[1] || null;
  const thirdPlace = data?.data[2] || null;
  const remainingPlacesCount = data?.data.length - 3;

  const HALL_OF_FAME_COUNT = 3;
  const DATA_PER_TABLE = 6;

  return (
    <Box minHeight="100vh" color="white" fontFamily="inter">
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
              <Heading
                color="#ffffff"
                size="lg"
                fontFamily="inter"
                fontWeight={600}
              >
                Scoring Job List - {dayjs().format("MMMM YYYY")}
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
        {firstPlace || secondPlace || thirdPlace ? (
          <Box paddingX={3} mt={20} mb={10}>
            <HStack spacing="24px" justifyContent="center">
              {secondPlace ? (
                <Box width="200px">
                  <VStack>
                    <Box position="relative">
                      <Avatar
                        size="xl"
                        name={secondPlace?.name_maker || "NAMA USER"}
                        src={secondPlace?.image_maker || null}
                        border="2px solid #fff"
                      />{" "}
                      <Text
                        position="absolute"
                        top={-10}
                        textAlign="center"
                        width="100%"
                        fontSize="5xl"
                      >
                        🥈
                      </Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontWeight={600}>
                        {secondPlace?.name_maker || "NAMA USER"}
                      </Text>
                      <Text>
                        Score · ⭐️ {secondPlace?.score || 0} ·{" "}
                        <Grade grade={secondPlace?.grade} />
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              ) : null}
              {firstPlace ? (
                <Box width="200px">
                  <VStack>
                    <Box position="relative">
                      <Avatar
                        size="2xl"
                        name={firstPlace?.name_maker || "NAMA USER"}
                        src={firstPlace?.image_maker || null}
                        border="3px solid #fff"
                      />{" "}
                      <Text
                        position="absolute"
                        top="-50px"
                        textAlign="center"
                        width="100%"
                        fontSize="6xl"
                      >
                        🥇
                      </Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontWeight={600} fontSize="lg">
                        {firstPlace?.name_maker || "NAMA USER"}
                      </Text>
                      <Text verticalAlign="middle">
                        Score · ⭐️ {firstPlace?.score || 0} ·{" "}
                        <Grade grade={firstPlace?.grade} />
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              ) : null}
              {thirdPlace ? (
                <Box width="200px">
                  <VStack>
                    <Box position="relative">
                      <Avatar
                        size="xl"
                        name={thirdPlace?.name_maker || "NAMA USER"}
                        src={thirdPlace?.image_maker || null}
                        border="2px solid #fff"
                      />{" "}
                      <Text
                        position="absolute"
                        top={-10}
                        textAlign="center"
                        width="100%"
                        fontSize="5xl"
                      >
                        🥉
                      </Text>
                    </Box>
                    <Box textAlign="center">
                      <Text fontWeight={600}>
                        {thirdPlace?.name_maker || "NAMA USER"}
                      </Text>
                      <Text>
                        Score · ⭐️ {thirdPlace?.score || 0} ·{" "}
                        <Grade grade={thirdPlace?.grade} />
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              ) : null}
            </HStack>
          </Box>
        ) : null}
        <Box mt={7} px={5}>
          <SimpleGrid columns={2} spacing={5} justifyContent="center">
            <Box>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Rank</Th>
                      <Th>Nama</Th>
                      <Th isNumeric>SLA</Th>
                      <Th isNumeric>Score</Th>
                      <Th>Grade</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {/* <Tr background={goldGradient} fontSize="lg">
                      <Td>#1</Td>
                      <Td>
                        <HStack>
                          <Avatar
                            size="sm"
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Text fontWeight={600}>Royhan Faisal Reza</Text>
                        </HStack>
                      </Td>
                      <Td isNumeric>
                        <Text fontWeight={600}>450</Text>
                      </Td>
                      <Td>
                        <Badge>Gold</Badge>
                      </Td>
                    </Tr>
                    <Tr background={silverGradient}>
                      <Td>#2</Td>
                      <Td>
                        <HStack>
                          <Avatar
                            size="xs"
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Text>Royhan Faisal Reza</Text>
                        </HStack>
                      </Td>
                      <Td isNumeric>450</Td>
                      <Td>
                        <Badge>Gold</Badge>
                      </Td>
                    </Tr>
                    <Tr background={bronzeGradient}>
                      <Td>#3</Td>
                      <Td>
                        <HStack>
                          <Avatar
                            size="xs"
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Text>Royhan Faisal Reza</Text>
                        </HStack>
                      </Td>
                      <Td isNumeric>450</Td>
                      <Td>
                        <Badge>Gold</Badge>
                      </Td>
                    </Tr> */}
                    {data?.data.map((item, index) =>
                      index > HALL_OF_FAME_COUNT - 1 &&
                      index < DATA_PER_TABLE + HALL_OF_FAME_COUNT ? (
                        <Tr>
                          <Td fontSize="lg" fontWeight={600}>
                            #{index + 1}
                          </Td>
                          <Td>
                            <HStack>
                              <Avatar
                                size="xs"
                                name={item?.name_maker || "NAMA USER"}
                                src={item?.image_maker || null}
                              />
                              <Text>{item?.name_maker || "NAMA USER"}</Text>
                            </HStack>
                          </Td>
                          <Td isNumeric>{item?.sla || 0}</Td>
                          <Td isNumeric>⭐️ {item?.score || 0}</Td>
                          <Td>
                            <Grade grade={item?.grade} />
                          </Td>
                        </Tr>
                      ) : null
                    )}
                    {data?.data.length - HALL_OF_FAME_COUNT < 1 ? (
                      <Tr>
                        <Td textAlign="center">Tidak ada data</Td>
                      </Tr>
                    ) : null}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            <Box>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Rank</Th>
                      <Th>Nama</Th>
                      <Th isNumeric>SLA</Th>
                      <Th isNumeric>Score</Th>
                      <Th>Grade</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.data.map((item, index) =>
                      index > DATA_PER_TABLE + (HALL_OF_FAME_COUNT - 1) ? (
                        <Tr>
                          <Td fontSize="lg" fontWeight={600}>
                            #{index + 1}
                          </Td>
                          <Td>
                            <HStack>
                              <Avatar
                                size="xs"
                                name={item?.name_maker || "NAMA USER"}
                                src={item?.image_maker || null}
                              />
                              <Text>{item?.name_maker || "NAMA USER"}</Text>
                            </HStack>
                          </Td>
                          <Td isNumeric>{item?.sla || 0}</Td>
                          <Td isNumeric>⭐️ {item?.score || 0}</Td>
                          <Td>
                            <Grade grade={item?.grade} />
                          </Td>
                        </Tr>
                      ) : null
                    )}
                    {data?.data.length - 3 < 1 ? (
                      <Tr>
                        <Td textAlign="center">Tidak ada data</Td>
                      </Tr>
                    ) : null}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
}

export default Scoring;
