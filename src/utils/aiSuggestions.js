export const getSuggestion = (steps, calories) => {
  if (steps < 3000) {
    return "😴 You are less active today. Try walking more!";
  } else if (steps > 8000) {
    return "🔥 Excellent! You're doing great!";
  } else {
    return "👍 Good progress. Stay consistent!";
  }
};