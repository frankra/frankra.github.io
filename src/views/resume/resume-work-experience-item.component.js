const template = `
<div class="work-experience-item">
    <div class="row role">
        <span>{{experience.role}}</span>
    </div>
    <div class="row company">
        <span>{{experience.company}}</span>
    </div>
    <div class="row">
        <div class="float-left">
            <span>{{experience.from}}</span> - <span>{{experience.to}}</span>
        </div>
        <div class="float-right">{{experience.location}}</div>
    </div>
    <div class="row description">
        <span>{{experience.description}}</span>
    </div>

    <ul>
        <li v-for="activity in experience.activities" class="activity">
            <span>{{activity.description}}</span>
        </li>
    </ul>
</div>
`

const resumeWorkExperienceItem = Vue.component('resume-work-experience-item', {
    props: ['experience'],
    template
});


export {
    resumeWorkExperienceItem
}