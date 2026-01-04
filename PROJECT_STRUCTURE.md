# Ocean of Bhagavad Gita - Project Structure

## Overview
This document outlines the enterprise-level folder structure and naming conventions used in the Ocean of Bhagavad Gita project.

## Directory Structure

```
OceanOfGita/
├── assets/
│   ├── css/
│   │   ├── styles.css                    # Bootstrap core styles
│   │   └── ocean-of-gita.css            # Custom project styles
│   ├── js/
│   │   └── scripts.js                    # Core theme JavaScript
│   └── images/
│       ├── favicon.ico                   # Website favicon
│       ├── backgrounds/
│       │   ├── masthead-bg.png          # Hero section background
│       │   └── callout-bg.jpg           # Call-to-action section background
│       └── teachings/
│           ├── little-hearts.jpg         # Gita for Little Hearts card image
│           ├── profound-teachings.jpg    # Profound Gita Teachings card image
│           ├── popular-teachings.jpg     # Popular Teachings card image
│           └── latest-insights.jpg       # Latest Insights card image
├── index.html                            # Main landing page
└── PROJECT_STRUCTURE.md                  # This file

```

## Naming Conventions

### Folders
- **kebab-case** for all folder names (e.g., `teachings`, `backgrounds`)
- Logical grouping by purpose (e.g., CSS files together, images by category)

### Files
- **kebab-case** for all file names (e.g., `ocean-of-gita.css`, `little-hearts.jpg`)
- Descriptive names that reflect content (e.g., `profound-teachings.jpg` instead of `portfolio-2.jpg`)
- Consistent extensions (.jpg for photos, .png for graphics, .css for styles)

### CSS Classes
- Following Bootstrap conventions
- Semantic naming (e.g., `.portfolio-item`, `.caption-content`)

## Design Principles Applied

### 1. Separation of Concerns (SoC)
- CSS separated from HTML (no inline styles)
- Custom styles in separate file (`ocean-of-gita.css`)
- Core Bootstrap styles remain untouched

### 2. Single Responsibility Principle (SRP)
- Each folder has a single, clear purpose
- Images categorized by usage (backgrounds vs. teachings)
- CSS files separated by origin (core vs. custom)

### 3. Don't Repeat Yourself (DRY)
- Reusable CSS classes instead of inline styles
- Consistent naming patterns across similar elements

### 4. Open/Closed Principle (OCP)
- Core Bootstrap CSS remains unchanged
- Extensions added through separate custom CSS file
- Easy to modify custom styles without touching core

### 5. Maintainability
- Clear folder hierarchy makes navigation intuitive
- Descriptive file names eliminate guesswork
- Documentation provides structure overview

## Asset Path References

### In HTML (index.html)
```html
<!-- CSS -->
<link href="assets/css/styles.css" rel="stylesheet" />
<link href="assets/css/ocean-of-gita.css" rel="stylesheet" />

<!-- JavaScript -->
<script src="assets/js/scripts.js"></script>

<!-- Images -->
<img src="assets/images/teachings/little-hearts.jpg" alt="Gita for Little Hearts" />
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico" />
```

### In CSS (styles.css)
```css
/* Background images use relative paths from CSS file location */
background: url("../images/backgrounds/masthead-bg.png");
background: url("../images/backgrounds/callout-bg.jpg");
```

## Benefits of This Structure

1. **Scalability**: Easy to add new teaching categories or sections
2. **Clarity**: Any developer can understand the structure immediately
3. **Maintainability**: Changes to one area don't affect others
4. **Professional**: Follows industry best practices
5. **Version Control**: Clean structure makes git diffs more meaningful
6. **Performance**: Proper organization allows for better caching strategies

## Future Enhancements

Consider adding these folders as the project grows:
- `assets/fonts/` - Custom font files
- `assets/icons/` - Icon assets separate from images
- `assets/videos/` - Video content if needed
- `pages/` - Additional HTML pages
- `components/` - Reusable HTML components
- `data/` - JSON or XML data files

## Version History

- **v1.0.0** (2026-01-03): Initial enterprise-level restructure
  - Migrated from generic portfolio naming to Gita-specific names
  - Moved inline styles to separate CSS file
  - Reorganized assets with logical folder hierarchy
  - Applied SOLID principles to project structure
