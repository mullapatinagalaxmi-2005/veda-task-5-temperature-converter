# Temperature Converter
## Veda Technology Internship — Web Development Task 5 (Level 1 · Day 5)

A responsive temperature converter that converts between Celsius, Fahrenheit, and Kelvin using HTML5, CSS3, and JavaScript.

### Features
- Celsius, Fahrenheit, and Kelvin conversions
- Live updates when the input or units change
- Input validation and helpful error messages
- Rejects values below absolute zero
- Reset button and responsive layout
- Accessible labels, focus indicators, and live result announcements

### Technologies
HTML5 · CSS3 · JavaScript · GitHub

### Files
- `index.html` — webpage structure
- `style.css` — visual styling and responsive layout
- `script.js` — conversion functions, validation, and DOM updates

### Run locally
Keep all three files in the same folder and open `index.html` in a modern browser. No dependencies or build tools are needed.

### Formulas
- °C to °F: `(C × 9/5) + 32`
- °F to °C: `(F − 32) × 5/9`
- °C to K: `C + 273.15`
- K to °C: `K − 273.15`

### Testing checklist
1. `0 °C` to Fahrenheit should give `32 °F`.
2. `100 °C` to Fahrenheit should give `212 °F`.
3. `273.15 K` to Celsius should give `0 °C`.
4. Empty input should show a validation message.
5. Values below absolute zero should be rejected.
6. Unit changes should update the result.
7. Reset should clear the form.

### Author
Nagalaxmi

Created for the Veda Technology Web Development Internship.
