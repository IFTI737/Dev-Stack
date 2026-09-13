# 🚀 Dev Stack

Dev Stack is a React-based website where users can explore different development technologies and build their own personal tech stack.

Users can browse technology details like category, difficulty, rating, and description — then add technologies to their stack, remove individual ones, or clear the whole stack at once.

🔗 **Live Site:** [dev-stack-by-ifti.netlify.app](https://dev-stack-by-ifti.netlify.app/)

---

## 🛠️ Technologies Used

| Tech | Purpose |
|------|---------|
| React.js | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| DaisyUI | UI components |
| React Toastify | Notifications |
| React Icons | Icons |
| Vite | Build tool |
| JSON | Data source |
| Netlify | Hosting/deployment |

---

## ✨ Features

### 1. 🔍 Explore Technologies
Browse a wide range of technologies such as React, Vue.js, Node.js, PostgreSQL, Docker, Git, and more. Each technology card shows:
- Icon
- Name
- Category
- Description
- Difficulty
- Rating
- Badge

### 2. 🧩 Build Your Own Stack
Add technologies to your personal stack, and:
- See the total selected technology count
- Remove a single technology
- Remove all technologies at once
- See which technologies are already selected
- Get a warning if you try to add the same technology twice

### 3. 📱 Responsive Design
Works smoothly across desktop, tablet, and mobile:
- 3 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Fully responsive navbar and footer

---

## 📁 Project Structure

```text
Dev-Stack/
│
├── public/
│   ├── data.json
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Technologie/
│   │   │   ├── Technologies.tsx
│   │   │   ├── AvailableTech.tsx
│   │   │   ├── TechnologieCard.tsx
│   │   │   ├── MyStack.tsx
│   │   │   └── StackCard.tsx
│   │   │
│   │   ├── Hero.tsx
│   │   ├── Nav.tsx
│   │   └── Footer.tsx
│   │
│   ├── types/
│   │   └── Technologies.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?
JSX is a way to write HTML-like code inside JavaScript or TypeScript. React uses it because it makes writing and understanding the UI much easier.

**Example from this project:**
```tsx
<h2>Explore the Technologies</h2>
```
```tsx
<button>Add to Stack</button>
```

---

### 2. What is the difference between props and state?
Props are data passed from a parent component to a child component. State is data that a component manages and can change on its own.

**Example from this project:**
```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```
`selectedTechnologies` is state, and it gets passed down to child components as props.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` lets a component store and update data that can change over time.

**Example from this project:**
```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```
It's used to track the technologies the user has selected, and also to control the mobile navbar menu.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` normally runs code after a component renders, and it's commonly used for things like fetching data. However, I did **not use `useEffect`** in this project.

Instead, I loaded the JSON data using `fetch()` combined with React's `use()` and `Suspense`.

**Example from this project:**
```tsx
const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};
```

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
The `key` prop helps React identify which item in a list is which, so it can correctly update, add, or remove items without re-rendering everything.

**Example from this project:**
```tsx
{technologies.map((technology: ITechnology, ind: number) => {
  return (
    <TechnologieCard
      key={ind}
      technology={technology}
    />
  );
})}
```
Here, `.map()` loops through all the technologies and renders a `TechnologieCard` for each one.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition.

**Example from this project (empty stack message):**
```tsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* selected technologies */}
  </div>
)}
```
If no technologies are selected, the "Your stack is empty" message is shown instead of the list.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can send data back by calling a function that the parent passed down to it.

**Example from this project:**

In `Technologies.tsx`, the parent holds the state:
```tsx
const [selectedTechnologies, setSelectedTechnologies] =
  useState<ITechnology[]>([]);
```

It passes the state and setter function down to `AvailableTech`:
```tsx
<AvailableTech
  technologies={technologies}
  selectedTechnologies={selectedTechnologies}
  setSelectedTechnologies={setSelectedTechnologies}
/>
```

Then the child component can update it directly:
```tsx
setSelectedTechnologies([
  ...selectedTechnologies,
  technology,
]);
```
This updates the state in the parent, and React re-renders the UI with the new data.

---

## 👤 Author

**Iftekhar Bin Shoib**
CSE Student | Full-Stack Developer | AI/ML Enthusiast

- GitHub: [@IFTI737](https://github.com/IFTI737)
- Live Project: [dev-stack-by-ifti.netlify.app](https://dev-stack-by-ifti.netlify.app/)
