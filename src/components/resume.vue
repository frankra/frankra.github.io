<script setup>
import resume from "../../data/resume/resume.json";
defineProps({
  resume: resume
})
</script>

<template>
  <div class="text-center">
    <h1>{{ resume.name }}</h1>
    <h2>{{ resume.role }}</h2>
    <div class="d-flex justify-content-between">
      <p>{{ resume.phone }}</p>
      <p>{{ resume.email }}</p>
      <p>{{ resume.linkedinUrl }}</p>
      <p>{{ resume.location }}</p>
    </div>
  </div>

  <h2>Summary</h2>
  <hr />
  <p>{{ resume.description }}</p>

  <h2>Experiences</h2>
  <hr />
  <ul>
    <li v-for="experience in resume.experiences" :key="experience.role">
      <div class="d-flex justify-content-between">
        <h3>{{ experience.company }}</h3>
        <p>{{ experience.location }}</p>
      </div>
      <div class="d-flex justify-content-between">
        <h3>{{ experience.role }}</h3>
        <p>{{ experience.from }} - {{ experience.to }}</p>
      </div>

      <p>{{ experience.description }}</p>
      <ul>
        <li v-for="activity in experience.activities" :key="activity.description">
          {{ activity.description }}
        </li>
      </ul>
    </li>
  </ul>

  <h2>Awards</h2>
  <ul>
    <li v-for="award in resume.awards" :key="award.title">
      <h3>{{ award.title }}</h3>
      <p>{{ award.institution }}</p>
      <p>{{ award.location }}</p>
      <p>{{ award.date }}</p>
      <p>{{ award.description }}</p>
    </li>
  </ul>

  <h2>Education</h2>
  <ul>
    <li v-for="education in resume.education" :key="education.title">
      <h3>{{ education.title }}</h3>
      <p>{{ education.institution }}</p>
      <p>{{ education.from }} - {{ education.to }}</p>
      <p>{{ education.level }}</p>
      <p>{{ education.location }}</p>
    </li>
  </ul>

  <h2>Languages</h2>
  <ul>
    <li v-for="language in resume.languages" :key="language.name">
      <h3>{{ language.name }}</h3>
      <p>{{ language.proficiency }}</p>
    </li>
  </ul>

  <h2>Interests</h2>
  <ul>
    <li v-for="interest in resume.interests" :key="interest.name">
      <h3>{{ interest.name }}</h3>
    </li>
  </ul>

  <h2>Soft Skills</h2>
  <ul>
    <li v-for="skill in resume.softSkills" :key="skill.name">
      <h3>{{ skill.name }}</h3>
    </li>
  </ul>

  <h2>Technical Skills</h2>
  <ul>
    <li v-for="skill in resume.technicalSkills" :key="skill.name">
      <h3>{{ skill.name }}</h3>
    </li>
  </ul>
</template>

<style scoped></style>
