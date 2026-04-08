# 📝 Advanced Todo Management System
[**✨ Live Demo**](https://Olena7202.github.io/todo-app-react/)


![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Bulma](https://img.shields.io/badge/bulma-00D1B2?style=for-the-badge&logo=bulma&logoColor=white)

A high-performance Todo application that bridges the gap between simple task tracking and enterprise-grade frontend architecture. Built with **React 18** and **TypeScript**, it features a fully integrated **REST API** backend and a focus on **Optimistic UI** patterns.

---

## 🌟 Key Features

### ⚡ Performance & UX
* **Optimistic Updates**: UI updates instantly while API requests process in the background.
* **Granular Loading**: Individual loaders for every task item to prevent "UI jumping."
* **Smart Error Handling**: Global notification system with auto-dismissal logic.

### 🛠 Core Functionality
* **Full CRUD**: Create, Read, Update, and Delete tasks seamlessly.
* **Inline Editing**: Double-click to edit titles with auto-focus and `ESC`/`Enter` support.
* **Bulk Operations**: "Toggle All" status switch and "Clear Completed" functionality.
* **Persistent Filtering**: Filter by `All`, `Active`, or `Completed` states.

---

## 🛠 Technical Deep Dive

### **Architecture**
The project follows a **modular component-based architecture**:
* **`App.tsx`**: The Single Source of Truth for state and business logic.
* **`TodoItem.tsx`**: A complex sub-component managing its own editing state, focus refs, and local loaders.
* **`api/` layer**: Decouples network logic from UI components using a custom fetch client.

### **Key Implementations**
* **DOM Management**: Utilizing `useRef` for imperative focus control during user interactions.
* **Type Safety**: 100% TypeScript coverage for props, state, and API models.
* **Async Logic**: Efficient use of `Promise.all` for handling multiple concurrent API deletions.
* **Clean Code**: Strictly enforced **ESLint** and **Prettier** configurations to ensure industry-standard code quality.

---

## 💻 Tech Stack

| Technology | Usage |
| :--- | :--- |
| **React 18** | Functional components, Hooks (State, Effect, Ref, Memo) |
| **TypeScript** | Static typing and interface definitions |
| **SCSS** | Modular styling with pre-processor capabilities |
| **Bulma** | Modern CSS framework for layout and UI elements |
| **Axios/Fetch** | Custom service layer for REST API communication |

---

## 🚀 Getting Started

1.  **Clone & Navigate**
    ```bash
    git clone (https://github.com/Olena7202/todo-app-react.git)
    cd todo-app-react
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Launch Development Server**
    ```bash
    npm start
    ```

---

## 🛡️ Configuration
To use your own data, update the `USER_ID` in `src/api/todos.ts`:
```typescript
export const USER_ID = 12345;
