// 🌊 Smooth Scroll
function scrollToNext() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}

// 📦 Reveal sections + Progress bar
window.addEventListener("scroll", () => {

    document.querySelectorAll("section").forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });

    const bar = document.getElementById("progressBar");
    if (bar) {
        let scrollTop = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        bar.style.width = (scrollTop / height) * 100 + "%";
    }
});

// 🎵 Music toggle
function toggleMusic() {
    const music = document.getElementById("bgMusic");
    const btn = document.querySelector(".music-btn");

    if (!music) return;

    if (music.paused) {
        music.play().catch(() => {});
        if (btn) btn.innerHTML = "⏸️";
    } else {
        music.pause();
        if (btn) btn.innerHTML = "🎵";
    }
}

// 🎵 Auto play on first click
document.addEventListener("click", function playOnce() {
    const music = document.getElementById("bgMusic");
    if (music) music.play().catch(() => {});
    document.removeEventListener("click", playOnce);
});

// 💖 Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 600);

// 🎁 Surprise (SAFE)
function showSurprise() {

    // 💥 Flash
    const flash = document.createElement("div");
    flash.classList.add("flash", "show");
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);

    // 💖 Burst
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        let x = (Math.random() - 0.5) * 300;
        let y = (Math.random() - 0.5) * 300;

        heart.animate([
            { transform: "translate(0,0)", opacity: 1 },
            { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ], { duration: 800 });

        setTimeout(() => heart.remove(), 800);
    }

    const msg = document.getElementById("surprise");
    if (msg) {
        msg.innerHTML =
            "Tomorrow I’m coming… and your surprise is going to be unforgettable 💖✨";
        msg.classList.add("show");
    }
}

// 🎉 Celebration (SAFE)
function celebrate() {

    // 🎊 Emoji rain
    for (let i = 0; i < 40; i++) {
        const el = document.createElement("div");
        el.innerHTML = ["🎉","🎂","💖","✨"][Math.floor(Math.random()*4)];
        el.classList.add("fall");
        el.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(el);

        setTimeout(() => el.remove(), 3000);
    }

    // 🎈 Balloons
    for (let i = 0; i < 15; i++) {
        const b = document.createElement("div");
        b.innerHTML = "🎈";
        b.classList.add("balloon");
        b.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(b);

        setTimeout(() => b.remove(), 4000);
    }

    // 💖 Text
    const msg = document.createElement("h1");
    msg.innerHTML = "HAPPY BIRTHDAY 💖";
    msg.style.position = "fixed";
    msg.style.top = "40%";
    msg.style.left = "50%";
    msg.style.transform = "translate(-50%, -50%)";
    msg.style.color = "#ff6f91";
    msg.style.zIndex = "1000";

    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

// 💌 FULL LETTER (UNCHANGED)
const letterText = `Happiieestttttt Birthdayyyyyyy to my only bestest friend… 🎂❤️🫂

From 2011 to 2026 — almost 15 years of a journey… 🕰️
and something tells me, this journey is never going to end. ♾️

I don’t even remember the exact day we first met,
but I clearly remember us. 💫

I remember in 6th… when you left. 😔
And then in 8th… when you came back. 😊
Maybe that was the moment everything started changing —
when our bond slowly grew into something deeper, something more real. ❤️

We were always together. 👭
Eating together 🍱, going to the washroom together 🚶‍♀️,
walking into every class just to give chocolates on birthdays… 🍫🎉

Those small moments… they meant everything. 🥹
And even today, they still do. 💖

After 10th, maybe life took us on different paths. 🌍
We weren’t as close, we didn’t talk much… 📵
There were misunderstandings we never even spoke about. 💭

But somehow, we never let it break us. 🤝
Maybe that’s what love really is —
staying, even in silence. 🤍

And no matter what changed,
one thing never did…

Every year, on your birthday, 🎂
we promised to meet — even if it was just for a few minutes. ⏳

And we always did. 🤍✨

I still smile when I think about what my mom says about you — 😊
“First day I saw her, she had a ponytail and was talking in Hindi with the driver…” 😂

I don’t even remember that moment properly…
but somehow, it still feels special. 💭💛

There are so many memories…
like that night on the mottamadi… 🌙
when we sat, cried, and shared everything we had been holding inside. 😭💞

That day, I felt something I hadn’t felt in a long time —
relief. 🌿

Because in a phase where I felt completely alone in college, 🎓
I realized…
I still had you. 🫶

And honestly,
the bond I share with you…
I never found that with anyone else. 💖

We once planned a random trip to Ooty just for tea… ☕🏔️
and I still believe — one day, we’ll actually go. ✨

No matter what happens,
whether we talk every day or not… 📞

I want you to know this —

I am always there for you. 💙

Always. ♾️

Stay happy 😊
chase every dream you have 🌟
live your life the way you want 💫

And never forget —
you’ll always have me. 💙🫶`;

let index = 0;

// ✉️ Envelope (FIXED)
function openEnvelope() {
    const env = document.querySelector(".envelope");
    const box = document.getElementById("letterBox");

    if (!env || !box) return;

    env.classList.add("open");

    setTimeout(() => {
        box.classList.add("show");
        typeLetter();
    }, 800);
}

// 🖊️ Typewriter
function typeLetter() {
    const el = document.getElementById("typedText");
    if (!el) return;

    if (index < letterText.length) {
        el.innerHTML += letterText.charAt(index);
        index++;
        setTimeout(typeLetter, 20);
    }
}

// 📸 Image zoom (SAFE)
document.querySelectorAll(".memory-grid img").forEach(img => {
    img.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("image-modal");

        const bigImg = document.createElement("img");
        bigImg.src = img.src;

        modal.appendChild(bigImg);
        document.body.appendChild(modal);

        modal.onclick = () => modal.remove();
    });
});