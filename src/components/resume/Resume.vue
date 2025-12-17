<script setup>
import resume from "../../../data/resume/resume.json";
defineProps({
  resume: resume
})

// Helper function to convert **bold** text to HTML bold tags
function toBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
}
</script>

<template>
  <div class="resume">
    <!-- Header -->
    <div class="text-center">
      <div class="title fw-bold text-uppercase mb-1">{{ resume.name }}</div>
      <div class="text-accent-lg fw-normal mb-1">{{ resume.role }}</div>
      <div class="d-flex justify-content-center mx-auto gap-4">
        <p>{{ resume.phone }}</p>
        <a class="text-decoration-none" :href="resume.email" target="_blank">{{ resume.email }}</a>
        <a class="text-decoration-none" :href="resume.linkedinUrl" target="_blank">{{ resume.linkedinUrl }}</a>
        <p>{{ resume.location }}</p>
      </div>
    </div>

    <!-- Summary -->
    <div class="text-center text-accent-lg fw-normal pt-5">Summary</div>
    <hr class="mt-2 mb-2" />
    <p v-html="toBold(resume.description)"></p>

    <!-- Experience -->
    <div class="text-center text-accent-lg fw-normal pt-5">Experience</div>
    <hr class="mt-2 mb-2" />
    <div>
      <div class="block mb-5" v-for="experience in resume.experiences" :key="experience.role">
        <div class="d-flex justify-content-between">
          <p class="text-accent-lg">{{ experience.company }}</p>
          <p>{{ experience.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="text-accent-md">{{ experience.role }}</p>
          <p>{{ experience.from }} - {{ experience.to }}</p>
        </div>
        <div>
          <p v-html="toBold(experience.description)"></p>
        </div>

        <ul class="ps-4">
          <li v-for="activity in experience.activities" :key="activity.description">
            <p v-html="toBold(activity.description)"></p>
          </li>
        </ul>
        <div class="text-secondary">
          <span v-for="(skill, index) in experience.skills" :key="skill">
            {{ skill }}<span v-if="index < experience.skills.length - 1">, </span>
          </span>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="text-center text-accent-lg fw-normal pt-5">Education</div>
    <hr class="mt-2 mb-2" />
    <div>
      <div class="block mb-5" v-for="education in resume.education" :key="education.title">
        <div class="d-flex justify-content-between">
          <p class="text-accent-lg">{{ education.institution }}</p>
          <p>{{ education.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="text-accent-md">{{ education.title }}</p>
          <p>{{ education.from }} - {{ education.to }}</p>
        </div>
        <div>
          <p v-html="toBold(education.description)"></p>
        </div>
      </div>
    </div>

    <!-- Awards -->
    <div class="text-center text-accent-lg fw-normal pt-5">Awards</div>
    <hr class="mt-2 mb-2" />
    <div>
      <div class="block mb-5" v-for="award in resume.awards" :key="award.title">
        <div class="d-flex justify-content-between">
          <p class="text-accent-lg">{{ award.title }}</p>
          <p>{{ award.location }}</p>
        </div>
        <div class="d-flex justify-content-between">
          <p class="text-accent-md">{{ award.institution }}</p>
          <p>{{ award.date }}</p>
        </div>
        <div>
          <p v-html="toBold(award.description)"></p>
        </div>
      </div>
    </div>

    <!-- Languages -->
    <div class="text-center text-accent-lg fw-normal pt-5">Languages</div>
    <hr class="mt-2 mb-2" />
    <div>
      <div class="block mb-5">
        <ul class="ps-4">
          <li v-for="language in resume.languages" :key="language.title">
            {{ language.name }}: {{ language.proficiency }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<style scoped>
.resume {
  color: #545454;
}

.resume a {
  color: #545454;
}

.resume p {
  margin-bottom: 0;
}

.title {
  color: #000;
  font-size: 1.6rem;
  line-height: 1.6rem;
}

.text-accent-lg {
  color: #000;
  font-size: 1.2rem;
  line-height: 1.2rem;
}

.text-accent-md {
  color: #000;
  font-size: 1.1rem;
  line-height: 1.1rem;
}

.block {
  break-inside: avoid;
}

@media print {
  .resume {
    font-size: 8pt;
    color: #434343;
  }

  .resume a {
    color: #434343;
  }

  .text-accent-lg {
    font-size: 11pt !important;
    line-height: 11pt !important;
  }

  .text-accent-md {
    font-size: 10pt !important;
    line-height: 10pt !important;
  }
}

@media screen {
  .resume {
    margin-top: 50px
  }
}

@media (min-width: 960px) {
  .resume {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 300px;
  }
}
</style>
