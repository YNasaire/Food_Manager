// AUTH
export async function login(email, mot_de_passe) {
  const res = await fetch(`/api/utilisateurs/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, mot_de_passe }),
  });
  return res.json();
}

export async function register(nom, prenom, email, mot_de_passe) {
  const res = await fetch(`/api/utilisateurs/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nom, prenom, email, mot_de_passe }),
  });
  return res.json();
}

// BUFFET
export async function addBuffet(data) {
  const res = await fetch(`/api/mon_buffets/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getBuffetByUser(userId) {
  const res = await fetch(`/api/mon_buffets/${userId}`);
  return res.json();
}

// FAVORIS
export async function addFavorie(data) {
  const res = await fetch(`/api/favorie/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getFavoriesByUser(userId) {
  const res = await fetch(`/api/favorie/user/${userId}`);
  return res.json();
}

// ALLERGIES
export async function addAllergie(data) {
  const res = await fetch(`/api/allergies/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getAllergiesByUser(userId) {
  const res = await fetch(`/api/allergies/user/${userId}`);
  return res.json();
}

export async function deleteBuffetItem(itemId) {
  const res = await fetch(`/api/mon_buffets/${itemId}`, {
    method: "DELETE",
  });
  return res.json();
}

export async function deleteAllergieItem(itemId) {
  const res = await fetch(`/api/allergies/${itemId}`, { method: "DELETE" });
  return res.json();
}
export async function deleteFavorieItem(itemId) {
  const res = await fetch(`/api/favorie/${itemId}`, { method: "DELETE" });
  return res.json();
}