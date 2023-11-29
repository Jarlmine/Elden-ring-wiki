

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const search = document.getElementById('search');
    search.classList.toggle('active'); // 
}



//tableau pour les categories
const categories = [
    { name: "Dagues", image: "img/dagues/dagger_dagger_weapon_elden_ring_wiki_guide_200px.webp" },
    { name: "Épée courtes", image: "img/epeeCourtes/short_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.webp" },
   
];

// Tableau pour les armes 
const weapons = [
    { category: "Dagues", name: "Dague", image: "img/dagues/dagger_dagger_weapon_elden_ring_wiki_guide_200px.webp" },
    { category: "Dagues", name: "Grand Couteau", image: "img/dagues/great_knife_dagger_weapon_elden_ring_wiki_guide_200px.webp" },
    { category: "Épée courtes", name: "Longue épée", image: "img/epeeCourtes/longsword_straight_sword_weapon_elden_ring_wiki_guide_200px.webp" }
    // Ajoutez d'autres armes avec leurs informations
];

function displayWeaponsByCategory(category) {
    const armesContainer = document.getElementById("armesContainer");
    armesContainer.innerHTML = "";

    const weaponsByCategory = weapons.filter(weapon => weapon.category === category);

    weaponsByCategory.forEach(weapon => {
        const weaponDiv = document.createElement("div");
        weaponDiv.classList.add("weapon-item");

        const weaponImage = document.createElement("img");
        weaponImage.src = weapon.image;
        weaponImage.alt = weapon.name;

        const weaponName = document.createElement("p");
        weaponName.textContent = weapon.name;

        weaponDiv.appendChild(weaponImage);
        weaponDiv.appendChild(weaponName);

        armesContainer.appendChild(weaponDiv);
    });
}

const categoryImages = document.querySelectorAll('.category-image');

categoryImages.forEach(image => {
    image.addEventListener('click', () => {
        const category = image.alt;
        document.getElementById('armesTitle').textContent = `Armes de la catégorie : ${category}`;
        displayWeaponsByCategory(category);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const categoryImages = document.querySelectorAll('.category-image');

    categoryImages.forEach(image => {
        image.addEventListener('click', () => {
            const category = image.alt;
            document.getElementById('armesTitle').textContent = `Armes de la catégorie : ${category}`;
            displayWeaponsByCategory(category);

            // Vérification du clic sur l'image
            console.log(`L'image avec l'alt "${image.alt}" a été cliquée.`);
        });
    });
});