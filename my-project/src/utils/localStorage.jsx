localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Project Report",
        "taskDescription": "Compile data and create a detailed project progress report.",
        "taskDate": "2025-10-23",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend weekly stand-up meeting with team members.",
        "taskDate": "2025-10-20",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Code Optimization",
        "taskDescription": "Refactor backend code for better performance.",
        "taskDate": "2025-10-21",
        "category": "Development"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 2,
    "firstName": "Saanvi",
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design UI Mockups",
        "taskDescription": "Create modern UI mockups for new dashboard module.",
        "taskDate": "2025-10-24",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Feedback Review",
        "taskDescription": "Analyze and apply feedback received from client review meeting.",
        "taskDate": "2025-10-19",
        "category": "Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "API Integration",
        "taskDescription": "Integrate authentication API with front-end system.",
        "taskDate": "2025-10-20",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Testing Module A",
        "taskDescription": "Perform unit testing on Module A before deployment.",
        "taskDate": "2025-10-25",
        "category": "Testing"
      }
    ],
    "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 3,
    "firstName": "Vivaan",
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Cleanup",
        "taskDescription": "Remove redundant entries and normalize tables in the database.",
        "taskDate": "2025-10-18",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create REST API",
        "taskDescription": "Develop RESTful APIs for the user management module.",
        "taskDate": "2025-10-26",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deployment Script",
        "taskDescription": "Automate deployment process using CI/CD pipeline.",
        "taskDate": "2025-10-22",
        "category": "DevOps"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 4,
    "firstName": "Isha",
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Update user guide for new software release.",
        "taskDate": "2025-10-25",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Security Audit",
        "taskDescription": "Perform security review of the current application.",
        "taskDate": "2025-10-19",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Collaboration",
        "taskDescription": "Coordinate with design and testing teams for release planning.",
        "taskDate": "2025-10-27",
        "category": "Coordination"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Data Migration",
        "taskDescription": "Migrate old records from legacy system to new server.",
        "taskDate": "2025-10-21",
        "category": "Database"
      }
    ],
    "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
    "id": 5,
    "firstName": "Anaya",
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Frontend Bug Fixes",
        "taskDescription": "Resolve UI glitches in the profile management section.",
        "taskDate": "2025-10-23",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review pull requests submitted by team members.",
        "taskDate": "2025-10-19",
        "category": "Review"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Implement Dark Mode",
        "taskDescription": "Add dark mode toggle feature across the website.",
        "taskDate": "2025-10-26",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Server Backup",
        "taskDescription": "Perform full backup of production server.",
        "taskDate": "2025-10-21",
        "category": "Maintenance"
      }
    ],
    "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 }
  }
];

  const admin =  [
    {
      "id": 1,
      "email": "admin@company.com",
      "password": "123"
    }
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify (employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}

  }
