const template = `
<div>
    <div class="p-4 header">
        <div class="row name">
            <span>{{resume.name}}</span>
        </div>
        <div class="row role">
            <span>{{resume.role}}</span>
        </div>
        <div class="row mt-3 description">
            <span>{{resume.description}}</span>
        </div>
    </div>
 
    <div class="ps-4 pe-4 pt-2 pb-2 sub-header">
        <div class="row mb-2">
            <div class="col-6">
                <i class="me-2 bi bi-envelope"></i>
                <a v-bind:href="'mailto:' + resume.email">{{resume.email}}</a>
            </div>
            <div class="col-6">
                <i class="me-2 bi bi-phone"></i>
                {{resume.phone}}
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-6">
                <i class="me-2 bi bi-pin-map"></i>
                {{resume.location}}
            </div>
            <div class="col-6">
                <i class="me-2 bi bi-linkedin"></i>
                <a v-bind:href="resume.linkedinUrl">{{this.removeHttpsFromUrl(resume.linkedinUrl)}}</a>
            </div>
        </div>
        <div class="row mb-2">
            <div class="col-6">
                <i class="me-2 bi bi-github"></i>
                <a v-bind:href="resume.githubUrl">{{this.removeHttpsFromUrl(resume.githubUrl)}}</a>
            </div>
        </div>
    </div>
</div>
`

const resumeHeader = Vue.component('resume-header', {
    props: ['resume'],
    template,
    methods: {
        removeHttpsFromUrl(url){
            if (url){
                return url.replace(`https://`,'');
            }
        }
    }
});


export {
    resumeHeader
}