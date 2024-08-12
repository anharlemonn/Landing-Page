import React from "react";
import { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Modal from "../../components/modal/modal";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const [modalContent, setModalContent] = useState();

  const toggleModal = ({ header, content }) => {
    setModalHeader(header);
    setModalContent(content);
    setIsOpen(!isOpen);
  };

  return (
    <HelmetProvider>
      <Modal isOpen={isOpen} onClose={toggleModal} title={modalHeader}>
        {modalContent}
      </Modal>
      <div className="portfolio" id="portfolio">
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Portfolio | {meta.title} </title>{" "}
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <div className="mb-5 po_items_ho">
            {dataportfolio.map((data, i) => {
              return (
                <div key={i} className="po_item">
                  <img src={require("../../" + data.img)} alt="" />
                  <Link
                    className="content"
                    to="#"
                    onClick={() =>
                      toggleModal({
                        header: data.description,
                        content: data.content,
                      })
                    }
                  >
                    +
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </HelmetProvider>
  );
}
