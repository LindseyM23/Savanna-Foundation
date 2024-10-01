// functionality for the number counter
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


//   dynamic calender functionality

  document.getElementById('check-event-btn').addEventListener('click', function() {
    const datePicker = document.getElementById('event-date-picker');
    const eventMessage = document.getElementById('event-message');
    const selectedDate = new Date(datePicker.value);

    // Sample upcoming events data (replace this with your actual event data)
    const upcomingEvents = [
      { date: '2024-10-20', name: 'Event Title 1' },
      { date: '2024-11-10', name: 'Event Title 2' },
    ];

    const event = upcomingEvents.find(e => new Date(e.date).toDateString() === selectedDate.toDateString());

    if (event) {
      eventMessage.textContent = `Upcoming Event: ${event.name} on ${selectedDate.toDateString()}`;
      eventMessage.style.color = 'green';
    } else {
      eventMessage.textContent = 'No events scheduled on this date.';
      eventMessage.style.color = 'red';
    }
  });

// 
