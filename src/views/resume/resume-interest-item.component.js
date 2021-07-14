const template = `
<div class="interest-item big-pill">
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