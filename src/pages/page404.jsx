import { Card, Divider } from "antd";
import React from "react";
const PageNotFound = () => {
    return (
        <>
            <Card className="Error404">
                <h1 style={{ fontSize: "30px", }}>Error 404 - Page not found</h1>
                <Divider style={{ borderStyle: 'dashed' }} />
                <p style={{ fontSize: "18px", }}>The page you are looking for doesn't exist or has been moved.</p>
            </Card>
        </>
    )
}
export default PageNotFound;