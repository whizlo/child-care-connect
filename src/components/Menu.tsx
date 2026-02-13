const menuItems = [
    {
        title: "Menu",
        items: [
            {
                icon: "/home.png",
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent"],

            },
            {
                icon: "/techaer.png",
                label: "Tecahers",
                href: "/list/teachers",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/student.png",
                label: "Stundents",
                href: "/list/students",
                visible: ["admin", "teacher"],
            },
            {
                icon: "/parent.pgn",
                label: "Parents",
                href: "/list/parents",
                visible: ["admin","teacher"],
            },
            {
                icon: "/subject.png",
                label: "Subjects",
                href: "/list/subjects",
                visible: ["admin"],
            },
            {
                icon: "/class.png",
                label: "Classes",
                href: "/list/classes",
                visible: ["admin", "teachers"],
            },
            {
                icon: "/lesson.png",
                label: "Lessons",
                href: "/list/lessons",
                visible: ["admin", "teachers"],
            },
            {
                icon: "/exam.png",
                label: "Exams",
                href: "/list/exams",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/assignment.png",
                label: "Assignments",
                href: "/list/assignments",
                visible: ["admin", "teachers","student", "parent"],
            },
            {
                icon: "/result.png",
                label: "Results",
                href: "/list/results",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/attendance.png",
                label: "Attendance",
                href: "/list/attendance",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/calender.png",
                label: "Events",
                href: "/list/events",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/message.png",
                label: "Messages",
                href: "/list/messages",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/announcement.png",
                label: "Announcements",
                href: "/list/annuncements",
                visible: ["admin", "teachers", "student", "parent"],
            },
        
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: "/profile.png",
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/setting.png",
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teachers", "student", "parent"],
            },
            {
                icon: "/logout.png",
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teachers", "student", "parent"],
            },
        ],
    },
];