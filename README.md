# 🌡️ Temperature Converter

## Veda Technology Internship — Task 5 (Level 1 · Day 5)

A responsive web application that converts temperatures between **Celsius, Fahrenheit, and Kelvin**, built using HTML5, CSS3, and JavaScript.

## ✨ Features

- 🌡️ Convert between Celsius (°C), Fahrenheit (°F), and Kelvin (K).
- ⚡ Live conversion when the temperature or unit changes.
- ✅ Validate numeric input and display helpful error messages.
- 🧊 Prevent temperatures below absolute zero.
- 🔄 Reset button to clear the input and restore default units.
- 📱 Responsive design for desktop and mobile devices.
- ♿ Accessible form labels, keyboard focus indicators, and dynamic result announcements.

## 🛠️ Technologies Used

- **HTML5** — webpage structure and input fields.
- **CSS3** — styling and responsive layout.
- **JavaScript** — conversion formulas, event handling, validation, and DOM manipulation.
- **GitHub** — source-code hosting.
- **GitHub Pages** — website deployment.

## 📂 Project Structure

```text
veda-task-5-temperature-converter/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🧮 Conversion Formulas

| Conversion | Formula |
|---|---|
| Celsius to Fahrenheit | (°C × 9/5) + 32 |
| Fahrenheit to Celsius | (°F − 32) × 5/9 |
| Celsius to Kelvin | °C + 273.15 |
| Kelvin to Celsius | K − 273.15 |

The application converts through Celsius to support conversions between all three units.

## 🚀 How to Run

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in a modern web browser.
4. Enter a temperature and select the source and target units.
5. Click **Convert temperature** to view the result.

No additional dependencies or build tools are required.

## 🧪 Testing Checklist

- [ ] 0 °C converts to 32 °F.
- [ ] 100 °C converts to 212 °F.
- [ ] 32 °F converts to 0 °C.
- [ ] 273.15 K converts to 0 °C.
- [ ] Empty input displays a validation message.
- [ ] Temperatures below absolute zero are rejected.
- [ ] Changing units updates the result.
- [ ] Reset clears the input and restores default units.
- [ ] The page works on mobile and desktop screens.

## 🔗 Project Links

- **GitHub Repository:** https://github.com/mullapatinagalaxmi-2005/veda-task-5-temperature-converter
- **Live Demo:** https://mullapatinagalaxmi-2005.github.io/veda-task-5-temperature-converter/

*Note: The live demo link will work after GitHub Pages deployment is complete.*

## 🎯 Learning Outcomes

Through this project, I practiced:

- Writing semantic HTML and accessible forms.
- Styling responsive web pages with CSS.
- Creating reusable JavaScript functions.
- Using input, change, click, and keyboard events.
- Validating user input and updating the DOM dynamically.

## 👩‍💻 Author

**Nagalaxmi**

Developed as part of the **Veda Technology Web Development Internship — Task 5**.

## 🙌 Acknowledgement

Thanks to Veda Technology for providing this practical learning opportunity to improve my front-end web development skills.
