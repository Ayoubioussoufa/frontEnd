export function initProfilPage() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const achievementsContainer = document.getElementById('achievementsContainer');
    const friendsContainer = document.getElementById('friendsContainer');

    // Edit Profile Button Click Event
    editProfileBtn.addEventListener('click', function () {
        alert('Edit profile functionality to be implemented');
    });

    // Mock achievements data
    const achievements = [
        { name: 'Master Strategist', icon: '/placeholder.svg?height=64&width=64' },
        { name: 'Level 50 Warrior', icon: '/placeholder.svg?height=64&width=64' },
        { name: '1000 Games Played', icon: '/placeholder.svg?height=64&width=64' },
        { name: 'Tournament Winner', icon: '/placeholder.svg?height=64&width=64' },
        { name: 'Legendary Player', icon: '/placeholder.svg?height=64&width=64' },
        { name: 'Social Butterfly', icon: '/placeholder.svg?height=64&width=64' }
    ];

    // Populate Achievements
    achievements.forEach(achievement => {
        const div = document.createElement('div');
        div.className = 'col-6 col-md-4 achievement-item';
        div.innerHTML = `
                <img src="${achievement.icon}" alt="${achievement.name}" class="achievement-icon">
                <p>${achievement.name}</p>
            `;
        achievementsContainer.appendChild(div);
    });

    // Mock friends data
    const friends = [
        { name: 'Alice', status: 'online', picture: '/placeholder.svg?height=50&width=50' },
        { name: 'Bob', status: 'offline', picture: '/placeholder.svg?height=50&width=50' },
        { name: 'Charlie', status: 'online', picture: '/placeholder.svg?height=50&width=50' },
        { name: 'David', status: 'offline', picture: '/placeholder.svg?height=50&width=50' },
        { name: 'Eve', status: 'online', picture: '/placeholder.svg?height=50&width=50' },
        { name: 'Frank', status: 'offline', picture: '/placeholder.svg?height=50&width=50' }
    ];

    // Populate Friends List
    friends.forEach(friend => {
        const div = document.createElement('div');
        div.className = 'friend-item';
        div.innerHTML = `
                <img src="${friend.picture}" alt="${friend.name}" class="friend-picture">
                <div>
                    <p class="friend-name">${friend.name}</p>
                    <span class="friend-status ${friend.status}">${friend.status}</span>
                </div>
            `;
        friendsContainer.appendChild(div);
    });
}