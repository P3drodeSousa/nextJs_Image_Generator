import { Container } from "./styles";

const Notification = ({ show }) => {
  return <Container show={show}>Copied image URL to clipboard</Container>;
};

export default Notification;
