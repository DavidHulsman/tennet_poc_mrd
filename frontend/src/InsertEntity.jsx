import logo from "./logo.svg";
import styles from "./InsertEntity.module.css";
import { createSignal } from "solid-js";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Button,
  Center,
  Heading,
  VStack,
} from "@hope-ui/solid";

function InsertEntity() {
  const [count, setCount] = createSignal(0);

  return (
    <Center h={"100%"}>
      <VStack spacing={10}>
        <Input placeholder="Basic usage" />
        <Input placeholder="Basic usage" />
        <Heading size={"xl"}>Clicks: {count()}</Heading>
        <Button
          variant={"subtle"}
          colorScheme={"info"}
          onclick={() => setCount(count() + 1)}
        >
          Click me!
        </Button>
      </VStack>
    </Center>
  );
}

export default InsertEntity;
