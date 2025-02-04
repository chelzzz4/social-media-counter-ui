const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const inscrement = target / 300;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + inscrement)}`;
      setTimeout(updateCounter, 0.8);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
