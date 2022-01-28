let root;

let bits = []

function flipBit(bit) {
    bit[0].textContent = (bit[0].textContent == "0") ? "1" : "0";
    if (bit[1] != null) clearTimeout(bit[1]);
    bit[0].style.color = "green";
    bit[1] = setTimeout(() => {
        bit[0].style.color = "lime";
    }, 300);
}

function makeByte() {
    const res = document.createElement("div");
    res.className = "byte";

    for (let i = 0; i < 8; i++) {
        const bit = document.createElement("button");
        bit.className = "bit";
        bit.textContent = Math.random() > 0.5 ? "1" : "0";
        res.appendChild(bit);
        let a = [bit, null];
        bits.push(a);
        bit.addEventListener("click", () => {
            flipBit(a);
        });
    }

    return res;
}

window.addEventListener("load", () => {
    root = document.getElementById("bits");
    for (let i = 0; i < 128; i++) {
        root.appendChild(makeByte());
    }
});

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 32) {
        for (let bit of bits) {
            if (Math.random() < 0.1) flipBit(bit);
        }
    } else {
        let flippedNone = true;
        for (let bit of bits) {
            if (Math.random() < 0.01) {
                flippedNone = false;
                flipBit(bit);
            }
        }
        if (flippedNone) {
            let bit = bits[Math.floor(Math.random() * bits.length)];
            flipBit(bit);
        }
    }
})
