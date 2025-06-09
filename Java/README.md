# Food Manager (Java & React)

Food Manager est une application web permettant de gérer vos stocks alimentaires, suivre les dates de péremption et réduire le gaspillage.

## Prérequis
- Java (JDK 17 ou supérieur recommandé)
- Maven (pour la gestion du projet)

## Fonctionnalités

- Gestion des aliments : ajout, modification, suppression
- Suivi des quantités et des dates de péremption
- Alertes pour les produits proches de la date limite
- Interface web moderne (React) et API backend (Spring Boot)

## Structure du projet

## Structure du projet (backend vs frontend)

```
Java/
├── backend/
│   ├── pom.xml
│   └── src/
│       ├── main/
│       │   ├── java/
│       │   │   └── com/
│       │   │       └── foodmanager/
│       │   │           ├── FoodManagerApplication.java
│       │   │           ├── model/
│       │   │           │   ├── Utilisateur.java
│       │   │           │   ├── Nourriture.java
│       │   │           │   ├── Plat.java
│       │   │           │   ├── MonBuffet.java
│       │   │           │   ├── Favorie.java
│       │   │           │   └── Allergie.java
│       │   │           └── controller/
│       │   │               ├── UtilisateurController.java
│       │   │               ├── NourritureController.java
│       │   │               ├── PlatController.java
│       │   │               ├── MonBuffetController.java
│       │   │               ├── FavorieController.java
│       │   │               └── AllergieController.java
│       │   └── resources/
│       │       └── application.properties
│       |
|       └── ...
|  
|
|     
├── frontend/
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── com/foodmanager/views/
│   │               ├── LoginView.java
│   │               ├── RegisterView.java
│   │               ├── BuffetView.java
│   │               ├── PlatsView.java
│   │               └── ...
│   └── ...
└── ...
```

## Outils de Backend

- **Spring Boot** pour l’API REST et la logique métier
- **JPA/Hibernate** pour la persistance des données
- **PostgreSQL** comme base de données

## Outils du Frontend

- **Vaadin** pour l’interface utilisateur Java moderne (intégrée à Spring Boot)
- Les vues principales sont dans `com.foodmanager.views` (ex: LoginView, RegisterView, BuffetView, PlatsView...)



## Lancer le projet

```bash
cd Java/backend
mvn clean install
mvn spring-boot:run
```

Accédez à l’interface web sur [http://localhost:8080](http://localhost:8080).

---



## Installation

```bash
sudo apt update
sudo apt install openjdk-17-jdk maven

git clone https://github.com/votre-utilisateur/Food_Manager.git
cd Food_Manager
```

## Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT.
