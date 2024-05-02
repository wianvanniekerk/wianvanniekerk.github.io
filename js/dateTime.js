function updateDateTime() {
    const currentDateTime = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };
    const formattedDateTime = currentDateTime.toLocaleString('en-US', options);
    document.getElementById('datetime').textContent = formattedDateTime;
}
updateDateTime();
setInterval(updateDateTime, 1000); 