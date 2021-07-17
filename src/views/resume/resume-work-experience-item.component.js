const template = `
<div class="work-experience-item item mb-2">
    <div class="row role">
        <span>{{experience.role}}</span>
    </div>
    <div class="row company">
        <span>{{experience.company}}</span>
    </div>
    <div class="row">
        <div class="col-6">
            <span class="title-secondary">{{experience.from}} - {{experience.to}}</span>
        </div>
        <div class="col-6 text-end title-secondary">{{experience.location}}</div>
    </div>
    <div class="row text-secondary description">
        <span>{{experience.description}}</span>
    </div>
    <div class="row mt-2">
        <span class="title-secondary">Achievements/Tasks</span>
    </div>
    <ul>
        <li v-for="activity in experience.activities" class="activity">
            <span>{{activity.description}}</span>
        </li>
    </ul>
    <div class="">
        <span class="title-secondary">Skills</span>
    </div>
    <div class="d-flex flex-wrap">
        <div v-for="skill in experience.skills" class="pill">
            <span>{{skill.name}}</span>
        </div>
    </div>
</div>
`

const resumeWorkExperienceItem = Vue.component('resume-work-experience-item', {
    props: ['experience'],
    template
});


export {
    resumeWorkExperienceItem
}