// JavaScript for Project Tabs
document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const projectContents = document.querySelectorAll(".project-content");

    tabLinks.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and content
            tabLinks.forEach((t) => t.classList.remove("active"));
            projectContents.forEach((c) => c.classList.remove("active"));

            // Add active class to the clicked tab and corresponding content
            tab.classList.add("active");
            const projectId = tab.getAttribute("data-project");
            document.getElementById(projectId).classList.add