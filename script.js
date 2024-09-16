const story = document.getElementById('story');
const choices = document.getElementById('choices');

// Story Nodes
const storyData = {
  start: {
    text: "You wake up in a dark room. You can hear faint whispers from the hallway. What do you do?",
    choices: [
      { text: "Investigate the whispers", next: 'hallway' },
      { text: "Hide under the bed", next: 'bed' }
    ]
  },
  hallway: {
    text: "You slowly step into the hallway, only to find the shadows moving on their own. A door creaks open ahead.",
    choices: [
      { text: "Enter the door", next: 'room' },
      { text: "Run back to the room", next: 'start' }
    ]
  },
  bed: {
    text: "You hide under the bed, but something is already there. You feel cold hands grab your ankles...",
    choices: [
      { text: "Scream for help", next: 'end1' },
      { text: "Try to fight", next: 'end2' }
    ]
  },
  room: {
    text: "Inside the room, you find a mirror reflecting something that isn't there. A figure slowly emerges from it...",
    choices: [
      { text: "Look away", next: 'end3' },
      { text: "Step closer", next: 'end4' }
    ]
  },
  end1: { text: "You scream, but no one hears you. The hands drag you into the darkness. Game Over." },
  end2: { text: "You fight, but the grip is too strong. You are pulled into the abyss. Game Over." },
  end3: { text: "You look away just in time, but the figure grabs you from behind. It's too late. Game Over." },
  end4: { text: "As you step closer, the figure smiles. You've become part of the mirror now. Game Over." }
};

// Game Logic
function startStory(nodeKey) {
  const node = storyData[nodeKey];
  story.innerText = node.text;
  choices.innerHTML = '';
  
  if (node.choices) {
    node.choices.forEach(choice => {
      const button = document.createElement('button');
      button.innerText = choice.text;
      button.onclick = () => startStory(choice.next);
      choices.appendChild(button);
    });
  }
}

startStory('start');
