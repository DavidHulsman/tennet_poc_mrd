import styles from "./InsertEntity.module.css";
import { createSignal } from "solid-js";
import {
  HStack,
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
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@hope-ui/solid";

function InsertEntity() {
  const [value, setValue] = createSignal("");

  const handleInput = (e) => setValue(e.target.value);

  const isInvalid = () => value() === "";

  return (
    <Center h={"100%"}>
      <VStack spacing={10}>
        <FormControl
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Input id="name" type="text" required placeholder="Name" />
          <Input id="shortname" type="text" placeholder="Shortname" />
          <HStack justifyContent="flex-end">
            <Button type="submit">Submit</Button>
          </HStack>
        </FormControl>
      </VStack>
    </Center>
  );
}

export default InsertEntity;
