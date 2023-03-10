import {
  Box,
  Container,
  IconButton,
  Input,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  QueryResultSet,
  QueryStatusFinished,
} from "@flipsidecrypto/sdk/dist/src";
import { useMutation } from "react-query";
import { TxBox } from "lib/components/basic/TxBox";
import { validateInputAddresses } from "lib/utility/ethAddressChecker";
import { TxItemContainer } from "lib/components/basic/TxItemContainer";

function Transactions() {
  const [address, setAddress] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const mutation: any = useMutation(async (address: string) => {
    const fetchedData = await fetch(`/api/address/${address}`);
    const data: QueryResultSet = await fetchedData.json();

    return data;
  });

  useEffect(() => {
    const isNewAddressValid = validateInputAddresses(address);
    if (isNewAddressValid && !valid) {
      setValid(true);
    } else if (!isNewAddressValid && valid) {
      setValid(false);
    }
  }, [address]);

  const submitAddress = () => {
    if (valid) {
      mutation.mutate(address);
    }
  };

  const bgCard = useColorModeValue("white", "#191919");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Box>
      <Container
        display={"flex"}
        justifyContent="center"
        mt={["4", "8"]}
        maxW={"container.xl"}
      >
        <Input
          color={textColor}
          bgColor={bgCard}
          shadow="base"
          transition={"all 0.5s "}
          border={"2px solid transparent"}
          _hover={{
            boxShadow: "var(--chakra-shadows-lg)",
            borderColor: "#444",
          }}
          borderRadius={"2xl"}
          h={"16"}
          maxW={"xl"}
          mr="4"
          type="text"
          placeholder="Eth Wallet Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <IconButton
          aria-label="search Eth address"
          onClick={submitAddress}
          borderRadius={"2xl"}
          disabled={!valid}
          icon={<AiOutlineSearch fontSize={"2rem"} />}
          color={textColor}
          bgColor={bgCard}
          w={"16"}
          h={"16"}
          variant="outline"
        />
      </Container>
      <Box
        opacity={0.4}
        userSelect="none"
        textAlign={"center"}
        fontSize="small"
        my={"2px"}
      >
        All Data Come From{" "}
        <Link textDecor={"underline"} href="https://flipsidecrypto.xyz/">
          FlipSide Crypto
        </Link>{" "}
        With Help of{" "}
        <Link
          textDecor={"underline"}
          href="https://github.com/FlipsideCrypto/sdk/blob/main/js/README.md"
        >
          FlipSide SDK
        </Link>
      </Box>

      <Box>
        <Container mt={["4", "8"]} maxW={"container.xl"}>
          {mutation.isLoading && (
            <TxItemContainer>
              <Spinner size="xl" thickness="0.5rem" />
              <Text textAlign={"center"} fontSize={["xl", "3xl"]}>
                Loading To Geting Data From FlipSide Crypto...
              </Text>
            </TxItemContainer>
          )}
          {mutation.isIdle && (
            <TxItemContainer>
              <Text textAlign={"center"} fontSize={["md", "xl"]}>
                Enter an ETH address and click the search button to get All
                Ethereum Transaction History From FlipSide Crypto
              </Text>
            </TxItemContainer>
          )}

          {mutation.isSuccess &&
            mutation.data.status === QueryStatusFinished && (
              <Stack direction={"column"} spacing="6" pb={"8"}>
                {mutation.data.records?.map((record: any) => (
                  <TxBox data={record as any} />
                ))}
              </Stack>
            )}

          {mutation.isSuccess &&
            mutation.data.status === QueryStatusFinished &&
            !mutation.data.records?.length && (
              <TxItemContainer>
                <Text textAlign={"center"} fontSize={["md", "xl"]}>
                  We Don't Find Any Ethereum Transaction From This Address.
                </Text>
              </TxItemContainer>
            )}

          {(mutation.isError ||
            (mutation.isSuccess && !!mutation.error) ||
            (mutation.isSuccess && !!mutation.data.error)) && (
            <TxItemContainer>
              <Text textAlign={"center"} fontSize={["md", "xl"]}>
                UnKnown Error Happend.
              </Text>
            </TxItemContainer>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default Transactions;
