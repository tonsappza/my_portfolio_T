import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import router from './config/routes';
// import { ConfigProvider } from 'antd'
import LoadingSpinner from './components/Loading'
// import { ConfigProvider } from 'antd';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <ConfigProvider>
  <Suspense fallback={<LoadingSpinner />}>
    <RouterProvider router={router}>
    </RouterProvider>
  </Suspense >
  // </ConfigProvider>

)
