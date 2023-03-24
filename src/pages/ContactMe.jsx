import React from "react";
import { Card, Row, Form, Input, Button, Col, Image, Space } from "antd";
import "../styles/bg-Contact.css"
import QRcode from '../../src/assets/images/QRcodeMe.jpg'
import { CopyToClipboard } from "react-copy-to-clipboard"

const MYContact = () => {
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
                                <Row>
                                    <Col xs={24} sm={24} xl={19} xxl={19}>
                                        <Input className="disEmail"
                                            disabled
                                            value={'tonpongsapak.02102541@gmail.com'}>
                                        </Input>
                                    </Col>
                                    <Col>
                                        <Space className="Space-copy">
                                            <CopyToClipboard text={'tonpongsapak.02102541@gmail.com'}>
                                                <Button className="btn-copy">Copy Email</Button>
                                            </CopyToClipboard>
                                        </Space>
                                    </Col>

                                </Row>
                            </Form.Item >
                            <Form.Item label={'Phone'} >
                                <Row>
                                    <Col xs={24} sm={24} xl={19} xxl={19}>
                                        <Input className="disEmail"
                                            disabled
                                            value={'096-898-7514'}>
                                        </Input>
                                    </Col>
                                    <Col >
                                        <CopyToClipboard text={'0968987514'}
                                        >
                                            <Button className="btn-copy">Copy Phone</Button>
                                        </CopyToClipboard>
                                    </Col>
                                </Row>
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