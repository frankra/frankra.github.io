const template = `
<div class="item pb-2">
    <div class="row cv-text-big cv-text-body fw-bold">
        <span>{{initiative.title}}</span>
    </div>
    <div class="row cv-text-secondary cv-text-normal fst-italic">
        <div class="col-6">
            <span>{{initiative.date}} ({{initiative.institution}})</span>
        </div>
        <div class="col-6 text-end">{{initiative.location}}</div>
    </div>
    <ul>
        <li class="cv-text-normal mt-1">
            <span>{{initiative.description}}</span>
        </li>
    </ul>
</div>
`

const resumeInitiativeItem = Vue.component('resume-initiative-item', {
    props: ['initiative'],
    template
});


export {
    resumeInitiativeItem
}