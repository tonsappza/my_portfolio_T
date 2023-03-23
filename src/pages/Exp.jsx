import { Card, Divider, Image, Row, Col } from "antd";
import "../styles/Bg-Exp.css";
import ImgInterset from "../assets/images/interset.jpg";
import ImgSchool from "../assets/images/satit.png";
const Experience = () => {
    return (
        <>
            <div className="Bg-Exp">
            </div>
            <Card className="Card-Exp1">
                <h1 className="Text1">InterSET Research and Solution</h1>
                <Row className="Row1">
                    <Col className="Col1">
                        <Image className="Img1"
                            src={ImgInterset}
                            preview={false}>
                        </Image>
                    </Col>
                    <Col>
                        <h2 className="Text2">1 December 2022 - 31 March 2023</h2>
                        <h3 className="Text3">Internship 4 months</h3>
                        <h3 className="Text3">Position : Frontend Developer</h3>
                        <h3 className="Text3">- Make Web application Test Management Tools system for tester.</h3>
                        <h3 className="Text3">- Make module salary section in HR Connext.</h3>
                    </Col>
                </Row >
                <Divider style={{ height: '3px', backgroundColor: 'darkblue' }} />
                <h1 className="Text1">Chandrakasem Rajabhat University Demostration School</h1>
                <Row className="Row2">
                    <Col className="Col2">
                        <Image className="Img2"
                            src={ImgSchool}
                            preview={false}>
                        </Image>
                    </Col>
                    <Col>
                        <h2 className="Text2">15 August 2022 - 22 September 2022</h2>
                        <h3 className="Text3">Internship 1 month</h3>
                        <h3 className="Text3">Position : Information Technology Assistant</h3>
                        <h3 className="Text3">- Make a LAN system in the computer room.</h3>
                        <h3 className="Text3">- Maintain the computer as assigned.</h3>
                        <h3 className="Text3">- Make stickers, to put on the executive rooms and so on.</h3>
                        <h3 className="Text3">- Make a student ID card.</h3>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
export default Experience;