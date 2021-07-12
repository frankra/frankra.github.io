import { resumeHeader } from './resume-header.component.js';
import { resumeWorkExperienceItem } from './resume-work-experience-item.component.js';

const template = `
<div id="resume" class="cv container">
    <resume-header v-bind:resume="resume"></resume-header>

    <div class="d-flex flex-wrap content">

        <div class="col-6">
            <span class="title">WORK EXPERIENCE</span>
            <resume-work-experience-item 
                v-for="experience in resume.experiences"
                v-bind:experience="experience">
            </resume-work-experience-item>
        </div>
        
        
    </div>
</div>
`

const resumeView = Vue.component('resume-view', {
    template,
    data: function () {
        return {
            resume: {
                experiences:[]
            }
        }
    },
    created: async function () {
        const request = await fetch('/data/json/resume-data.json');
        const resume = await request.json();

        this.resume = resume;
    }
});


export {
    resumeView
}