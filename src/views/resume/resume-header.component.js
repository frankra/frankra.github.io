const template = `
<div class="header pt-3 pe-4 ps-4 pb-2 row">
    <div class=" col-sm-5">
        <div class="name">
            <span>{{resume.name}}</span>
        </div>
        <div class="cv-text-big cv-text-primary">
            <span>{{resume.role}}</span>
        </div>
        <div class="mt-2 cv-text-normal text-body">
            <span>{{resume.description}}</span>
        </div>
    </div>
    <div class="col-sm-2 avatar-container">
        <img src="https://avatars.githubusercontent.com/u/5017439?v=4" class="avatar"/>
    </div>

    <div class=" col-sm-5 text-end cv-text-body cv-text-normal">
        <div class="pt-2">
            <a v-bind:href="'mailto:' + resume.email">{{resume.email}}</a>
            <i class="ms-2 bi bi-envelope"></i>
        </div>
        <div class="pt-2">
            {{resume.phone}}
            <i class="ms-2 bi bi-phone"></i>
        </div>
        <div class="pt-2">
            {{resume.location}}
            <i class="ms-2 bi bi-pin-map"></i>
        </div>
        <div class="pt-2">
            <a v-bind:href="resume.linkedinUrl">{{this.removeHttpsFromUrl(resume.linkedinUrl)}}</a>
            <i class="ms-2 bi bi-linkedin"></i>
        </div>
        <div class="pt-2">
            <a v-bind:href="resume.webUrl">{{this.removeHttpsFromUrl(resume.webUrl)}}</a>
            <i class="ms-2 bi bi-globe"></i>
        </div>
    </div>
</div>
`;

const resumeHeader = Vue.component('resume-header', {
    props: ['resume'],
    template,
    methods: {
        removeHttpsFromUrl(url) {
            if (url) {
                return url.replace(`https://`, '');
            }
        }
    }
});


export {
    resumeHeader
}