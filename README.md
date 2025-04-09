# 📁 File Handling CLI App (Node.js)

This is a basic **Command Line Interface (CLI)** application built with **Node.js** to demonstrate file handling operations using the built-in `fs` (File System) module. It allows you to read from, write to, and append text to a file named `name.txt`, directly from the terminal.

---

## 🔧 Features

- 📄 Read content from `name.txt`
- ✍️ Write new content to `name.txt` (overwrites existing data)
- ➕ Append content to `name.txt` (preserves existing data)
- 🧠 Simple text-based user menu using `readline` module
- ✅ Beginner-friendly code with helpful console logs

---

## 🚀 How to Run

1. **Install Node.js** (if not already installed):
   [https://nodejs.org](https://nodejs.org)

2. **Download or clone this repository**

3. **Navigate to the project folder and run:**
   ```bash
   node index.js
.

📦 Dependencies
fs (File System) (built-in)

readline (built-in)

Note: While your package.json includes Express, this particular script (index.js) doesn't use it.

🛠️ Tech Stack
Node.js (CommonJS)

JavaScript (Vanilla)

Terminal / Command Line

project-folder/
├── index.js         # Main CLI app for file operations
├── name.txt         # Text file used for read/write/append (generated if not exists)
├── package.json     # Project metadata and dependencies
✅ Ideal For

Practicing Node.js basics

Learning file handling (read/write/append)

Understanding terminal input/output with readline

Let me know if you want this saved as a `README.md` file, or if you want to also correct the `"start": "node app.js"` line in your `package.json` to `"start": "node index.js"` (since you're using `index.js`).
