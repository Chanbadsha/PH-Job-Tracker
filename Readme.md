## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Ans:**  
`getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll` are all DOM methods used to select elements from a webpage. However, they differ in return type and flexibility.

### getElementById

- Selects a single element based on its unique id attribute.
- Returns one element .

### getElementsByClassName

- Selects all elements that share a specific class name.
- Returns an **HTMLCollection** (a live collection).

### querySelector

- Returns only the first element that matches a given CSS selector.
- More flexible because it supports any valid CSS selector.

### querySelectorAll

- Returns all elements that match a given CSS selector.
- Returns a **NodeList** (a static collection).

## 2. How do you create and insert a new element into the DOM?

**Ans:**  
To create and insert a new element into the DOM, you use document.createElement() to create the element and then use methods like appendChild() or append() to add it to the page.

### Steps:

1. Create a new element using createElement().
2. Add content or attributes to the element.
3. Insert it into the DOM using appendChild(), append(), or similar methods.

## 3. What is Event Bubbling? And how does it work?

**Ans:**  
Event Bubbling is a concept in JavaScript where an event starts from the target element and then bubbles up to its parent elements in the DOM hierarchy.

### How It Works:

When an event happens on a child element:

1. The event first runs on the target element.
2. Then it moves up to the parent element.
3. Then to the grandparent element.
4. It continues until it reaches the document object.

## 4. What is Event Delegation in JavaScript? Why is it useful?

**Ans:**  
Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements. The parent handles events for its children using event bubbling.

### How It Works:

Instead of adding a click event to each child element, you add one event listener to the parent and detect which child triggered the event using event.target.

## 5. What is the difference between preventDefault() and stopPropagation() methods?

**Ans:**  
preventDefault() and stopPropagation() are both event methods in JavaScript, but they serve different purposes.

### preventDefault()

- Prevents the browser’s default action for an event.
- It does NOT stop the event from bubbling.

### stopPropagation()

- Stops the event from bubbling.

- It does NOT prevent the browser’s default behavior.
