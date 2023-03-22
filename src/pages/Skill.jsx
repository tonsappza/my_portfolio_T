import { Card, Row, Col, Image } from "antd"
import "../styles/Bg-Skill.css";
import {
    IoLogoCss3, IoLogoHtml5, IoLogoJavascript,
} from "react-icons/io5";
import {
    SiTypescript, SiPhp, SiReact, SiPython, SiGit, SiGithub,
    SiMysql, SiNodedotjs, SiVisualstudiocode, SiMicrosoftword,
    SiMicrosoftexcel, SiMicrosoftpowerpoint, SiCanva, SiPostman,
    SiAdobephotoshop, SiMicrosoft
} from "react-icons/Si";
import RestApiIcon from '../../src/assets/images/restApi.png'
const skill = () => {
    return (
        <>
            <div class="bgAnimation"></div>
            <div class="bgAnimation Animation2"></div>
            <div class="bgAnimation Animation3"></div>
            <Card className="Card-Skill">

                <h1 style={{ textAlign: 'center', textDecoration: "underline solid rgb(68, 68, 68)" }}
                >My Skills</h1>
                <Row className="RowInfoSkill">
                    <Card className="CardInfo1">

                        <h2 style={{ textDecoration: "underline solid rgb(68, 68, 68)" }}>Expertise</h2>

                        <Row>
                            <Col>
                                <h3><IoLogoHtml5 /> HTML</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><IoLogoCss3 /> CSS</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiPhp /> PHP</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><IoLogoJavascript /> Javascript</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiTypescript /> Typescript</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiReact /> React</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiPython /> Python</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiGit /> Git</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiGithub /> Github</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiMysql /> MySQL</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiNodedotjs /> ExpressJS</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><Image style={{ width: '16px', height: '16px' }} src={RestApiIcon}></Image> REST API</h3>

                            </Col>
                        </Row>
                    </Card>
                    <Card className="CardInfo2">
                        <h2 style={{ textDecoration: "underline solid rgb(68, 68, 68)" }}>Software skills</h2>
                        <Row>
                            <Col>
                                <h3><SiVisualstudiocode /> Visual Studio Code</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiMicrosoftword /> Microsoft Word</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiMicrosoftexcel /> Microsoft Excel</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiMicrosoftpowerpoint /> Microsoft Powerpoint</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiCanva /> Canva</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiPostman /> Postman</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3><SiAdobephotoshop /> Adobe Photoshop</h3>
                            </Col>
                        </Row>
                    </Card>
                </Row>


            </Card >
        </>
    )
}
export default skill;