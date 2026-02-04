function generateRoadmap() {
    const goal = document.getElementById("goal").value;
    const roadmapDiv = document.getElementById("roadmap");

    let roadmap = "";

    if (goal === "") {
        roadmapDiv.innerHTML = "<p>Please select a goal.</p>";
        return;
    }

    if (goal === "web") {
        roadmap = `
        <h2>🌐 Web Developer Roadmap</h2>
        <ul>
            <li>HTML Basics</li>
            <li>CSS & Responsive Design</li>
            <li>JavaScript Fundamentals</li>
            <li>Git & GitHub</li>
            <li>Frontend Framework (React)</li>
            <li>Basic Backend (Node.js)</li>
        </ul>`;
    }

    else if (goal === "data") {
        roadmap = `
        <h2>📊 Data Scientist Roadmap</h2>
        <ul>
            <li>Python Basics</li>
            <li>Statistics & Probability</li>
            <li>Data Analysis (Pandas, NumPy)</li>
            <li>Data Visualization</li>
            <li>Machine Learning Basics</li>
            <li>Projects & Kaggle</li>
        </ul>`;
    }

    else if (goal === "android") {
        roadmap = `
        <h2>📱 Android Developer Roadmap</h2>
        <ul>
            <li>Java / Kotlin Basics</li>
            <li>Android Studio</li>
            <li>UI Design (XML / Compose)</li>
            <li>APIs & Firebase</li>
            <li>Testing & Debugging</li>
            <li>Publish on Play Store</li>
        </ul>`;
    }

    else if (goal === "ai") {
        roadmap = `
        <h2>🤖 AI / ML Roadmap</h2>
        <ul>
            <li>Python Programming</li>
            <li>Linear Algebra Basics</li>
            <li>Statistics</li>
            <li>Machine Learning Algorithms</li>
            <li>Deep Learning</li>
            <li>Real-world Projects</li>
        </ul>`;
    }

    else if (goal === "startup") {
        roadmap = `
        <h2>🚀 Startup Founder Roadmap</h2>
        <ul>
            <li>Problem Identification</li>
            <li>Market Research</li>
            <li>Basic Tech Skills</li>
            <li>Business Model</li>
            <li>MVP Development</li>
            <li>Funding & Scaling</li>
        </ul>`;
    }

    roadmapDiv.innerHTML = roadmap;
    }
