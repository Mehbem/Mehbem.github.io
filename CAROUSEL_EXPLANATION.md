# Photo Carousel - How It Works

## Yes! The carousel automatically rotates through your photos! ✨

### Auto-Rotation Features:

**✅ Automatic Switching:** Photos fade smoothly between each other every **5 seconds**

**✅ Smooth Transitions:** Uses fade-in/fade-out effect (0.8 second transition)

**✅ Infinite Loop:** After the last photo, it goes back to the first

**✅ Manual Control:** Users can still click arrows or dots to manually browse

**✅ Auto-resume:** If someone manually changes photos, auto-rotation continues from there

---

## How the Carousel Works:

### 1. **Automatic Rotation**
```javascript
// Auto-advance every 5 seconds
setInterval(nextSlide, 5000);
```

This line in `script.js` makes it automatically move to the next photo every 5000 milliseconds (5 seconds).

### 2. **What Users See:**
- Photo 1 shows for 5 seconds
- Fades to Photo 2 (smooth 0.8s transition)
- Photo 2 shows for 5 seconds
- Fades to Photo 3
- Photo 3 shows for 5 seconds
- Fades back to Photo 1
- Repeats forever!

### 3. **Manual Controls:**
Users can override auto-rotation at any time:
- **Click left arrow** (‹) → Go to previous photo
- **Click right arrow** (›) → Go to next photo
- **Click a dot** → Jump to that specific photo

After manual navigation, auto-rotation continues from the new position.

---

## Customization Options:

### Change Auto-Rotation Speed

**Location:** `script.js` - Bottom of the carousel section

```javascript
// Current: 5 seconds
setInterval(nextSlide, 5000);

// Examples:
setInterval(nextSlide, 3000);  // 3 seconds (faster)
setInterval(nextSlide, 8000);  // 8 seconds (slower)
setInterval(nextSlide, 10000); // 10 seconds (much slower)
```

### Turn Off Auto-Rotation

If you want photos to ONLY change when users click:

**Option 1:** Comment out the line
```javascript
// setInterval(nextSlide, 5000);  // <-- Add // at the start
```

**Option 2:** Delete the line completely
```javascript
// Just remove:  setInterval(nextSlide, 5000);
```

### Change Fade Speed

**Location:** `styles.css` - Find `.carousel-photo`

```css
.carousel-photo {
  transition: opacity 0.8s ease-in-out;  /* Current: 0.8 seconds */
  /* Change to: */
  transition: opacity 0.5s ease-in-out;  /* Faster fade */
  transition: opacity 1.2s ease-in-out;  /* Slower fade */
}
```

---

## Current Setup:

Right now you have **3 photo slots**:

1. `Home Page Photo.JPG` (your current photo)
2. `photo2.jpg` (placeholder - add your photo here)
3. `photo3.jpg` (placeholder - add your photo here)

### To activate the carousel:

1. Add your actual photos to the `assets/` folder
2. Name them `photo2.jpg` and `photo3.jpg` OR
3. Update the `src` in the HTML to match your filenames

**Example:**
```html
<img src="assets/Home Page Photo.JPG" alt="Bera Yavuz" class="carousel-photo active">
<img src="assets/bera-lab-work.jpg" alt="Bera Yavuz" class="carousel-photo">
<img src="assets/bera-presenting.jpg" alt="Bera Yavuz" class="carousel-photo">
```

---

## Visual Flow:

```
Photo 1 (visible)
    ↓ (5 seconds)
[Fade out Photo 1, Fade in Photo 2]  (0.8s transition)
    ↓
Photo 2 (visible)
    ↓ (5 seconds)
[Fade out Photo 2, Fade in Photo 3]  (0.8s transition)
    ↓
Photo 3 (visible)
    ↓ (5 seconds)
[Fade out Photo 3, Fade in Photo 1]  (0.8s transition)
    ↓
REPEAT FOREVER ↻
```

---

## Navigation Elements:

### Left/Right Arrows:
- Green outlined boxes with ‹ and ›
- Positioned on left and right sides of photo
- Click to manually navigate
- Hover effect: glows brighter

### Bottom Dots:
- Small circles at bottom center
- Active photo's dot is filled and glowing
- Click any dot to jump to that photo
- Number of dots = number of photos

---

## Tips:

1. **Best photo ratio:** 4:5 (portrait) - like 800x1000px
2. **File size:** Keep under 2MB for fast loading
3. **Number of photos:** 3-5 works best (too many = carousel never stops)
4. **Timing:** 5 seconds gives users time to actually look at each photo
5. **Consistency:** Use photos with similar lighting/style

---

## Troubleshooting:

**Q: Photos aren't rotating?**
- Check browser console for JavaScript errors
- Make sure all image files exist
- Verify file names match exactly (case-sensitive!)

**Q: Photos rotate too fast/slow?**
- Adjust `setInterval(nextSlide, XXXX)` value in script.js

**Q: Only seeing one photo?**
- Check that other images exist in assets folder
- Make sure file paths are correct
- Only first photo should have `active` class in HTML

**Q: Dots don't match photos?**
- Number of dots must equal number of photos
- Each dot needs unique `data-slide` number (0, 1, 2, ...)

---

Enjoy your auto-rotating photo carousel! 🎠📸
