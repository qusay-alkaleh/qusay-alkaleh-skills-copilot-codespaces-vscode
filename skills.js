function calculateSkillLevel(experience) {
    if (experience < 0) {
        throw new Error("Experience cannot be negative");
    } else if (experience < 100) {
        return "Beginner";
    } else if (experience < 500) {
        return "Intermediate";
    } else if (experience < 1000) {
        return "Advanced";
    } else {
        return "Expert";
    }
}