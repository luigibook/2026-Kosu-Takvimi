// Global state
let filteredRaces = [...racesData];
let currentFilters = {
    type: 'all',
    month: 'all',
    city: 'all',
    distance: 'all',
    search: ''
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderRaces(racesData);
    setupEventListeners();
    updateRaceCount(racesData.length);
});

// Setup event listeners
function setupEventListeners() {
    // Race type toggle
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilters.type = this.dataset.type;
            applyFilters();
        });
    });

    // Filter dropdowns
    document.getElementById('month-filter').addEventListener('change', function() {
        currentFilters.month = this.value;
        applyFilters();
    });

    document.getElementById('city-filter').addEventListener('change', function() {
        currentFilters.city = this.value;
        applyFilters();
    });

    document.getElementById('distance-filter').addEventListener('change', function() {
        currentFilters.distance = this.value;
        applyFilters();
    });

    // Search input
    document.getElementById('search-filter').addEventListener('input', function() {
        currentFilters.search = this.value.toLowerCase();
        applyFilters();
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Apply all filters
function applyFilters() {
    filteredRaces = racesData.filter(race => {
        // Type filter
        if (currentFilters.type !== 'all' && race.type !== currentFilters.type) {
            return false;
        }

        // Month filter
        if (currentFilters.month !== 'all') {
            const raceMonth = race.date.substring(5, 7);
            if (raceMonth !== currentFilters.month) {
                return false;
            }
        }

        // City filter
        if (currentFilters.city !== 'all' && race.city !== currentFilters.city) {
            return false;
        }

        // Distance filter
        if (currentFilters.distance !== 'all') {
            const hasDistance = race.distances.some(d => {
                if (currentFilters.distance === '5K') return d.includes('5K');
                if (currentFilters.distance === '10K') return d.includes('10K');
                if (currentFilters.distance === '21K') return d.includes('21K') || d.includes('Yarı');
                if (currentFilters.distance === '42K') return d.includes('42K') || d.includes('Maraton');
                if (currentFilters.distance === 'ultra') {
                    return d.includes('50K') || d.includes('60K') || d.includes('70K') || 
                           d.includes('80K') || d.includes('90K') || d.includes('100K') || 
                           d.includes('120K') || d.includes('160K') || d.toLowerCase().includes('ultra');
                }
                return false;
            });
            if (!hasDistance) return false;
        }

        // Search filter
        if (currentFilters.search) {
            const searchText = race.name.toLowerCase() + ' ' + race.city.toLowerCase();
            if (!searchText.includes(currentFilters.search)) {
                return false;
            }
        }

        return true;
    });

    renderRaces(filteredRaces);
    updateRaceCount(filteredRaces.length);
    
    // Show/hide no results message
    const noResults = document.getElementById('no-results');
    const racesContainer = document.getElementById('races-container');
    
    if (filteredRaces.length === 0) {
        noResults.style.display = 'block';
        racesContainer.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        racesContainer.style.display = 'grid';
    }
}

// Render races
function renderRaces(races) {
    const container = document.getElementById('races-container');
    container.innerHTML = '';

    races.forEach(race => {
        const card = createRaceCard(race);
        container.appendChild(card);
    });
}

// Create race card element
function createRaceCard(race) {
    const card = document.createElement('div');
    card.className = `race-card ${race.type}`;
    
    const formattedDate = formatDate(race.date);
    const monthName = getMonthName(race.date);
    
    const statusClass = race.status === 'open' ? 'open' : race.status === 'waitlist' ? 'waitlist' : 'closed';
    const statusText = race.status === 'open' ? '✅ Kayıtlar Açık' : 
                      race.status === 'waitlist' ? '⏳ Bekleme Listesi' : 
                      '❌ Kayıtlar Kapandı';
    
    // Website linki buton HTML'i
    let websiteButtonHTML = '';
    if (race.website) {
        websiteButtonHTML = `
            <a href="${race.website}" target="_blank" class="race-website-btn">
                <span class="btn-icon">🌐</span>
                <span class="btn-text">Resmi Website & Kayıt</span>
            </a>
        `;
    }
    
    const typeText = race.type === 'yol' ? '🛣️ Yol Koşusu' : '🌲 Trail';
    const typeBadgeClass = race.type;
    
    let highlightsHTML = '';
    if (race.highlights && race.highlights.length > 0) {
        highlightsHTML = `
            <div class="race-highlights">
                <div class="highlight-tags">
                    ${race.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="race-header">
            <span class="race-type-badge ${typeBadgeClass}">${typeText}</span>
            <h3 class="race-title">${race.name}</h3>
        </div>
        <div class="race-body">
            <div class="race-info">
                <div class="info-item">
                    <span class="info-icon">📅</span>
                    <span class="info-label">Tarih:</span>
                    <span class="info-value">${formattedDate} ${monthName}</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <span class="info-label">Şehir:</span>
                    <span class="info-value">${race.city}</span>
                </div>
            </div>
            <div class="race-distances">
                ${race.distances.map(d => `<span class="distance-tag">${d}</span>`).join('')}
            </div>
            <div class="race-status ${statusClass}">
                ${statusText}
            </div>
            ${highlightsHTML}
            ${websiteButtonHTML}
        </div>
    `;
    
    return card;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    return day;
}

// Get month name
function getMonthName(dateString) {
    const months = [
        'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
        'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
    const date = new Date(dateString);
    return months[date.getMonth()];
}

// Update race count
function updateRaceCount(count) {
    document.getElementById('total-races').textContent = count;
}

// Reset all filters
function resetFilters() {
    // Reset filter values
    currentFilters = {
        type: 'all',
        month: 'all',
        city: 'all',
        distance: 'all',
        search: ''
    };
    
    // Reset UI
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === 'all') {
            btn.classList.add('active');
        }
    });
    
    document.getElementById('month-filter').value = 'all';
    document.getElementById('city-filter').value = 'all';
    document.getElementById('distance-filter').value = 'all';
    document.getElementById('search-filter').value = '';
    
    // Reapply filters
    applyFilters();
}

// Scroll animations
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.race-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Add initial animation styles
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .race-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);
    
    // Trigger initial animation
    setTimeout(() => {
        const cards = document.querySelectorAll('.race-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }, 100);
});