import { Container, Title } from "@mantine/core";
import * as classes from "./Welcome.css";

export function Projects() {
  return (
    <Container>
      <Title className={classes.title} ta="center">
        Projects
      </Title>
    </Container>
  );
}
