import { Card, Col, Row, Image, Divider } from "antd";
import "../styles/bgProfile.css";
import ImgP from "../assets/images/ImgProfile.jpg";
import { IoCall, IoAccessibility, IoCalendar, IoHourglass, IoRibbon, IoSchool, } from "react-icons/io5";
import { MailOutlined, } from "@ant-design/icons"
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
                                <IoAccessibility /> Name : Pongsapak Sapprasert
                            </div>
                            <div className="Text-Profile">
                                < IoHourglass /> Age : 24
                            </div>
                            <div className="Text-Profile">
                                <IoCalendar /> Date of birth : 02/10/1998
                            </div>
                            <div className="Text-Profile">
                                <IoSchool /> Graduated : Chandrakasem Rajabhat University
                            </div>
                            <div className="Text-Profile">
                                <IoRibbon /> Major : Information Technology
                            </div>
                            <div className="Text-Profile">
                                <MailOutlined /> E-mail : tonpongsapak.02102541@gmail.com
                            </div>
                            <div className="Text-Profile">
                                <IoCall /> Phone number : 096-898-7514
                            </div>

                        </Card>
                    </Col>

                </Row>
            </Card >

        </>
    )
}
export default Profile;

