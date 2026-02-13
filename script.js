/* ============================================
   ROMANTIC VALENTINE'S DAY WEBSITE - JavaScript
   Animations, Music Player, and Interactivity
   ============================================ */

// ===== MUSIC PLAYER FUNCTIONALITY =====
let audioElement = null;
let isPlaying = false;

function initializeAudio() {
    // Create or get audio element
    audioElement = document.getElementById('background-music');
    if (!audioElement) {
        audioElement = new Audio();
        audioElement.id = 'background-music';
        audioElement.loop = true;
        audioElement.volume = 0.3;
        document.body.appendChild(audioElement);
    }
    
    // Load your romantic background music here
    // Replace 'your-music.mp3' with your actual music file
    audioElement.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
}

function toggleMusic() {
    initializeAudio();
    const btn = document.querySelector('.music-btn');
    
    if (isPlaying) {
        audioElement.pause();
        btn.textContent = '🎵';
        isPlaying = false;
    } else {
        audioElement.play().catch(err => {
            console.log('Audio playback failed:', err);
            alert('Please click play again - browser requires user interaction to play audio');
        });
        btn.textContent = '⏸️';
        isPlaying = true;
    }
}

function setVolume(value) {
    initializeAudio();
    audioElement.volume = value / 100;
}

// ===== FLOATING HEARTS ANIMATION =====
function createFloatingHearts() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-hearts';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random left position
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animation = `float-up ${4 + Math.random() * 3}s ease-in infinite`;
        
        document.body.appendChild(heart);
        
        // Remove element after animation
        setTimeout(() => heart.remove(), 7000);
    }, 500);
}

// ===== TYPING ANIMATION FOR LOVE LETTER =====
function typeWriter(elementId, text, speed = 50) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    element.innerHTML = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== SURPRISE POP-UP =====
let surpriseClicked = false;

function showSurprise() {
    const popup = document.getElementById('surprise-popup');
    const overlay = document.getElementById('popup-overlay');
    
    if (popup && overlay) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
        
        if (!surpriseClicked) {
            surpriseClicked = true;
            createHeartRain(); // Extra effect for first click
        }
    }
}

function closeSurprise() {
    const popup = document.getElementById('surprise-popup');
    const overlay = document.getElementById('popup-overlay');
    
    if (popup && overlay) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Close popup when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeSurprise);
    }
});

// ===== HEART RAIN EFFECT =====
function createHeartRain() {
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '🌹', '✨'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-rain';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-10px';
            heart.style.fontSize = (1 + Math.random()) + 'em';
            
            document.body.appendChild(heart);
            
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
}

// ===== COUNTDOWN TIMER (Until Valentine's Day or Next Anniversary) =====
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    // Set your target date here
    // Format: new Date('YYYY-MM-DD HH:MM:SS')
    const targetDate = new Date('2026-02-14 23:59:59').getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <h3>${days}</h3>
                    <p>Days</p>
                </div>
                <div class="countdown-item">
                    <h3>${hours}</h3>
                    <p>Hours</p>
                </div>
                <div class="countdown-item">
                    <h3>${minutes}</h3>
                    <p>Minutes</p>
                </div>
                <div class="countdown-item">
                    <h3>${seconds}</h3>
                    <p>Seconds</p>
                </div>
            `;
        } else {
            countdownElement.innerHTML = '<h2 style="color: #ff69b4;">💕 Happy Valentine\'s Day! 💕</h2>';
        }
    }, 1000);
}

// ===== SPARKLE EFFECT ON HOVER =====
function addSparkleEffect() {
    document.addEventListener('mousemove', (e) => {
        // Optional: Create sparkles on mouse movement
        // Uncomment if you want extra sparkles following cursor
        /*
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.innerHTML = '✨';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '1em';
        sparkle.style.animation = 'sparkle 0.6s ease-in-out forwards';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
        */
    });
}

// ===== SWEET MESSAGES GENERATOR =====
const sweetMessages = [
    'You make my heart skip a beat! 💕',
    'Every moment with you is a treasure. ✨',
    'You are my greatest love story. 📖❤️',
    'My love for you is infinite. 🌌',
    'You are my sunshine and my moonlight. 🌙☀️',
    'Being with you feels like home. 🏡',
    'You complete me. 💕',
    'Forever starts with you. ⏰',
    'I love you more than words can say. 📝',
    'You are absolutely wonderful. 🌟'
];

function getRandomMessage() {
    return sweetMessages[Math.floor(Math.random() * sweetMessages.length)];
}

// ===== GALLERY IMAGE CUSTOMIZATION =====
function updateGalleryImage(imageNumber, newImageUrl) {
    const img = document.getElementById('gallery-image-' + imageNumber);
    if (img) {
        img.src = newImageUrl;
    }
}

// ===== PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Start floating hearts
    createFloatingHearts();
    
    // Add sparkle effects
    addSparkleEffect();
    
    // Update countdown
    updateCountdown();
    
    // Initialize audio
    initializeAudio();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Console message for developer
    console.log('💕 Happy Valentine\'s Day! 💕');
    console.log('Edit the messages, images, and music in script.js and HTML files');
});

// ===== EASY CUSTOMIZATION FUNCTIONS =====

// Change background music
function setBackgroundMusic(musicUrl) {
    initializeAudio();
    audioElement.src = musicUrl;
    console.log('Music updated to:', musicUrl);
}

// Update love letter text
function updateLoveLetter(newText) {
    const letterContent = document.getElementById('letter-content');
    if (letterContent) {
        letterContent.textContent = newText;
    }
}

// Add custom message to home page
function addCustomMessage(message) {
    const container = document.querySelector('.container');
    if (container) {
        const p = document.createElement('p');
        p.className = 'romantic-text';
        p.textContent = message;
        container.appendChild(p);
    }
}

// Console instructions
console.log(`
╔════════════════════════════════════════╗
║ VALENTINE'S DAY WEBSITE - EDIT GUIDE   ║
╚════════════════════════════════════════╝

📝 TO CUSTOMIZE:

1. IMAGES:
   - Find <img> tags in HTML files
   - Replace src="placeholder.jpg" with your image URL
   - Or use: updateGalleryImage(1, 'your-image.jpg')

2. MUSIC:
   - Find the audio src in index.html
   - Replace with your romantic music URL
   - Or use: setBackgroundMusic('your-music.mp3')

3. TEXT & MESSAGES:
   - Edit text directly in HTML files
   - Or use: updateLoveLetter('your text here')

4. COLORS:
   - Main color: #ff69b4 (pink)
   - Secondary: #ffb6c1 (light pink)
   - Blue: #87ceeb
   - Edit in styles.css

5. DATES:
   - Edit Valentine's date in script.js (line ~160)
   - Change: new Date('2026-02-14 23:59:59')

Happy coding! 💕
`);
