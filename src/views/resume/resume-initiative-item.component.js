const template = `
<div class="initiative-item item">
    <div class="row">
        <span>{{initiative.title}}</span>
    </div>
    <div class="row">
        <span class="text-secondary">{{initiative.institution}}</span>
    </div>
    <div class="row">
        <div class="col-6">
            <span class="title-secondary">{{initiative.date}}</span>
        </div>
        <div class="col-6 text-end title-secondary">{{initiative.location}}</div>
    </div>
    <ul>
        <li>
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