const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


// FOR CHOOSING AN AMOUNT TO DONATE
const customRadio = document.querySelector('input[value="custom"]');
  const customAmountInput = document.getElementById('custom-amount');
  const customAmountLabel = document.getElementById('custom-amount-label');

  customRadio.addEventListener('change', function() {
    customAmountLabel.style.display = this.checked ? 'block' : 'none';
    customAmountInput.value = ''; // Reset custom input if radio changes
  });
