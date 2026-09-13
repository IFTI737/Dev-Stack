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
JSX lets me write HTML-looking markup directly inside my TypeScript files, instead of building the UI with plain JavaScript function calls like `React.createElement()`. React uses it because it makes components much easier to read — I can see the actual layout of the page right next to the logic that drives it.

**Example from this project** — in `TechnologieCard.tsx`, the whole card (image, name, description, stats, button) is written as regular-looking markup with JS expressions mixed in using `{}`:
```tsx
<div className="flex items-start justify-between">
  <img src={technology.icon} alt={technology.name} className="h-10 w-10 object-contain" />
  <span className="rounded-full bg-pink-50 px-3 py-1 text-xs text-pink-500">
    {technology.badge}
  </span>
</div>

<h2 className="mt-4 text-lg font-semibold text-gray-900">
  {technology.name}
</h2>
```
Without JSX, this same card would have to be written as nested `createElement()` calls, which would be much harder to read.

---

### 2. What is the difference between props and state?
**Props** are values passed *into* a component from its parent — the component receiving them can't change them directly. **State** is data a component owns and manages itself, and it can change over time (usually because of user interaction).

**Example from this project** — `TechnologieCard.tsx` receives everything it needs as props:
```tsx
interface ITechnologyCardProps {
  technology: ITechnology;
  selectedTechnologies: ITechnology[];
  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologieCard = ({
  technology,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyCardProps) => { ... }
```
`technology` and `selectedTechnologies` are just data being read — the card doesn't own them. The actual **state** lives one level up, in `Technologies.tsx`:
```tsx
const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);
```
`Technologies.tsx` owns this state and hands it down as props to `AvailableTech` and `MyStack`, which hand it further down to `TechnologieCard` and `StackCard`.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` gives a component a piece of data it can remember between renders, plus a function to update it. Whenever that function is called, React re-renders the component with the new value.

**Example from this project** — in `Technologies.tsx`, `useState` tracks which technologies the user has picked so far:
```tsx
const [
  selectedTechnologies,
  setSelectedTechnologies,
] = useState<ITechnology[]>([]);
```
This starts as an empty array. Every time a card's "Add to Stack" button is clicked, `setSelectedTechnologies` is called (down in `TechnologieCard.tsx`) with an updated array, and the whole stack UI (the count, the list, the empty-state message) automatically re-renders to match.

I also used `useState` in `App.tsx`, but in a slightly different way — to hold a `Promise` instead of a plain value:
```tsx
const [technologiesPromise] = useState(() => technologiesFetch());
```
Passing a function to `useState` here means `technologiesFetch()` only runs **once**, when the component first mounts, instead of on every re-render.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` normally runs some code *after* a component renders — commonly used for side effects like fetching data, since you don't want data-fetching to happen during the render itself.

I actually **didn't use `useEffect`** in this project. Instead, I used React's newer `use()` hook together with `Suspense`, which lets a component "wait" for a promise to resolve without manually managing loading state.

**Example from this project** — `App.tsx` creates the fetch promise once and wraps the consuming component in `Suspense`:
```tsx
const technologiesFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState(() => technologiesFetch());

  return (
    <Suspense fallback={<h2>Loading.......</h2>}>
      <Technologies technologiesPromise={technologiesPromise} />
    </Suspense>
  );
}
```
Then inside `Technologies.tsx`, the `use()` hook actually "unwraps" that promise:
```tsx
const technologies = use(technologiesPromise);
```
While the promise is still pending, React shows the `fallback` (`Loading.......`) automatically — so I get the same result `useEffect` + loading state would normally give me, but with less boilerplate.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses `key` behind the scenes to match each item in a list to the same DOM element across re-renders. Without a stable key, React can lose track of which item is which — this can cause wrong data to show up, broken animations, or components not updating correctly when the list changes.

**Example from this project** — both `AvailableTech.tsx` and `MyStack.tsx` render lists with `.map()`:
```tsx
{technologies.map((technology: ITechnology, ind: number) => {
  return (
    <TechnologieCard
      key={ind}
      technology={technology}
      selectedTechnologies={selectedTechnologies}
      setSelectedTechnologies={setSelectedTechnologies}
    />
  );
})}
```
I'm currently using the array index (`ind`) as the key, which technically works but isn't ideal — if the list order ever changes, index-based keys can get mismatched. Since every technology already has a unique `id` (from `ITechnology`), a better version would be:
```tsx
<TechnologieCard
  key={technology.id}
  technology={technology}
  ...
/>
```
This way, each card's key is tied to the actual technology, not its position in the array — the safer approach for `.map()` lists.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing.

**Example from this project** — in `MyStack.tsx`, I check whether any technologies have been selected yet, and show either an empty-state message or the actual list:
```tsx
{selectedTechnologies.length === 0 ? (
  <div className="mt-7 flex h-[120px] items-center justify-center rounded-xl border border-dashed border-gray-200">
    <div className="text-center">
      <p className="text-sm text-gray-400">Your stack is empty.</p>
      <p className="mt-1 text-xs text-gray-300">
        Add technologies to build your stack.
      </p>
    </div>
  </div>
) : (
  <div className="mt-6 flex flex-col gap-3">
    {selectedTechnologies.map((technology, ind) => (
      <StackCard key={ind} technology={technology} ... />
    ))}
  </div>
)}
```
There's also a second, simpler case of conditional rendering right on the "Add to Stack" button in `TechnologieCard.tsx`, where the button's text and style change based on `isSelected`:
```tsx
<button disabled={isSelected} className={isSelected ? "cursor-not-allowed bg-pink-200" : "brand-gradient"}>
  {isSelected ? "✓ Added to Stack" : "Add to Stack"}
</button>
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down through props. To send something back **up**, the parent also passes down a function as a prop — the child calls that function, and since the function was defined in the parent (often a state setter), calling it updates the parent's state, which then flows back down to every child that uses it.

**Example from this project — the full chain:**

`Technologies.tsx` (the parent) owns the state and passes both the data and the setter down to `AvailableTech`:
```tsx
const [selectedTechnologies, setSelectedTechnologies] = useState<ITechnology[]>([]);

<AvailableTech
  technologies={technologies}
  selectedTechnologies={selectedTechnologies}
  setSelectedTechnologies={setSelectedTechnologies}
/>
```

`AvailableTech.tsx` just forwards these further down to each `TechnologieCard`:
```tsx
<TechnologieCard
  key={ind}
  technology={technology}
  selectedTechnologies={selectedTechnologies}
  setSelectedTechnologies={setSelectedTechnologies}
/>
```

Finally, `TechnologieCard.tsx` (the child, several levels deep) calls `setSelectedTechnologies` when the button is clicked — this is the child "sending data back up":
```tsx
const handleAddToStack = () => {
  setSelectedTechnologies([...selectedTechnologies, technology]);
  toast.success(`${technology.name} added to your stack`, { ... });
};
```
Because `setSelectedTechnologies` actually belongs to state defined in `Technologies.tsx`, calling it there updates the state in the parent — and React automatically re-renders `Technologies.tsx`, `MyStack.tsx`, and every other component that depends on `selectedTechnologies`.

---

## 👤 Author

**Iftekhar Bin Shoib**
CSE Student | Full-Stack Developer | AI/ML Enthusiast

- GitHub: [@IFTI737](https://github.com/IFTI737)
- Live Project: [dev-stack-by-ifti.netlify.app](https://dev-stack-by-ifti.netlify.app/)