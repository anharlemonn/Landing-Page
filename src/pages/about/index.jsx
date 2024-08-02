import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import SkillCloud from "../../components/skillcloud";
import * as icon from "@coreui/icons";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export default function About() {
  return (
    <HelmetProvider>
      <Container className="About-header" id="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Professional Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="3">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="9">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <div className="img_back">
                          <img className="icon" src={data.icon} alt="" />
                        </div>
                      </td>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="4">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="8">
            <SkillCloud skills={skills} icon={icon} />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
}
