import { Card, Row, Form, Input, Button, Col, Image, Space } from "antd";
import "../styles/bg-Contact.css"
import QRcode from '../../src/assets/images/QRcodeMe.jpg'

const MYContact = () => {
    const { TextArea } = Input;
    return (
        <>
            <div class="bg-contact">
                <div class="box">
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
            </div>
            <Card className="Card-Contact">
                <Form layout="vertical">
                    <Row>
                        <Col span={24}>
                            <h2 style={{ textAlign: 'center' }}>Contact me</h2>
                            <Form.Item label={'Email'}>
                                <Input className="disEmail"
                                    disabled
                                    value={'tonpongsapak.02102541@gmail.com'}>
                                </Input>
                            </Form.Item >
                            <Form.Item label={'Phone'} >
                                <Input className="disEmail"
                                    disabled
                                    value={'096-898-7514'}>
                                </Input>
                            </Form.Item>
                            <h2 style={{ textAlign: 'center' }}>My Line QR code</h2>
                            <Space className="QRcodeSpace">
                                <Image className="ImgQRcode" src={QRcode}></Image>
                            </Space>
                        </Col>
                    </Row>

                </Form>

            </Card >
        </>
    )
}
export default MYContact;