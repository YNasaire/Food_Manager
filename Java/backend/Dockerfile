# Dockerfile pour backend Java/Spring Boot
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/backend-1.0-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
