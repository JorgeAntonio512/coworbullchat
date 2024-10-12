import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Text,
  Tooltip,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { FormEvent } from "react";

type IntroProps = {
  onSubmit: (event: FormEvent) => Promise<void>;
};

function Intro({ onSubmit }: IntroProps) {
  const borderColor = useColorModeValue("gray.400", "gray.900");
  const backgroundColor = useColorModeValue("white", "gray.700");
  const warningBackgroundColor = useColorModeValue("blue.50", "whiteAlpha.50");

  return (
    <Flex
      direction={{ md: "column", base: "column-reverse" }}
      width="100%"
      maxWidth={"768px"}
      margin="auto"
      mt={10}
      backgroundColor={backgroundColor}
      borderRadius={10}
      px={{ md: 5, base: 2 }}
      py={8}
      border="1px solid"
      borderColor={borderColor}
    >
      <Text fontWeight="bold" fontSize="sm" textAlign="center">
        Click on the Text button to begin your adventure.
      </Text>

      <br />

      <Text>
      <br />
      <br />
        1. Provide us with a username. No requirements except that it contains:
      <br />
          &emsp; &emsp;1.1. a special character
      <br />
         &emsp; &emsp;1.2. a number
      <br />    
          &emsp; &emsp;1.3. a capital letter
      <br />
{/*<form>
  <label>
    username:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>*/}
      </Text>

      <br />

      <Text>
        2. Answer the following questions (questions are also totally voluntary. Please indicate "n/a" if you don't want to answer:
        <br />
        &emsp; &emsp; 2.1. What is something quirky that you like to do? (for example, watching mindless ghost videos on YouTube on Saturday morning with your coffee)
        <br />
        &emsp; &emsp; 2.2. Level of comfort — could you fart in front of your partner? Pick your nose? Etc?
        <br />
        &emsp; &emsp; 2.3. Freaky factor – sliding scale or other metric of how much or how little someone is willing to tolerate or experience during intercourse

      </Text>

      <br />

      <Box
        margin="0 auto"
        p={4}
        borderRadius={10}
        border="1px solid"
        backgroundColor={warningBackgroundColor}
        borderColor={borderColor}
      >
        <Text textAlign="center">
          Developed by Mateus Abelli. Check out the{" "}
          <Link
            href="https://github.com/mateusabelli/omedev"
            rel="noreferrer"
            target="_blank"
          >
            Source Code!
          </Link>
        </Text>
      </Box>

      <br />

      <Flex justifyContent={"space-between"} gap={5}>
        <Box width="100%" display={{ md: "unset", base: "none" }}>
          <Text fontSize={"lg"} mb={2} textAlign={"center"}>
            What do you wanna talk about?
          </Text>

          <Tooltip label="This feature is unavailable at the moment...">
            <Input
              disabled
              placeholder="Add your interests (Optional)"
              height="60px"
            />
          </Tooltip>
        </Box>

        <Box width="100%">
          <Text fontSize={"lg"} mb={2} textAlign={"center"}>
            Start chatting:
          </Text>
          <Flex justifyContent={"center"} gap={2}>
            <Button
              height={"60px"}
              width={"150px"}
              border={"1px solid"}
              onClick={onSubmit}
              backgroundColor={"blue.500"}
              color="white"
            >
              Text
            </Button>

            <Text mt={4} fontWeight="bold">
              or
            </Text>

            <Flex direction={"column"}>
              <Tooltip label="Developers don't like this type of interaction...">
                <Button
                  height={"60px"}
                  width={"150px"}
                  border={"1px solid"}
                  disabled
                >
                  Video
                </Button>
              </Tooltip>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                <Button p={0} width="150px" fontSize="sm" variant={"ghost"}>
                  Unmoderated section
                </Button>
              </a>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Intro;
