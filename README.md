# UCSI University CGPA Calculator

A lightweight, browser-based CGPA (Cumulative Grade Point Average) calculator designed specifically for UCSI University students with the official university branding and custom grading scale.

## � Quick Start

**Live Calculator:** [https://aaloraini.github.io/ucsi-cgpa-calculator/](https://aaloraini.github.io/ucsi-cgpa-calculator/)

**GitHub Repository:** [https://github.com/aaloraini/ucsi-cgpa-calculator](https://github.com/aaloraini/ucsi-cgpa-calculator)

## �📚 Official Grading System

**Source:** UCSI University Students Handbook for Undergraduate Programmes (April 2025)  
**Reference:** Table 13.3: Grade Legend and GPA (January 2024 onwards)

| Grade | Marks (%) | GPA  | Level of Achievement |
|-------|-----------|------|---------------------|
| A+    | 90-100    | 4.00 | Excellent           |
| A     | 80-89     | 3.75 | High Distinction    |
| A-    | 75-79     | 3.67 | Distinction         |
| B+    | 70-74     | 3.33 | Very Good           |
| B     | 60-69     | 3.00 | Good                |
| C+    | 55-59     | 2.50 | Merit               |
| C     | 50-54     | 2.00 | Satisfactory        |
| C-    | 45-49     | 1.50 | Conditional Pass    |
| D     | 40-44     | 1.00 | Conditional Pass    |
| F     | 0-39      | 0.00 | Fail                |

> ⚠️ **Important:** This calculator uses the official UCSI University grading system as specified in the Students Handbook for Undergraduate Programmes (April 2025). Always verify your official CGPA with the university registrar.

---

## Features

📊 **Semester-wise Tracking**
- Add unlimited semesters
- Track individual semester GPAs
- Calculate cumulative CGPA across all semesters

📝 **Course Management**
- Add/remove courses dynamically
- Input course name, grade, and credit hours
- Variable credit hours per course
- All 10 official UCSI letter grades supported (A+ to F)

📈 **Real-time Statistics**
- Current cumulative CGPA
- Total semesters
- Total courses
- Total credits completed
- Official UCSI grade legend with achievement levels

## 🌐 Live Demo

**Access the calculator here:** **[https://aaloraini.github.io/ucsi-cgpa-calculator/](https://aaloraini.github.io/ucsi-cgpa-calculator/)**

✅ **Now Live!** Share this link with your friends!

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
     - Course Name (e.g., "Digital Electronics I")
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

## CGPA Interpretation

Based on the official UCSI grading system:

- **3.67 - 4.00**: Distinction to Excellent
- **3.00 - 3.66**: Good to Very Good
- **2.00 - 2.99**: Satisfactory to Merit
- **1.00 - 1.99**: Conditional Pass
- **0.00 - 0.99**: Fail

> **Note:** Individual course grades and their achievement levels are defined in Table 13.3 of the Students Handbook.

## 🎨 UCSI University Branding

This calculator features the official UCSI University brand colors:
- **Red (#CC0000)** - Represents audacity
- **Blue (#003DA5)** - Represents tenacity
- **Yellow (#FFD700)** - Represents excellence
- **White** - Represents integrity

The design incorporates these colors throughout the interface, creating a cohesive and professional look that reflects UCSI's identity.

## ⚠️ Disclaimer

This is an **unofficial tool** created for UCSI University students to estimate their CGPA. While it uses the official grading system from the Students Handbook for Undergraduate Programmes (April 2025), it should be used for reference purposes only. 

**Always verify your official CGPA with:**
- UCSI University Registrar's Office
- Your official academic transcript
- UCSI Student Portal

The creators of this tool are not responsible for any discrepancies between calculated and official CGPA values.

---

## 🚀 Deployment

This project is deployed on GitHub Pages and is currently live!

**Repository:** [https://github.com/aaloraini/ucsi-cgpa-calculator](https://github.com/aaloraini/ucsi-cgpa-calculator)  
**Live Site:** [https://aaloraini.github.io/ucsi-cgpa-calculator/](https://aaloraini.github.io/ucsi-cgpa-calculator/)

### Making Updates

To update the live site:

1. **Make your changes** to the files
2. **Commit changes:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. **Push to GitHub:**
   ```bash
   git push origin main
   ```
4. **Wait 1-2 minutes** for GitHub Pages to rebuild

The live site will automatically update!

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
- Official grading system from Students Handbook (April 2025)

## File Structure

```
windsurf-project/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling with UCSI branding
├── script.js           # Calculator logic with official grading scale
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## References

- **UCSI University Students Handbook for Undergraduate Programmes (April 2025)**
  - Table 13.3: Grade Legend and GPA (January 2024 onwards)
- **UCSI University Official Website:** [www.ucsiuniversity.edu.my](https://www.ucsiuniversity.edu.my)

## Tips

1. **Accurate Input**: Double-check your grades and credits for accuracy
2. **Save Your Work**: Take a screenshot or note down your CGPA regularly
3. **Plan Ahead**: Use this to track your academic progress throughout your degree
4. **Mobile Use**: The calculator is fully responsive and works on phones/tablets

## Future Enhancements (v2)

Potential features for future versions:
- Local storage to save calculator state
- Export data as JSON
- Import previously saved data
- Clear all data option with confirmation

**Additional Utilities**
- Print-friendly view
- PDF export of transcript summary
- Semester comparison tool

---

## 📄 License & Copyright

**Copyright © 2026 Abdulhakim Aloraini**

This project is free to use for personal and educational purposes by UCSI University students and the academic community.

### Author
**Abdulhakim Aloraini**  
Created for UCSI University students

---

**Made with ❤️ for UCSI University students**
