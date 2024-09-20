// Variables to track resources
let rations = 0;
let water = 0;
const partyMembers = [
  { name: "Aragorn", constitution: 16, exhaustion: 0 },
  { name: "Gimli", constitution: 18, exhaustion: 1 },
  { name: "Legolas", constitution: 14, exhaustion: 0 }
];

// Update the UI for rations and water
function updateResources() {
  document.getElementById('rationAmount').textContent = rations;
  document.getElementById('waterAmount').textContent = water;
}

// Add event listeners for resource buttons
document.getElementById('increaseRations').addEventListener('click', () => {
  rations++;
  updateResources();
});

document.getElementById('decreaseRations').addEventListener('click', () => {
  if (rations > 0) rations--;
  updateResources();
});

document.getElementById('increaseWater').addEventListener('click', () => {
  water++;
  updateResources();
});

document.getElementById('decreaseWater').addEventListener('click', () => {
  if (water > 0) water--;
  updateResources();
});

// Update the UI for party members
function updatePartyMembers() {
  const partyDiv = document.getElementById('partyMembers');
  partyDiv.innerHTML = "<h3>Party Members:</h3>";
  partyMembers.forEach((member, index) => {
    const memberDiv = document.createElement('div');
    memberDiv.innerHTML = `
      <strong>${member.name}</strong> - CON: ${member.constitution} (Modifier: ${Math.floor((member.constitution - 10) / 2)})
      <br>Exhaustion: <button onclick="changeExhaustion(${index}, -1)">-</button> ${member.exhaustion} <button onclick="changeExhaustion(${index}, 1)">+</button>
    `;
    partyDiv.appendChild(memberDiv);
  });
}

// Change exhaustion level
function changeExhaustion(index, delta) {
  const member = partyMembers[index];
  member.exhaustion = Math.max(0, member.exhaustion + delta);
  updatePartyMembers();
}

// Initialize the UI
updateResources();
updatePartyMembers();
