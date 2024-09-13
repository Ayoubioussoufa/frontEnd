export function initProfilPage() {
    const editProfileBtn = document.getElementById('editProfileBtn');
    const achievementsContainer = document.getElementById('achievementsContainer');
    const friendsContainer = document.getElementById('friendsContainer');

    // Edit Profile Button Click Event
    editProfileBtn.addEventListener('click', function() {
        alert('Edit profile functionality to be implemented');
    });

    // Mock achievements data
    const achievements = [
        { name: 'Master Strategist', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Level 50 Warrior', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: '1000 Games Played', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Tournament Winner', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Legendary Player', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Social Butterfly', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Master Strategist', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Level 50 Warrior', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: '1000 Games Played', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Tournament Winner', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Legendary Player', icon: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Social Butterfly', icon: 'https://i.pravatar.cc/160?img=3' }
    ];

    // Populate Achievements
    achievements.forEach(achievement => {
        const div = document.createElement('div');
        div.className = 'achievement-item';
        div.innerHTML = `
            <img src="${achievement.icon}" alt="${achievement.name}" class="achievement-icon">
            <div>
                <p class="achievement-name">${achievement.name}</p>
            </div>
        `;
        achievementsContainer.appendChild(div);
    });

    // Mock friends data
    const friends = [
        { name: 'Alice', status: 'online', picture: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Bob', status: 'offline', picture: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Charlie', status: 'online', picture: 'https://i.pravatar.cc/160?img=3' },
        { name: 'David', status: 'offline', picture: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Eve', status: 'online', picture: 'https://i.pravatar.cc/160?img=3' },
        { name: 'Frank', status: 'offline', picture: 'https://i.pravatar.cc/160?img=3' }
    ];

    // Sort friends by status (online first)
    friends.sort((a, b) => (a.status === 'offline') - (b.status === 'offline'));

    // Populate Friends List
    friends.forEach(friend => {
        const div = document.createElement('div');
        div.className = 'friend-item';
        div.innerHTML = `
            <img src="${friend.picture}" alt="${friend.name}" class="friend-picture">
            <div>
                <p class="friend-name">${friend.name}</p>
                <span class="friend-status ${friend.status}">
                    <span class="status-indicator"></span>
                    ${friend.status.charAt(0).toUpperCase() + friend.status.slice(1)}
                </span>
            </div>
        `;
        friendsContainer.appendChild(div);
    });
}