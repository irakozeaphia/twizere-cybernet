
// Welcome message (Home Page)
let welcome = document.getElementById("welcome");

if (welcome) {
    welcome.innerHTML = "Welcome to Twizere CyberNet! Stay safe online.";
}

// Report Page

let reportBtn = document.getElementById("reportBtn");

if (reportBtn) {

    reportBtn.onclick = function () {

        document.getElementById("message").innerHTML =
            "✔ Your cyber fraud report has been submitted successfully.";

    };

}


// Detector Page

let scanBtn = document.getElementById("scanBtn");

if (scanBtn) {

    scanBtn.onclick = function () {

        let text = document.getElementById("messageBox").value.toLowerCase();

        if (
            text.includes("password") ||
            text.includes("pin") ||
            text.includes("bank") ||
            text.includes("click") ||
            text.includes("verify") ||
            text.includes("urgent") ||
            text.includes("account") ||
            text.includes("money")
        ) {

            document.getElementById("result").innerHTML =
                "⚠ Warning! This message looks suspicious. It may be a phishing attempt.";

        } else {

            document.getElementById("result").innerHTML =
                "✔ No obvious phishing keywords were detected.";

        }

    };

}


// Lesson Page

let lessonBtn = document.getElementById("lessonBtn");

if (lessonBtn) {

    lessonBtn.onclick = function () {

        document.getElementById("lessonMessage").innerHTML =
            "Great! You have started learning how to protect yourself from cyber attacks.";

    };

}
