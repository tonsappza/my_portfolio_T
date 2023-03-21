import { Card, Col, Row, Image } from "antd";
import "../styles/bgProfile.css";
import ImgP from "../assets/images/ImgProfile.jpg";
const Profile = () => {
    return (
        <>
            <div className="Bg-Profile">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <Card className="Card-Profile">
                <Row>
                    <Col className="col__image" lg={12} xs={24}>
                        <Card className="cardImage">
                            <Image
                                className="ImgProfile"
                                // style={{ width: "100%", maxHeight: '500px' }}
                                src={ImgP}
                                preview={false}
                            />
                        </Card>
                    </Col>
                    <Col lg={12} md={24} xs={24}>
                        <Card className="Card-Info">
                            <div className="Text-Profile">
                                Name : Pongsapak Sapprasert
                            </div>
                            <div className="Text-Profile">
                                Age : 24
                            </div>
                            <div className="Text-Profile">
                                Date of birth : 02/10/1998
                            </div>
                            <div className="Text-Profile">
                                Graduated : Chandrakasem Rajabhat University
                            </div>
                            <div className="Text-Profile">
                                Major : Information Technology
                            </div>
                            <div className="Text-Profile">
                                E-mail : tonpongsapak.02102541@gmail.com
                            </div>
                            <div className="Text-Profile">
                                Phone number : 096-898-7514
                            </div>

                        </Card>
                    </Col>

                </Row>
            </Card >

        </>
    )
}
export default Profile;

