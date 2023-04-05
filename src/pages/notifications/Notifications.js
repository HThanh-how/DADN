import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classnames from "classnames";
import {
  Col,
  Row,
  Button,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import Code from "../../components/Code/Code.js";
import Notification from "../../components/Notification/Notification.js";
import s from "./Notifications.module.scss";
import successIcon from "../../assets/notificationsIcons/successIcon.svg";
import closeIcon from "../../assets/notificationsIcons/closeIcon.svg";
import notificationImage from "../../assets/navbarMenus/notificationImage.jpg";
import mariaImage from "../../assets/navbarMenus/mariaImage.jpg";
const positions = [
  toast.POSITION.TOP_LEFT,
  toast.POSITION.TOP_CENTER,
  toast.POSITION.TOP_RIGHT,
  toast.POSITION.BOTTOM_LEFT,
  toast.POSITION.BOTTOM_CENTER,
  toast.POSITION.BOTTOM_RIGHT
];

const notificationTypes = ["info", "success", "warning", "error"]

const Notifications = function () {

  const [notificationPosition, setNotificationPosition] = useState(3)

  function changeNotificationPosition(positionId) {
    setNotificationPosition(positionId)
  }

  const getRandomNotification = () => {
    return notificationTypes[Math.floor(Math.random()*notificationTypes.length)]
  }

  const options = {
    autoClose: 4000,
    closeButton: false,
    hideProgressBar: true,
    position: positions[notificationPosition],
  };

  return (
    <div>
      <Row className="gutter mb-4">
        <Col xs={12} lg={4}>
          <Widget className="widget-p-md">
            <div className="headline-2">Tin nhắn mới từ Nghĩa</div>
            <div className={s.widgetText}>Em check điểm số 4 rồi ạ, em gửi hình chị</div>

              
    
                <img class="center" width="300px" src={notificationImage} />
             

              
          
          </Widget>
        </Col>
        <Col xs={12} lg={4} className="mt-4 mt-lg-0">
          <Widget className="widget-p-md">
            <div className="headline-2">Tin nhắn mới từ Tuấn</div>
            <div className={s.widgetText}>Em gửi thông tin rồi nha chị</div>
            <div className=" headline-3 mt-4 mb-2">Đã cập nhật</div>
            <Button
              color="primary"
              className="notification-btn"
              onClick={() => {
                let value = getRandomNotification();
                toast(<Notification type={value}/>, options)
                }
              }
            >
              <div className="ml-2 body-2">Cập nhật mới, nhấn để xem</div>
              <img src={closeIcon} alt="..."/>
            </Button>
          </Widget>
        </Col>
        <Col xs={12} lg={4} className="mt-4 mt-lg-0">
          <Widget className="widget-p-md">
            <div className="headline-2 mb-4">Chú ý</div>
            <Notification
              type="info"
              withIcon
            />
            <Notification
              type="error"
              withIcon
            />
            <Notification
              type="success"
              withIcon
            />
            <Notification
              type="warning"
              withIcon
            />
          </Widget>


        </Col>
      </Row>
    </div>
  )
}

export default Notifications;

