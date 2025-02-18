### **📜 `README.md`**
```md
# Task Manager (TypeScript + React)

A simple and visually appealing Task Manager built with **React (Vite) + TypeScript**. This app allows users to add, complete, and delete tasks, along with dynamically fetching motivational quotes.

## Features
✔️ **Add, complete, and delete tasks**  
✔️ **Filter tasks (All, Completed, Not Completed)**  
✔️ **Motivational quote fetcher**  
✔️ **Beautiful responsive UI**  

## Technologies Used
- **React + TypeScript** (with Vite)
- **CSS (Custom Styling + Flexbox & Grid)**
- **Local Storage** (to persist tasks)
- **API Integration** (fetching motivational quotes)

---

## 📦 Installation & Setup
### **1️⃣ Clone the repository**
```sh
git clone https://github.com/your-repo/task-manager-ts.git
cd task-manager-ts
```
### **2️⃣ Install dependencies**
```sh
npm install
```
### **3️⃣ Start the development server**
```sh
npm run dev
```

---

## 🚀 How to Use
1️⃣ **Enter a task title** and an optional **task description** in the input field.  
2️⃣ **Click "Add Task"** to add it to the list.  
3️⃣ Use the **filter buttons** to show **All / Completed / Not Completed** tasks.  
4️⃣ Click **"Mark as Done"** to complete a task.  
5️⃣ Click **"Delete"** to remove a task.  
6️⃣ **A new motivational quote** will load automatically each time you open the app.

---

## 🌐 API Integration
This app fetches motivational quotes from:  
**[ZenQuotes API](https://zenquotes.io/)**

### **Error Handling**
If the API request fails (e.g., due to no internet connection or API downtime), the app will:
1️⃣ Display an **error message** in place of the quote.  
2️⃣ **Log the error** to the console for debugging.  
3️⃣ Ensure that the **UI remains intact** without breaking.

---

## 📌 Project Structure
```
src/
│── components/         # UI Components (TaskForm, TaskList, FilterButtons, etc.)
│── interfaces/         # TypeScript interfaces (Task, Quote)
│── styles/             # CSS files (App.css)
│── App.tsx             # Main App component
│── main.tsx            # React entry point
│── README.md           # Documentation (this file)
```

---

## 🎯 Next Steps / Future Enhancements
✅ Add **Dark Mode** for better user experience.  
✅ Implement **drag & drop reordering** for tasks.  
✅ Store tasks in **Firebase or a database** instead of Local Storage.  

---

## 📄 License
This project is **MIT licensed**. Feel free to use and modify it!

---

🚀 **Enjoy your Task Manager!**
