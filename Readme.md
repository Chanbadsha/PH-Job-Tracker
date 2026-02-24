## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans:**  
`getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll` are all DOM methods used to select elements from a webpage. However, they differ in return type and flexibility.

### getElementById

- Selects a single element based on its unique `id` attribute.
- Returns one element (or `null` if not found).

### getElementsByClassName

- Selects all elements that share a specific class name.
- Returns an **HTMLCollection** (a live collection).

### querySelector

- Returns only the first element that matches a given CSS selector.
- More flexible because it supports any valid CSS selector.

### querySelectorAll

- Returns all elements that match a given CSS selector.
- Returns a **NodeList** (a static collection).
