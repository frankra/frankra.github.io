const template = `
<div class="award-item item">
    <div class="row">
        <span class="fw-bolder">{{award.title}}</span>
    </div>
    <div class="row">
        <div class="col-6">
            <span class="title-secondary">{{award.date}} ({{award.institution}})</span>
        </div>
        <div class="col-6 text-end title-secondary">{{award.location}}</div>
    </div>
    <ul>
        <li>
            <span>{{award.description}}</span>
        </li>
    </ul>
</div>
`

const resumeAwardItem = Vue.component('resume-award-item', {
    props: ['award'],
    template
});


export {
    resumeAwardItem
}