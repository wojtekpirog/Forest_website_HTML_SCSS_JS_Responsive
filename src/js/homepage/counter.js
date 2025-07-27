import { statsSection, counters } from "../main.js";

const options = {
  rootMargin: "-25%"
};

const handleCounterAnimation = () => {
  const observer = new IntersectionObserver(runCounter, options);
  observer.observe(statsSection);
}

const runCounter = (entries) => {
  // Check if the stats section intersects the root (which is the entire viewport by default)
  if (entries[0].isIntersecting) {
    // If the stats section intersects the root, update the counter for each stat
    counters.forEach((counter) => updateCounter(counter));
  }
}

const updateCounter = (counter) => {
  // Get the target number of the counter from its data attribute
  const targetNumber = parseInt(counter.dataset.targetNumber);
  // Get the initial value of the counter (which is 0 by default)
  let currentNumber = parseInt(counter.textContent);
  // 
  if (currentNumber < targetNumber) {
    currentNumber += parseInt(targetNumber / 100);
    counter.textContent = currentNumber;
    setTimeout(() => updateCounter(counter), 20);
  }
}

export default handleCounterAnimation;