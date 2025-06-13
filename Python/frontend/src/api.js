const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export async function login(email, mot_de_passe) {
  const res = await fetch(`${API_URL}/utilisateurs/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, mot_de_passe }),
  });
  return res.json();
}

export async function register(nom, prenom, email, mot_de_passe) {
  const res = await fetch(`${API_URL}/utilisateurs/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nom, prenom, email, mot_de_passe }),
  });
  return res.json();
}

export async function addBuffet(data) {
  const res = await fetch(`${API_URL}/mon_buffets/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getBuffetByUser(userId) {
  const res = await fetch(`${API_URL}/mon_buffets/${userId}`);
  return res.json();
}

// FAVORIS - une seule route propre
export async function addFavorie(data) {
  const res = await fetch(`${API_URL}/favorie/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getFavoriesByUser(userId) {
  const res = await fetch(`${API_URL}/favorie/user/${userId}`);
  return res.json();
}

// ALLERGIES - une seule route propre
export async function addAllergie(data) {
  const res = await fetch(`${API_URL}/allergies/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getAllergiesByUser(userId) {
  const res = await fetch(`${API_URL}/allergies/user/${userId}`);
  return res.json();
}

// Ajoute ici d'autres fonctions pour les plats, nourritures, etc.