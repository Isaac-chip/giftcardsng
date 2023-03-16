import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light rotate-45">
          giftcardsng
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link href="/" className="text-secondary">Home</Nav.Link>
            <Nav.Link href="/privacy" className="text-secondary">
              Privacy Policy
            </Nav.Link>
            <Nav.Link
              href="https://api.whatsapp.com/send?phone=2347048161101&amp;text=Hello%20GC%20Buying,%20I%20want%20to%20trade%20my%20gift%20cards%20with%20you"
              className="text-secondary"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
