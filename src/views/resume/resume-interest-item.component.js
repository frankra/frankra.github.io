const template = `
<div class="big-pill">
    <span>{{interest.name}}</span>
</div>
`

const resumeInterestItem = Vue.component('resume-interest-item', {
    props: ['interest'],
    template
});


export {
    resumeInterestItem
}