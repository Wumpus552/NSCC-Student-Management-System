// User navigation options
const navigationOptions = {
    student: [
        "Dashboard",
        "My Courses",
        "Course Registration",
        "Grades",
        "Attendance",
        "My Profile",
        "Notifications"
    ],

    instructor: [
        "Dashboard",
        "My Classes",
        "Student List",
        "Attendance",
        "Manage Grades",
        "Announcements"
    ],

    admin: [
        "Dashboard",
        "Manage Students",
        "Manage Instructors",
        "Manage Courses",
        "Academic Records",
        "Reports",
        "System Settings"
    ]
};

// Current user information
let currentRole = "";
let currentPage = "Dashboard";

// Login Function
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    currentRole = document.getElementById("role").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
    }

    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("main-app").classList.remove("hidden");

    document.getElementById("user-role").textContent =
        currentRole.charAt(0).toUpperCase() + currentRole.slice(1) + " Portal";

    document.getElementById("welcome-user").textContent =
        "Welcome, " + username + "!";

    createNavigation();
    showPage("Dashboard");
});

// Create Navigation Menu
function createNavigation() {
    const navigation = document.getElementById("navigation");

    navigation.innerHTML = "";

    navigationOptions[currentRole].forEach(function(page) {
        const button = document.createElement("button");

        button.textContent = page;

        button.addEventListener("click", function() {
            showPage(page);
        });

        navigation.appendChild(button);
    });
}

// Display Selected Page
function showPage(page) {
    currentPage = page;

    document.getElementById("page-title").textContent = page;

    const content = document.getElementById("page-content");

    if (page === "Dashboard") {
        showDashboard(content);
    } else {
        showOtherPage(content, page);
    }
}

// Display Dashboard
function showDashboard(content) {

    if (currentRole === "student") {
        content.innerHTML = `
            <h2>Student Dashboard</h2>
            <p>Welcome to your student dashboard.</p>

            <h3>Academic Overview</h3>

            <div class="dashboard-cards">
                <div class="card">
                    <h3>Enrolled Courses</h3>
                    <p>5 Courses</p>
                </div>

                <div class="card">
                    <h3>Average Grade</h3>
                    <p>85%</p>
                </div>

                <div class="card">
                    <h3>Attendance</h3>
                    <p>92%</p>
                </div>
            </div>

            <h3>Upcoming Assignments</h3>
            <ul>
                <li>INFT 2100 - Project Management: Group Assignment 3 - due 2026-11-08 11:59PM</li>
                <li>PROG 2100 - Programming C++: ICA 04 - due 2026-11-08 11:59PM</li>
                <li>INET 2005 - Web Application Programming I: Assignment 3 - due 2026-11-06 11:59PM</li>
            </ul>
        `;
    }

    else if (currentRole === "instructor") {
        content.innerHTML = `
            <h2>Instructor Dashboard</h2>
            <p>Welcome to your instructor dashboard.</p>

            <h3>Teaching Overview</h3>

            <div class="dashboard-cards">
                <div class="card">
                    <h3>My Classes</h3>
                    <p>3 Classes</p>
                </div>

                <div class="card">
                    <h3>Total Students</h3>
                    <p>65 Students</p>
                </div>

                <div class="card">
                    <h3>Pending Grades</h3>
                    <p>8 Grades</p>
                </div>
            </div>

            <h3>Recent Activity</h3>
            <ul>
                <li>New student registered</li>
                <li>Assignment submissions received</li>
                <li>Attendance records updated</li>
            </ul>
        `;
    }

    else if (currentRole === "admin") {
        content.innerHTML = `
            <h2>Administrator Dashboard</h2>
            <p>Welcome to the administration dashboard.</p>

            <h3>System Overview</h3>

            <div class="dashboard-cards">
                <div class="card">
                    <h3>Students</h3>
                    <p>1,250</p>
                </div>

                <div class="card">
                    <h3>Instructors</h3>
                    <p>84</p>
                </div>

                <div class="card">
                    <h3>Courses</h3>
                    <p>62</p>
                </div>
            </div>

            <h3>Recent System Activity</h3>
            <ul>
                <li>New student account created</li>
                <li>Course information updated</li>
                <li>Academic records reviewed</li>
            </ul>
        `;
    }
}

// Display Other Pages
function showOtherPage(content, page) {

    const pageContent = {
        "My Courses": `
            <h2>My Courses</h2>
            <p>View your currently enrolled courses.</p>
            <ul>
                <li>INFT 2100 - Project Management</li>
                <li>PROG 2100 - Programming C++</li>
                <li>INET 2005 - Web Application Programming I</li>
            </ul>
        `,

        "Course Registration": `
            <h2>Course Registration</h2>
            <p>Browse and register for available courses.</p>
            <ul>
                <li>Database Design - <button onclick="alert('Registration submitted!')">Register</button></li>
                <li>Object-Oriented Programming - <button onclick="alert('Registration submitted!')">Register</button></li>
                <li>Web Development - <button onclick="alert('Registration submitted!')">Register</button></li>
            </ul>
        `,

        "Grades": `
            <h2>Grades</h2>
            <p>View academic grades and results.</p>
            <ul>
                <li>INFT 2100 - Project Management</li>
                <li>PROG 2100 - Programming C++</li>
                <li>INET 2005 - Web Application Programming I</li>
            </ul>
        `,

        "Attendance": `
            <h2>Attendance</h2>
            <p>View attendance records.</p>
            <ul>
                <li>INFT 2100 - Project Management</li>
                <li>PROG 2100 - Programming C++</li>
                <li>INET 2005 - Web Application Programming I</li>
            </ul>
        `,

        "My Profile": `
            <h2>My Profile</h2>
            <p>Name: Demo Student</p>
            <p>Student ID: 100245</p>
            <p>Program: IT Programming</p>
            <p>Email: student@example.com</p>
        `,

        "Notifications": `
            <h2>Notifications</h2>
            <ul>
                <li>New assignment posted.</li>
                <li>Course registration is available.</li>
                <li>Academic information updated.</li>
            </ul>
        `,

        "My Classes": `
            <h2>My Classes</h2>
            <ul>
                <li>INFT 2100 - Project Management</li>
                <li>PROG 2100 - Programming C++</li>
                <li>INET 2005 - Web Application Programming I</li>
            </ul>
        `,

        "Student List": `
            <h2>Student List</h2>
            <ul>
                <li>100245 - David Kennedy</li>
                <li>100246 - Kyle Phinney</li>
                <li>100247 - Alpha Vhembo</li>
                <li>100248 - Anthony King</li>
                <li>100249 - Connor Thimot</li>
            </ul>
        `,

        "Manage Grades": `
            <h2>Manage Grades</h2>
            <p>Review and update student grades.</p>
        `,

        "Announcements": `
            <h2>Announcements</h2>
            <p>Create and manage class announcements.</p>
        `,

        "Manage Students": `
            <h2>Manage Students</h2>
            <p>View and manage student accounts.</p>
        `,

        "Manage Instructors": `
            <h2>Manage Instructors</h2>
            <p>View and manage instructor accounts.</p>
        `,

        "Manage Courses": `
            <h2>Manage Courses</h2>
            <p>Add, edit, or remove courses.</p>
        `,

        "Academic Records": `
            <h2>Academic Records</h2>
            <p>View and manage student academic records.</p>
        `,

        "Reports": `
            <h2>Reports</h2>
            <p>View student and course reports.</p>
        `,

        "System Settings": `
            <h2>System Settings</h2>
            <p>Manage system settings and configurations.</p>
        `
    };

    content.innerHTML = pageContent[page] || "<h2>Page not found</h2>";
}

// Logout Function
document.getElementById("logout-button").addEventListener("click", function() {
    document.getElementById("main-app").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");

    document.getElementById("login-form").reset();

    currentRole = "";
    currentPage = "Dashboard";
});
