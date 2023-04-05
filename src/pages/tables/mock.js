import ellieSmithImg from "../../assets/tables/ellieSmithImg.png";
import floydMilesImg from "../../assets/tables/floydMilesImg.png";
import rosaFloresImg from "../../assets/tables/rosaFloresImg.png";
import janeCooperImg from "../../assets/tables/janeCooper.png";
import bagIcon from "../../assets/tables/bagIcon.svg";
import folderIcon from "../../assets/tables/folderIcon.svg";
import joystickIcon from "../../assets/tables/joystickIcon.svg";
import basketIcon from "../../assets/tables/basketIcon.svg";



const mock = {
  firstTable: [
    {
      "ID": "1",
      "Name": "Trọng Nghĩa",
      "PhoneNum": "0868345468",
      "Status": "Working",
      "Role": "Collector",
      "img": janeCooperImg
  },
  {
      "ID": "2",
      "Name": "Vĩnh Hưng",
      "PhoneNum": "0903339939",
      "Status": "Busy",
      "Role": "Collector",
      "img": ellieSmithImg
  },
  {
      "ID": "3",
      "Name": "Thanh Tùng",
      "PhoneNum": "0524343279",
      "Status": "Absent",
      "Role": "Collector",
      "img": rosaFloresImg
  },
  {
      "ID": "4",
      "Name": "Quang Hiếu",
      "PhoneNum": "0333444555",
      "Status": "Ready",
      "Role": "Collector",
      "img": floydMilesImg
  },
  {
      "ID": "5",
      "Name": "Mạnh Quỳnh",
      "PhoneNum": "0878887888",
      "Status": "Working",
      "Role": "Collector",
      "img": janeCooperImg
  },
  {
      "ID": "6",
      "Name": "Quốc Tuấn",
      "PhoneNum": "0777388878",
      "Status": "Working",
      "Role": "Collector",
      "img": ellieSmithImg
  },
  {
      "ID": "7",
      "Name": "Võ Mạnh",
      "PhoneNum": "0939392468",
      "Status": "Ready",
      "Role": "Collector",
      "img": rosaFloresImg
  },
  {
      "ID": "8",
      "Name": "Quang Lê",
      "PhoneNum": "0937777777",
      "Status": "Absent",
      "Role": "Collector",
      "img": floydMilesImg
  },
  {
      "ID": "9",
      "Name": "Hiền Hồ",
      "PhoneNum": "0312560406",
      "Status": "Working",
      "Role": "Janitor",
      "img": janeCooperImg
  },
  {
      "ID": "10",
      "Name": "Đông Nhi",
      "PhoneNum": "0849701934",
      "Status": "Busy",
      "Role": "Janitor",
      "img": ellieSmithImg
  },
  {
      "ID": "11",
      "Name": "Hương Tràm ",
      "PhoneNum": "0973514635",
      "Status": "Absent",
      "Role": "Janitor",
      "img": rosaFloresImg
  },
  {
      "ID": "12",
      "Name": "Thuỳ Chi",
      "PhoneNum": "0525026532",
      "Status": "Ready",
      "Role": "Janitor",
      "img": floydMilesImg
  },
  {
      "ID": "13",
      "Name": "Hải  Tú",
      "PhoneNum": "0331199353",
      "Status": "Working",
      "Role": "Janitor",
      "img": janeCooperImg
  },
  {
      "ID": "14",
      "Name": "Minh Hằng",
      "PhoneNum": "0711203313",
      "Status": "Working",
      "Role": "Janitor",
      "img": ellieSmithImg
  },
  {
      "ID": "15",
      "Name": "Bảo Tâm Băng Ngọc",
      "PhoneNum": "0933266660",
      "Status": "Working",
      "Role": "Janitor",
      "img": rosaFloresImg
  },
  {
      "ID": "16",
      "Name": "Bích Phương",
      "PhoneNum": "0876115653",
      "Status": "Working",
      "Role": "Janitor",
      "img": floydMilesImg
  }
   ],
  secondTable: [
    {
        "ID": "1",
        "RouteID": "Nguyễn Kim",
        "CarID": "50D-246.89",
        "Driver": "Trọng Nghĩa",
        "StartTime": "15:34",
        "Point": "Thống Nhất",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "2",
        "RouteID": "Tô Hiến Thành",
        "CarID": "51D-135.79",
        "Driver": "Vĩnh Hưng",
        "StartTime": "15:27",
        "Point": "Vạn Hạnh",
        "Status": "Addriving",
        "Color": "secondary-cyan"
    },
    {
        "ID": "3",
        "RouteID": "Hải Thượng",
        "CarID": "51D-233.24",
        "Driver": "Thanh Tùng",
        "StartTime": "14:32",
        "Point": "Cầu Ông Lãnh",
        "Status": "Finish",
        "Color": "success"
    },
    {
        "ID": "4",
        "RouteID": "3 Tháng 2",
        "CarID": "50D-342.89",
        "Driver": "Quang Hiếu",
        "StartTime": "13:33",
        "Point": "Cầu Vượt",
        "Status": "Pending",
        "Color": "secondary-yellow"
    },
    {
        "ID": "5",
        "RouteID": "CMT8",
        "CarID": "51D-574.12",
        "Driver": "Mạnh Quỳnh",
        "StartTime": "13:30",
        "Point": "Lê Thị Riêng",
        "Status": "Cancel",
        "Color": "dark"
    },
    {
        "ID": "6",
        "RouteID": "NTMK",
        "CarID": "51D-123.43",
        "Driver": "Quốc Tuấn",
        "StartTime": "13:29",
        "Point": "CV LV8",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "7",
        "RouteID": "Lữ Gia",
        "CarID": "50D-972.12",
        "Driver": "Võ Mạnh",
        "StartTime": "11:20",
        "Point": "Phú Thọ",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "8",
        "RouteID": "Hoà Hảo",
        "CarID": "50D-246.89",
        "Driver": "Quang Lê",
        "StartTime": "11:16",
        "Point": "KTXBK",
        "Status": "Cancel",
        "Color": "dark"
    },
    {
        "ID": "9",
        "RouteID": "Nguyễn Tri Phương",
        "CarID": "51D-135.79",
        "Driver": "Trọng Nghĩa",
        "StartTime": "11:02",
        "Point": "Ngã 5 LTT",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "10",
        "RouteID": "Ngô Gia Tự",
        "CarID": "51D-233.24",
        "Driver": "Vĩnh Hưng",
        "StartTime": "10:45",
        "Point": "Vòng xoay NTP",
        "Status": "Addriving",
        "Color": "secondary-cyan"
    },
    {
        "ID": "11",
        "RouteID": "Nguyễn Chí Thanh",
        "CarID": "50D-342.89",
        "Driver": "Thanh Tùng",
        "StartTime": "10:28",
        "Point": "Nhà máy Bia",
        "Status": "Collecting",
        "Color": "secondary-red"
    },
    {
        "ID": "12",
        "RouteID": "Vĩnh Viễn",
        "CarID": "51D-574.12",
        "Driver": "Quang Hiếu",
        "StartTime": "9:30",
        "Point": "Chợ Vĩnh Viễn",
        "Status": "Addriving",
        "Color": "secondary-cyan"
    },
    {
        "ID": "13",
        "RouteID": "Nhật Tảo",
        "CarID": "51D-123.43",
        "Driver": "Mạnh Quỳnh",
        "StartTime": "8:40",
        "Point": "CC Nhật Tảo",
        "Status": "Pending",
        "Color": "secondary-yellow"
    },
    {
        "ID": "14",
        "RouteID": "Hùng Vương",
        "CarID": "50D-246.89",
        "Driver": "Quốc Tuấn",
        "StartTime": "8:37",
        "Point": "ĐH Y Dược",
        "Status": "Finish",
        "Color": "success"
    },
    {
        "ID": "15",
        "RouteID": "An Dương Vương",
        "CarID": "51D-135.79",
        "Driver": "Võ Mạnh",
        "StartTime": "8:34",
        "Point": "CV Văn Lang",
        "Status": "Finish",
        "Color": "success"
    },
    {
        "ID": "16",
        "RouteID": "Paster",
        "CarID": "51D-233.24",
        "Driver": "Quang Lê",
        "StartTime": "8:28",
        "Point": "Cây Xăng VT6",
        "Status": "Finish",
        "Color": "success"
    }
],
  transactionsWidget: [
    {
      id: 1,
      icon: basketIcon,
      category: "Thay  gạt  mưa      ",
      date: "13:00 8/12/2022",
      price: "120 000",
      description: "Gạt mưa hỏng",
      dropdownOpen: false,
    },
    {
      id: 2,
      icon: joystickIcon,
      category: "Sửa thùng rác 4",
      date: "14:00 8/12/2022",
      price: "Không có",
      description: "Đã báo cáo  ",
      dropdownOpen: false,
    },
    {
      id: 3,
      icon: folderIcon,
      category: "Bảo trì xe số 7",
      date: "16:00 8/12/2022",
      price: "800 000 ",
      description: "Anh Nghĩa làm",
      dropdownOpen: false,
    },
    {
      id: 4,
      icon: bagIcon,
      category: "Trợ cấp cuối tháng",
      date: "17:00 8/12/2022",
      price: "400 000",
      description: "Tăng ca 5h  ",
      dropdownOpen: false,
    }
  ],
  tasksWidget: [
    {
      id: 1,
      description: "Kiểm tra thùng rác số 4",
      time: "9 AM",
      completed: true,
    },
    {
      id: 2,
      description: "Họp hằng tuần",
      time: "11 AM",
      completed: false,
    },
    {
      id: 3,
      description: "Báo cáo kế hoạch tháng",
      time: "2.30 PM",
      completed: false,
    },
    {
      id: 4,
      description: "Kiểm tra xe số 7",
      time: "4 PM",
      completed: false,
    },
  ]
}

export default mock;
