import React, { useState } from "react";
import { Alert } from "reactstrap";

import infoIcon from "../../assets/notificationsIcons/infoIcon.svg";
import warningIcon from "../../assets/notificationsIcons/warningIcon.svg";
import successIcon from "../../assets/notificationsIcons/successIcon.svg";
import dangerIcon from "../../assets/notificationsIcons/dangerIcon.svg";

import s from "./Notification.module.scss";

const typesIcons = {
  info: infoIcon,
  warning: warningIcon,
  success: successIcon,
  error: dangerIcon,
}

const notificationMessages = {
  info: "<span class='body-2'>Cập nhật</span> Xe số 6 đã sẵn sàng",
  error: "<span class='body-2'>Khẩn: </span> Điểm tập kết số 1 đã quá tải",
  success: "<span class='body-2'>Hoàn thành:</span> Tuyến Bến Thành đã hoàn thành",
  warning: "<span class='body-2'>Chú ý: </span> Điểm tập kết số 2 sắp đầy",
}

const colors = {
  info: "#00A5FF",
  warning: "#FFA100",
  success: "#43BC13",
  error: "#FF4B23",
}

export default function Notification({ ...props }) {

  const [notificationOpen, setNotificationClose] = useState(true)

  const icon = getIconByType(props.type)

  const closeNotification = () => {
    setNotificationClose(!notificationOpen)
  }

  return (
    <>
      <Alert
        className={s.notificationContainer}
        style={{backgroundColor: colors[props.type]}}
        isOpen={notificationOpen}
        toggle={() => closeNotification()}
      >
        <div className={s.notificationIconContainer}>
          {props.withIcon && <img src={icon} alt="..."/>}
        </div>
        <div className={s.messageContainer}>
          <span dangerouslySetInnerHTML={{__html: notificationMessages[props.type]}}></span>
        </div>
      </Alert>
    </>
  )
};

function getIconByType(type = "info") {
  return typesIcons[type];
}

