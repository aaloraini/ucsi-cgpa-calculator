# UCSI University CGPA Calculator

A lightweight, browser-based CGPA (Cumulative Grade Point Average) calculator designed specifically for UCSI University students with the official university branding and custom grading scale.

## Features

✨ **Custom Grading Scale**
- A+ = 4.00
- A = 3.75
- A- = 3.50
- B+ = 3.33
- B = 3.00
- B- = 2.75
- C+ = 2.50
- C = 2.00
- D = 1.00
- F = 0.00

📊 **Semester-wise Tracking**
- Add unlimited semesters
- Track individual semester GPAs
- Calculate cumulative CGPA across all semesters

📝 **Course Management**
- Add/remove courses dynamically
- Input course name, grade, and credit hours
- Variable credit hours per course

📈 **Real-time Statistics**
- Current cumulative CGPA
- Total semesters
- Total courses
- Total credits completed
- Grade classification (Excellent, Good, etc.)

## 🌐 Live Demo

**Access the calculator here:** `https://YOUR-USERNAME.github.io/ucsi-cgpa-calculator/`

*(Link will be active after GitHub Pages deployment)*

---

## How to Use

### Getting Started

1. **Open the Calculator**
   - Visit the live demo link above, or
   - Download and open `index.html` in your web browser
   - No installation or server required

2. **Add a Semester**
   - Click the "Add Semester" button
   - Each semester is numbered automatically

3. **Add Courses**
   - Click "Add Course" within a semester
   - Fill in:
     - Course Name (e.g., "Mathematics 101")
     - Grade (select from dropdown)
     - Credits (e.g., 3, 4, 3.5)

4. **View Results**
   - CGPA updates automatically as you input data
   - Each semester shows its individual GPA
   - Statistics panel shows totals

### Example Data

Click "Load Example" to see the calculator in action with sample data.

### Managing Data

- **Remove Course**: Click the ✕ button on any course row
- **Remove Semester**: Click "Remove Semester" to delete an entire semester
- **Clear All**: Click "Clear All" to start fresh (confirmation required)

## Calculation Formula

### Semester GPA
```
Semester GPA = Σ(Grade Points × Credits) ÷ Total Credits (per semester)
```

### Cumulative CGPA
```
Cumulative CGPA = Σ(All Grade Points × Credits) ÷ Total Credits (all semesters)
```

### Example Calculation

**Semester 1:**
- Course 1: A (3.75) × 3 credits = 11.25 grade points
- Course 2: B+ (3.33) × 4 credits = 13.32 grade points
- Course 3: A- (3.50) × 3 credits = 10.50 grade points
- **Semester 1 GPA** = 35.07 ÷ 10 = **3.51**

**Semester 2:**
- Course 4: A+ (4.00) × 3 credits = 12.00 grade points
- Course 5: B (3.00) × 4 credits = 12.00 grade points
- **Semester 2 GPA** = 24.00 ÷ 7 = **3.43**

**Cumulative CGPA** = (35.07 + 24.00) ÷ (10 + 7) = **3.48**

## Grade Classifications

- **3.75 - 4.00**: A / Excellent
- **3.50 - 3.74**: A- / Very Good
- **3.33 - 3.49**: B+ / Good
- **3.00 - 3.32**: B / Above Average
- **2.75 - 2.99**: B- / Average
- **2.50 - 2.74**: C+ / Below Average
- **2.00 - 2.49**: C / Pass
- **1.00 - 1.99**: D / Poor
- **0.00 - 0.99**: F / Fail

## 🎨 UCSI University Branding

This calculator features the official UCSI University brand colors:
- **Red (#CC0000)** - Represents audacity
- **Blue (#003DA5)** - Represents tenacity
- **Yellow (#FFD700)** - Represents excellence
- **White** - Represents integrity

The design incorporates these colors throughout the interface, creating a cohesive and professional look that reflects UCSI's identity.

---

## 🚀 Deployment (GitHub Pages)

This project is configured for easy deployment on GitHub Pages:

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: UCSI CGPA Calculator"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ucsi-cgpa-calculator.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as source
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/ucsi-cgpa-calculator/`

---

## Technical Details

**Technology Stack:**
- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (no dependencies)

**Browser Compatibility:**
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

**Features:**
- Fully responsive design
- Works offline
- No data sent to servers
- Lightweight (~20KB total)
- UCSI University branded interface

## File Structure

```
windsurf-project/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling
├── script.js           # Calculator logic
└── README.md           # This file
```

## Tips

1. **Accurate Input**: Double-check your grades and credits for accuracy
2. **Save Your Work**: Take a screenshot or note down your CGPA regularly
3. **Plan Ahead**: Use this to track your academic progress throughout your degree
4. **Mobile Use**: The calculator is fully responsive and works on phones/tablets

## Future Enhancements (v2)

Potential features for future versions:
- Local storage to save your data
- Export/import functionality
- Grade distribution charts
- Target GPA calculator
- Semester comparison tools

## License

Free to use for personal and educational purposes.

---

**Made with ❤️ for university students**
