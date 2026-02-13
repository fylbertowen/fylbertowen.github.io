# 💕 My Valentine's Day Website 💕

A beautiful, romantic Valentine's Day website created with HTML, CSS, and JavaScript. This is a personalized gift for your girlfriend with 4 interactive pages, smooth animations, music, and much more!

---

## 🎯 Features

✨ **4 Beautiful Pages:**
- 🏠 **Home/Welcome** - Romantic greeting with countdown timer
- 📸 **Our Memories** - Photo gallery with 8 placeholder spots
- 💌 **Love Letter** - Typed letter with animation effect
- 🎤 **Voice Message** - Audio player for your voice message

✨ **Magical Effects:**
- ❤️ Floating hearts animation
- ✨ Sparkle effects on hover
- 🎁 Surprise button with pop-up message
- 💕 Heart rain effect
- 🌟 Smooth page transitions and glowing borders
- 📊 Countdown timer to Valentine's Day

✨ **Interactive Features:**
- 🎵 Background music with play/pause & volume control
- 📱 Fully mobile responsive design
- 💫 Cute hover effects on all buttons
- 🔤 Typing animation for love letter
- 🎨 Soft pastel colors and romantic design

---

## 📁 Files in This Website

```
indikator/
├── index.html          (Home/Welcome page)
├── memories.html       (Photo gallery)
├── letter.html         (Love letter with typing animation)
├── voice.html          (Voice message player)
├── styles.css          (All styling for all pages)
├── script.js           (All animations and interactive features)
└── README.md           (This file)
```

---

## 🚀 How to Open the Website

1. **Open in Browser:**
   - Right-click on `index.html`
   - Select "Open with" → Choose your browser (Chrome, Firefox, Safari, Edge)
   - Or drag `index.html` into your browser window

2. **Make it a Bookmark:**
   - Once open, press `Ctrl+D` (Windows) or `Cmd+D` (Mac)
   - She can click the bookmark anytime to visit

---

## ✏️ EASY CUSTOMIZATION GUIDE

### 1. 📸 Change Photos (Memories Page)

**Option A: Use Image URLs (Easiest)**

1. Open `memories.html` in a text editor (right-click → "Open with" → Notepad)
2. Find lines like this:
   ```html
   <img src="https://via.placeholder.com/400x300?text=Our+First+Meeting" alt="First Meeting">
   ```
3. Replace the URL with your image:
   ```html
   <img src="YOUR_IMAGE_URL_HERE" alt="First Meeting">
   ```

**How to get image URLs:**
- Google Photos: Right-click image → "Copy image address" → Paste
- Imgur.com: Upload image → Copy the "Direct Link"
- Any image ending in `.jpg`, `.png`, `.gif` works!

**Option B: Use Local Files**

1. Create a folder called `images` in the same folder as your HTML files
2. Save your photos in that folder (e.g., `photo1.jpg`)
3. In the HTML, change to: `<img src="images/photo1.jpg">`

---

### 2. 💌 Edit the Love Letter

1. Open `letter.html` in a text editor
2. Find the section starting with `<div id="letter-content">`
3. Replace the text with your own love letter
4. Save the file

**To change typing speed:**
- Open `script.js`
- Find the line: `typeWriter('letter-content', letterText, 15);`
- Change `15` to:
  - Lower number = faster typing (e.g., `5`)
  - Higher number = slower typing (e.g., `30`)

---

### 3. 🎤 Add Your Voice Message

**EASIEST METHOD - Record Online (FREE):**

1. Go to **vocaroo.com**
2. Click "Click to allow access to your microphone"
3. Click the RED RECORD button
4. Speak your message to her (tell her you love her, a favorite memory, etc.)
5. Click STOP
6. Click the LINK ICON (chain symbol)
7. Copy the link that appears
8. Open `voice.html` in text editor
9. Find: `<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"`
10. Replace with: `<source src="YOUR_VOCAROO_LINK"`

**Example:**
```html
<source src="https://voca.ro/YOUR_CODE_HERE" type="audio/mpeg">
```

---

### 4. 🎵 Change Background Music

1. Find a romantic song (.mp3 file) or music URL
2. Open `index.html` (or any page) in a text editor
3. Find the line: `audioElement.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';`
4. In `script.js`, replace with your music URL

**Where to find royalty-free romantic music:**
- YouTube Audio Library (free)
- pixabay.com/music
- incompetech.com
- bensound.com

---

### 5. 🎨 Change Colors

All colors are in `styles.css`. The main colors are:

- `#ff69b4` = Hot Pink (headings, accents)
- `#ffb6c1` = Light Pink (buttons background)
- `#87ceeb` = Sky Blue (secondary button)

**To change:**
1. Open `styles.css`
2. Find `#ff69b4` and replace with your color code
3. Use color picker: https://www.color-hex.com/

---

### 6. ❤️ Edit Home Page Text

1. Open `index.html` in text editor
2. Find text between `<p>` and `</p>` tags
3. Edit to your own messages
4. You can add emojis like: 💕 ✨ 🌹 💖

---

### 7. 🎁 Customize Surprise Message

1. Open `index.html` in text editor
2. Find: `<div id="surprise-popup" class="popup">`
3. Edit the text inside to your custom surprise message
4. Do the same for all 4 HTML files if you want different surprises on each page

---

### 8. 📅 Change Valentine's Day Date (Countdown)

If you want the countdown to show a different date:

1. Open `script.js`
2. Find this line (around line 160): `const targetDate = new Date('2026-02-14 23:59:59').getTime();`
3. Change `2026-02-14` to your date in format: `YYYY-MM-DD`
4. You can use this for anniversaries too!

---

## 🔧 Advanced Customization

### Add More Photos

1. Open `memories.html`
2. Find the gallery section
3. Copy this block and paste it:
   ```html
   <div class="gallery-item">
       <img src="YOUR_IMAGE_URL" alt="Description">
       <div class="gallery-caption">Caption Here</div>
   </div>
   ```
4. Update the image URL and caption

### Add More Surprise Messages

Each page has its own surprise popup. You can edit each one separately:
- `index.html` - Home surprise
- `memories.html` - Memories surprise
- `letter.html` - Love letter surprise
- `voice.html` - Voice message surprise

### Adjust Animation Speeds

In `script.js`, you can change:
- Floating hearts duration: Change `'6s'` to faster/slower
- Heart rain effect: Adjust `setTimeout` values
- Countdown update speed: Modify `setInterval(1000)` (1000 = 1 second)

---

## 💡 Creative Ideas to Make It Special

✨ **Add personal photos from:**
- Phone camera roll
- Instagram
- Google Photos
- Old memories

✨ **Voice message ideas:**
- Record in a quiet room
- Tell her why you love her
- Share a favorite memory
- Ask her about your future together
- Write a script first so you don't forget anything!

✨ **Love letter personalization:**
- Include inside jokes
- Reference special moments you shared
- Write about what makes her unique
- Add your favorite memories together

✨ **Music choice:**
- Pick "your song" from your relationship
- Choose something she loves
- Pick romantic instrumental music
- Use a song that reminds you of her

---

## ❓ Troubleshooting

**Q: Music doesn't play**
- A: Browser might need permission. Click the music button and allow microphone access if asked. Some browsers don't autoplay audio.

**Q: Images don't show**
- A: Check if the URL is correct. Try copying it again from the image source.

**Q: Typing animation is too fast/slow**
- A: Edit the `15` in `typeWriter()` function in `script.js` (line ~100)

**Q: Website looks weird on mobile**
- A: It should be responsive! Try rotating your phone or checking browser zoom (should be 100%)

**Q: Can't open HTML files**
- A: Right-click → "Open with" → Choose your browser (Chrome, Firefox, Safari, Edge)

---

## 💕 Final Tips

1. **Test everything** - Open each page and test music, buttons, animations
2. **Personalize** - The more personal, the more special it is
3. **Check on mobile** - Open on her phone to see how it looks
4. **Keep it safe** - Make a backup folder with original files
5. **Add your own touches** - Edit colors, fonts, messages to match your style

---

## 🎁 Gift Presentation Ideas

- Email her the link
- Send her the folder files via cloud (Google Drive, Dropbox)
- Open it on your device and show her
- Send as a QR code (use qr-code-generator.com)
- Print a nice note with instructions

---

## 📝 Example: Complete Customization

Here's what I changed from the template:

**Before:**
```html
<img src="https://via.placeholder.com/400x300?text=Our+First+Meeting" alt="First Meeting">
```

**After:**
```html
<img src="https://imgur.com/ABC1234.jpg" alt="First Meeting at Coffee Shop">
```

**Before:**
```html
audioElement.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
```

**After:**
```html
audioElement.src = 'https://www.bensound.com/bensound-music/bensound-love.mp3';
```

---

## 💕 Remember

This website is a digital love letter. The effort you put into personalizing it will make it the best Valentine's Day gift ever. She'll absolutely love it!

**Good luck, and happy Valentine's Day!** 💕✨🌹

---

**Questions?** Feel free to customize anything! The code is yours now, make it perfect for your girlfriend.

Made with 💕 for your special someone.
