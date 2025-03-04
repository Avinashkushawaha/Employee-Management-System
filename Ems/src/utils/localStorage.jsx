const employees = {
    "admin": {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    },
    "employees": [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Design Login Page",
            "taskDescription": "Create a responsive UI for the login page",
            "taskDate": "2025-03-04",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Fix Navbar Bug",
            "taskDescription": "Resolve issue where navbar overlaps on small screens",
            "taskDate": "2025-03-05",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Optimize Images",
            "taskDescription": "Reduce image sizes to improve page load speed",
            "taskDate": "2025-03-06",
            "category": "Performance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Write API Documentation",
            "taskDescription": "Document the new authentication API endpoints",
            "taskDate": "2025-03-04",
            "category": "Documentation",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Create Database Schema",
            "taskDescription": "Design a relational schema for user management",
            "taskDate": "2025-03-05",
            "category": "Database",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Code Review",
            "taskDescription": "Review recent PRs from frontend team",
            "taskDate": "2025-03-06",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Fix Authentication Bug",
            "taskDescription": "Resolve issue where users stay logged in after logout",
            "taskDate": "2025-03-07",
            "category": "Backend",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Create Landing Page",
            "taskDescription": "Design and develop a modern landing page",
            "taskDate": "2025-03-04",
            "category": "Design",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Write Unit Tests",
            "taskDescription": "Implement Jest tests for key components",
            "taskDate": "2025-03-05",
            "category": "Testing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Fix Responsive Issues",
            "taskDescription": "Adjust CSS for better mobile support",
            "taskDate": "2025-03-06",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Implement Dark Mode",
            "taskDescription": "Add a toggle switch for dark mode",
            "taskDate": "2025-03-04",
            "category": "UI/UX",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Optimize SQL Queries",
            "taskDescription": "Improve database performance by indexing",
            "taskDate": "2025-03-05",
            "category": "Database",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Build Notification System",
            "taskDescription": "Implement a real-time notification system",
            "taskDate": "2025-03-06",
            "category": "Backend",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Fix Broken Links",
            "taskDescription": "Check and update all broken links",
            "taskDate": "2025-03-07",
            "category": "SEO",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "taskTitle": "Create Onboarding Guide",
            "taskDescription": "Write an onboarding document for new employees",
            "taskDate": "2025-03-04",
            "category": "HR",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Update Security Policy",
            "taskDescription": "Revise security guidelines based on new compliance",
            "taskDate": "2025-03-05",
            "category": "Security",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Fix CORS Issue",
            "taskDescription": "Resolve cross-origin requests not working",
            "taskDate": "2025-03-06",
            "category": "Backend",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Improve API Performance",
            "taskDescription": "Optimize response times for key API endpoints",
            "taskDate": "2025-03-07",
            "category": "Performance",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          }
        ]
      }
    ]
  }
  

 const admin =  {
            "id": 1,
            "email": "admin@example.com",
            "password": "123"
        } 
  

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}        
  
export const getLocalStorage = () =>{

}