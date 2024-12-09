const snowflakesContainer = document.querySelector('.snowflakes');

setInterval(() => {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
  snowflake.style.animationDelay = `${Math.random() * 2}s`;

  snowflakesContainer.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}, 100);

function openTab(tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => button.classList.remove('active'));

  const activeTabContent = document.getElementById(tabName);
  activeTabContent.classList.add('active');

  const activeButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
  activeButton.classList.add('active');
}
