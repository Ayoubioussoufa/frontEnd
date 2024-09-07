const toggleBtn = document.getElementById("toggle-btn");
const friendList = document.querySelector(".friend-list");
const conversation = document.querySelector(".conversation");

document.addEventListener("DOMContentLoaded", function () {
    toggleBtn.addEventListener("click", function () {
      if (friendList.style.display === "none") {
        friendList.style.display = "block";
      } else {
        friendList.style.display = "none";
        conversation.style.display = "none"; 
      }
    });
  
    document.querySelectorAll(".friend").forEach(friend => {
      friend.addEventListener("click", function () {
        // document.getElementById("friend-name").textContent = this.getAttribute("data-friend");
        let friendName = "salam";
        if (document.querySelector('.conversation').style.display == 'none') {
          document.querySelector('.conversation').style.display = 'block';
          document.getElementById('conversation-content').innerHTML = `<p>Chatting with ${friendName}...</p>`;
      }
      else
          document.querySelector('.conversation').style.display = 'none';
      });
    });
  
    document.getElementById("back-button").addEventListener("click", function () {
      friendList.style.display = "block";
      conversation.style.display = "none";
    });
});

document.getElementById('search-btn').addEventListener('click', function() {
    if (document.getElementById('search-bar').style.display == 'block')
    {
        document.getElementById('search-bar').style.display = 'none';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
    else {
        document.getElementById('search-bar').style.display = 'block';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
});

document.getElementById('add-btn').addEventListener('click', function() {
    if (document.getElementById('add-friend-bar').style.display == 'block')
    {
        document.getElementById('search-bar').style.display = 'none';
        document.getElementById('add-friend-bar').style.display = 'none';
    }
    else
    {
        document.getElementById('search-bar').style.display = 'none';
        document.getElementById('add-friend-bar').style.display = 'block';
    }
});

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 10000);
}

setInterval(createBubble, 300);

function handleResize() {
  if (window.innerWidth > 990)
    friendList.style.display = "block";
}

window.addEventListener("resize", handleResize); // TO BE REMOVED F PLAY AND FRIEND DISPLAY NONE fiha 
