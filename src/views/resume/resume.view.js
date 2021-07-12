import { client } from '../../rest.client.js'; 

const template = `
<div>
    <div>Title</div>
    {{ test }}
</div>
`

const resumeView = Vue.component('resume-view', {
    template,
    data: ()=>{
        return {
            test: 'ok'
        }
    }
});


export {
    resumeView
}