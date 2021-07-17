const template = `
<div class="big-pill">
    <span>{{softSkill.name}}</span>
</div>
`

const resumeSoftSkillItem = Vue.component('resume-soft-skill-item', {
    props: ['softSkill'],
    template
});


export {
    resumeSoftSkillItem
}