# Student Information Management System (MongoDB)

A simple student database built with MongoDB, a document-oriented NoSQL database. Each student is stored as one document that holds personal details, academic details, enrolled courses and address. The project walks through the full life cycle of data handling in the MongoDB Shell (`mongosh`).

## Features

- Collection creation with JSON schema validation (`year` between 1 and 4, `cgpa` between 0 and 10)
- Insert records with `insertMany`
- Read data using filters, projection, sorting and limit
- Update a single document, push to an array, and bulk update with `updateMany`
- Delete a record with `deleteOne`
- Unique index on `studentId`
- Nested field queries (`address.state`), array queries (`courses`) and `$or` conditions
- Aggregation pipeline for department-wise student count and average CGPA
- Validation test that rejects invalid data

## Tech Stack

| Component     | Details                   |
| ------------- | ------------------------- |
| Database      | MongoDB 7.0               |
| Interface     | MongoDB Shell (`mongosh`) |
| Database name | `studentDB`               |
| Collection    | `students`                |

## Document Structure

```js
{
  studentId: "S201",
  name: "Ishaan Malhotra",
  email: "ishaan@example.com",
  department: "CSE",
  year: 2,
  cgpa: 8.8,
  courses: ["DBMS", "OS"],
  address: { city: "Chandigarh", state: "Punjab" }
}
```

## Sample Data

| ID   | Name            | Dept | Year | CGPA | Courses        |
| ---- | --------------- | ---- | ---- | ---- | -------------- |
| S201 | Ishaan Malhotra | CSE  | 2    | 8.8  | DBMS, OS       |
| S202 | Ananya Kapoor   | ECE  | 3    | 9.3  | DSP, VLSI      |
| S203 | Vikram Joshi    | CSE  | 1    | 7.2  | C, Maths       |
| S204 | Sneha Reddy     | ME   | 4    | 8.5  | Thermodynamics |
| S205 | Arjun Nair      | IT   | 2    | 6.7  | DBMS, Networks |

## How to Run

1. Install MongoDB and `mongosh`, or use MongoDB Atlas.
2. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
3. Run the script:
   ```bash
   mongosh --file student_db_commands.js
   ```
   Or open `mongosh` and paste the commands one by one to see each result.

## Repository Contents

| File                                      | Description                                  |
| ----------------------------------------- | -------------------------------------------- |
| `student_db_commands.js`                  | Complete mongosh script                      |
| `Capstone_Report_MongoDB_Student_DB.docx` | Project report with screenshots of each step |

## Author

**Chirag Sharma**
MCA (AI & ML), KR Mangalam University
