import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import { Card, Container } from "react-bootstrap";

const firstName = "Funmite"; // You can change this to test the greeting

function App() {
  return (
    <Container className="mt-5">
      <Card style={{ width: "18rem" }} className="shadow-lg p-3 mb-5 bg-white rounded">
        <Image />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text><Description /></Card.Text>
          <h5><Price /></h5>
        </Card.Body>
      </Card>

      <div className="text-center mt-3">
        <h2>Hello, {firstName ? firstName : "there!"}</h2>
        {firstName && (
          <img
            src="https://gomycodelearn.blob.core.windows.net/profiles/ece02937-f16e-4183-90c3-4be492c85b81-133772623681333732.jpeg"
            alt="Profile"
            className="rounded-circle mt-3"
          />
        )}
      </div>
    </Container>
  );
}

export default App;
