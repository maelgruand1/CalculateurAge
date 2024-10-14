function calculateAge(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupère les valeurs du nom et de la date de naissance
    const nameInput = document.getElementById("name").value;
    const birthDate = new Date(document.getElementById("dateNaiss").value);

    // Récupère la date et l'heure actuelles
    const today = new Date();
    
    // Vérifie si la date de naissance est dans le futur
    if (birthDate > today) {
        alert("Today's date cannot be earlier than your birth date.");
        return;
    }

    // Calcul des différences en millisecondes
    const diffInMilliseconds = today - birthDate;

    // Convertir les millisecondes en secondes, puis en minutes, en heures, en jours
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // Calcul des années
    let years = today.getFullYear() - birthDate.getFullYear();

    // Vérifie si l'anniversaire n'est pas encore passé cette année pour ajuster les années
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        years--;
    }

    // Calcul des mois
    let months = today.getMonth() - birthDate.getMonth();
    if (dayDiff < 0) {
        months--;
    }
    if (months < 0) {
        months += 12;
    }

    // Calcul des jours
    let days = dayDiff;
    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += previousMonth;
    }

    // Calcul des heures
    const hours = today.getHours() - birthDate.getHours();
    let preciseHours = diffInHours % 24;

    // Affiche le résultat
    const resultDisplay = document.getElementById("result");
    resultDisplay.textContent = `${nameInput}, vous avez ${years} ans, ${months} mois, ${days} jours, et ${preciseHours} heures.`;
}

// Ajoute l'événement pour la soumission du formulaire
document.getElementById("ageForm").onsubmit = calculateAge;
